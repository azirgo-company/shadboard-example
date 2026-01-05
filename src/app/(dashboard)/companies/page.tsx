"use client"

import {
  AvatarField,
  DeleteButton,
  List,
  NumberField,
  ShadboardTable,
} from "shadboard"

import { Company } from "@/graphql/schema.types"
import { COMPANIES_QUERY } from "@/modules/company/query"
import { useNavigation } from "@refinedev/core"
import { useTable } from "@refinedev/react-table"
import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"

export default function ListCompaniesPage() {
  const { show } = useNavigation()
  const columns = useMemo<ColumnDef<Company>[]>(
    () => [
      {
        id: "company",
        header: "Company",
        cell: ({ row }) => {
          const { name, avatarUrl } = row.original as Company
          return <AvatarField text={name} src={avatarUrl ?? ""} />
        },
      },
      {
        id: "salesOwner",
        header: "Sales Owner",
        accessorKey: "salesOwner",
        cell: ({ getValue, row }) => {
          const salesOwner = (getValue() as Company["salesOwner"]) || undefined
          const name = salesOwner?.name
          const avatarUrl = salesOwner?.avatarUrl

          return <AvatarField text={name ?? ""} src={avatarUrl ?? ""} />
        },
      },
      {
        id: "dealsAggregate",
        header: "Open Deals Amount",
        accessorKey: "dealsAggregate",
        cell: ({ row }) => {
          const dealsAggregate = row.getValue("dealsAggregate") as any
          const value = dealsAggregate?.[0]?.sum?.value
          return (
            <span>
              $ <NumberField value={value} />
            </span>
          )
        },
      },
      {
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
            <DeleteButton
              variant={"ghost"}
              recordItemId={row.original.id}
              hideText
            />
          </div>
        ),
      },
    ],
    []
  )

  const table = useTable({
    columns,
    refineCoreProps: {
      meta: {
        gqlQuery: COMPANIES_QUERY,
      },
      sorters: { initial: [{ field: "createdAt", order: "desc" }] },
    },
  })

  return (
    <List>
      <ShadboardTable
        table={table}
        onRowClick={(record: Company) => show("companies", record.id)}
      />
    </List>
  )
}
