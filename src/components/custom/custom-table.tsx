'use client'

import type { BaseRecord, HttpError } from '@refinedev/core'
import type { UseTableReturnType } from '@refinedev/react-table'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type Row,
} from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react'

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table as TableUi,
} from '@/components/ui/table'

import { EmptyDemo } from '@/components/table/components/empty-slot'
import { Button } from '@/components/ui/button'

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

/**
 * CustomTable
 * - Reutilizable: se le pasan `columns` y `data`
 * - Compatible con refine: si pasas `refineTable` (UseTableReturnType) usa esa instancia
 *
 * Ejemplo de uso:
 * <CustomTable columns={columns} data={data} onRowClick={(r) => console.log(r)} />
 *
 */
export interface CustomTableProps<T extends BaseRecord = BaseRecord> {
  columns: ColumnDef<T, unknown>[]
  data: T[]
  isLoading?: boolean
  onRowClick?: (row: T) => void
  /**
   * Instancia opcional de refine (UseTableReturnType). Si se proporciona, se renderiza usando
   * la tabla de refine para soportar paginación/ordenación nativa de refine.
   */
  refineTable?: UseTableReturnType<T, HttpError>
  /**
   * Propiedad a usar como key cuando la fila tiene una clave propia (p. ej. "id").
   * Si no se proporciona, se usa el id interno de la fila.
   */
  rowKey?: keyof T
}

