"use client"

import { AvatarField, List, ShadboardTable } from "shadboard"

import { Contact } from "@/graphql/schema.types"
import { CONTACTS_QUERY } from "@/modules/contact/query"
import { useTable } from "@refinedev/react-table"
import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"

export default function ListContactsPage() {
  const columns = useMemo<ColumnDef<Contact>[]>(
    () => [
      {
        id: "name",
        header: "Name",
        cell: ({ row }) => {
          const name = row.original.name
          const avatarUrl = row.original.avatarUrl
          return <AvatarField text={name} src={avatarUrl ?? ""} />
        },
      },
      {
        id: "email",
        header: "Email",
        accessorKey: "email",
      },
      {
        id: "company",
        header: "Company",
        accessorKey: "company.name",
      },
      {
        id: "jobTitle",
        header: "Title",
        accessorKey: "jobTitle",
      },
      {
        id: "status",
        header: "Status",
        accessorKey: "status",
      },
    ],
    []
  )

  const table = useTable({
    columns,
    refineCoreProps: {
      resource: "contacts",
      meta: {
        gqlQuery: CONTACTS_QUERY,
      },
      sorters: { initial: [{ field: "createdAt", order: "desc" }] },
    },
  })

  return (
    <List>
      <ShadboardTable table={table} onRowClick />
    </List>
  )
}
