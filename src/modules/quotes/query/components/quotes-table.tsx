"use client"

import { Quote } from "@/graphql/schema.types"
import { QUOTES_QUERY } from "@/modules/quotes/query"
import { useTable } from "@refinedev/react-table"
import { ColumnDef } from "@tanstack/react-table"
import { Paperclip } from "lucide-react"
import { ShadboardTable } from "shadboard"

interface QuotesPropsTable {
  companyId: string
}

export const QuotesTable = ({ companyId }: QuotesPropsTable) => {
  const columns: ColumnDef<Quote>[] = [
    {
      id: "title",
      accessorKey: "title",
      header: "Title",
    },
    {
      id: "status",
      accessorKey: "status",
      header: "Status",
    },
    {
      id: "description",
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <span className="block max-w-xs truncate">
          {row.original.description}
        </span>
      ),
    },
    {
      id: "total",
      accessorKey: "total",
      header: "Total",
      cell: ({ row }) => (
        <span>
          {typeof row.original.total === "number"
            ? row.original.total.toLocaleString(undefined, {
                style: "currency",
                currency: "USD",
              })
            : row.original.total}
        </span>
      ),
    },
  ]

  const refineTable = useTable<Quote>({
    columns,
    refineCoreProps: {
      resource: "quotes",
      meta: {
        gqlQuery: QUOTES_QUERY,
      },
      filters: {
        permanent: [
          {
            field: "company.id",
            operator: "eq",
            value: companyId,
          },
        ],
      },
    },
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-row items-center">
        <Paperclip className="mr-2 inline-block" size={20} />
        <h3 className="text-lg font-semibold">Quotes</h3>
      </div>
      {/* <CustomTable<Quote>
        columns={columns}
        data={refineTable.refineCore.tableQuery.data?.data ?? []}
        refineTable={refineTable}
        onRowClick={handleRowClick}
        rowKey="id"
      /> */}
      <ShadboardTable table={refineTable} />
    </div>
  )
}