export const CustomTable = <T extends BaseRecord = BaseRecord>({
  columns,
  data,
  isLoading = false,
  onRowClick,
  refineTable,
  rowKey,
}: CustomTableProps<T>) => {
  // Llamamos siempre al hook local; lo usaremos solo cuando `refineTable` no esté presente
  // Memoizar las entradas para reducir re-renderizados y advertencias del compilador
  const memoColumns = useMemo(() => columns, [columns])
  const memoData = useMemo(() => data, [data])
  const memoGetCoreRowModel = useMemo(() => getCoreRowModel<T>(), [])

  const localTable = useReactTable<T>({
    data: memoData,
    columns: memoColumns,
    getCoreRowModel: memoGetCoreRowModel,
  })
  const localHeaderGroups = localTable.getHeaderGroups()
  const localRows = localTable.getRowModel().rows as Row<T>[]

  // Si hay refineTable, lo preferimos; si no, usamos la tabla local
  const headerGroups = refineTable
    ? refineTable.reactTable.getHeaderGroups()
    : localHeaderGroups
  const rows = (
    refineTable ? refineTable.reactTable.getRowModel().rows : localRows
  ) as Row<T>[]

  // ------ PAGINACIÓN ------
  // Soporte para paginación local (client-side) cuando no se pasa refineTable.
  // Si se pasa refineTable, intentamos usar sus setters (si existen).
  const [pageIndex, setPageIndex] = useState(0) // 0-based
  const [pageSize, setLocalPageSize] = useState(10)

  // Intentos de leer info de paginación desde refineTable (defensivo y tipado)
  type RefinePagination = {
    current?: number
    pageCount?: number
    pageSize?: number
    setCurrent?: (p: number) => void
    setPage?: (p: number) => void
    setPageSize?: (s: number) => void
    refineCore?: {
      current?: number
      pageCount?: number
      pageSize?: number
      setCurrent?: (p: number) => void
      setPageSize?: (s: number) => void
      tableQuery?: { isFetching?: boolean }
    }
  }

  const refine = refineTable as unknown as RefinePagination | undefined

  const refineCurrentRaw = refine?.current ?? refine?.refineCore?.current
  const refinePageCountRaw = refine?.pageCount ?? refine?.refineCore?.pageCount
  const refinePageSizeRaw = refine?.pageSize ?? refine?.refineCore?.pageSize

  const refineCurrent =
    typeof refineCurrentRaw === 'number' ? refineCurrentRaw : undefined
  const refinePageCount =
    typeof refinePageCountRaw === 'number' ? refinePageCountRaw : undefined
  const refinePageSize =
    typeof refinePageSizeRaw === 'number' ? refinePageSizeRaw : undefined

  const totalRows = rows.length
  const effectivePageSize = refineTable
    ? (refinePageSize ?? pageSize)
    : pageSize
  const effectivePageCount = refineTable
    ? (refinePageCount ?? Math.max(1, Math.ceil(totalRows / effectivePageSize)))
    : Math.max(1, Math.ceil(totalRows / effectivePageSize))

  // Para tablas sin refine, tomamos un slice de rows. Para refine, asumimos que `rows` ya está paginado por el servidor.
  const paginatedRows = useMemo(() => {
    if (refineTable) return rows
    const start = pageIndex * effectivePageSize
    return rows.slice(start, start + effectivePageSize)
  }, [rows, pageIndex, effectivePageSize, refineTable])

  // Mantener pageIndex válido cuando cambie el número de páginas o el conjunto de filas
  useEffect(() => {
    if (!refineTable) {
      const maxIndex = Math.max(0, Math.ceil(totalRows / effectivePageSize) - 1)
      if (pageIndex > maxIndex) {
        setPageIndex(maxIndex)
      }
    }
  }, [totalRows, effectivePageSize, pageIndex, refineTable])

  const goToPage = (p: number) => {
    if (refineTable) {
      // refine suele usar 1-based pages: intentamos llamar a setCurrent si existe
      const setCurrent =
        refine?.setCurrent ?? refine?.setPage ?? refine?.refineCore?.setCurrent
      if (typeof setCurrent === 'function') {
        setCurrent(p + 1)
        return
      }
    }
    setPageIndex(Math.max(0, Math.min(p, effectivePageCount - 1)))
  }

  const onChangePageSize = (s: number) => {
    if (refineTable) {
      const setPageSizeRefine =
        refine?.setPageSize ?? refine?.refineCore?.setPageSize
      if (typeof setPageSizeRefine === 'function') {
        setPageSizeRefine(s)
        return
      }
    }
    setLocalPageSize(s)
  }

  return (
    <>
      <TableUi className="">
        <TableHeader>
          {headerGroups.map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {(() => {
            const isFetching =
              refine?.refineCore?.tableQuery?.isFetching ?? isLoading ?? false

            if (isFetching) {
              return (
                <TableRow key="loading">
                  <TableCell
                    colSpan={
                      headerGroups[0]?.headers.length ?? columns.length ?? 1
                    }
                    className="p-4"
                  >
                    <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />
                  </TableCell>
                </TableRow>
              )
            }

            if (paginatedRows.length > 0) {
              return paginatedRows.map((row) => (
                <TableRow
                  key={
                    rowKey ? String(row.original?.[rowKey] ?? row.id) : row.id
                  }
                  data-state={row.getIsSelected() && 'selected'}
                  onClick={() => onRowClick?.(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            }

            return (
              <TableRow key="empty">
                <TableCell
                  colSpan={
                    headerGroups[0]?.headers.length ?? columns.length ?? 1
                  }
                  className="p-8"
                >
                  <EmptyDemo className="w-full" />
                </TableCell>
              </TableRow>
            )
          })()}
        </TableBody>
      </TableUi>

      {/* Pagination controls */}
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div className="text-muted-foreground text-sm">
          Mostrando{' '}
          {refineTable
            ? paginatedRows.length
            : Math.min(totalRows, (pageIndex + 1) * effectivePageSize)}{' '}
          de {totalRows}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => goToPage(0)}
            disabled={
              refineTable
                ? refineCurrent
                  ? refineCurrent <= 1
                  : false
                : pageIndex === 0
            }
            aria-label="Primera página"
            title="Primera página"
          >
            <ChevronsLeft className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              goToPage(
                refineTable
                  ? refineCurrent
                    ? refineCurrent - 2
                    : 0
                  : pageIndex - 1
              )
            }
            disabled={
              refineTable
                ? refineCurrent
                  ? refineCurrent <= 1
                  : false
                : pageIndex === 0
            }
            aria-label="Página anterior"
            title="Página anterior"
          >
            <ChevronLeft className="size-4" />
          </Button>

          <span className="text-sm">
            {refineTable ? (refineCurrent ? refineCurrent : 1) : pageIndex + 1}{' '}
            / {effectivePageCount}
          </span>

          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              goToPage(
                refineTable
                  ? refineCurrent
                    ? refineCurrent
                    : 1
                  : pageIndex + 1
              )
            }
            disabled={
              refineTable
                ? refineCurrent
                  ? refineCurrent >= effectivePageCount
                  : false
                : pageIndex >= effectivePageCount - 1
            }
            aria-label="Página siguiente"
            title="Página siguiente"
          >
            <ChevronRight className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => goToPage(effectivePageCount - 1)}
            disabled={
              refineTable
                ? refineCurrent
                  ? refineCurrent >= effectivePageCount
                  : false
                : pageIndex >= effectivePageCount - 1
            }
            aria-label="Última página"
            title="Última página"
          >
            <ChevronsRight className="size-4" />
          </Button>
        </div>
      </div>
    </>
  )
}

export default CustomTable
