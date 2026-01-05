"use client"

import { Contact } from "@/graphql/schema.types"
import { CONTACTS_QUERY } from "@/modules/contact/query"
import { useTable } from "@refinedev/react-table"
import { ColumnDef } from "@tanstack/react-table"
import { Users2 } from "lucide-react"
import Image from "next/image"
import { ShadboardTable } from "shadboard"

interface CompanyContactsTableProps {
  companyId: string
}

export const CompanyContactsTable = ({
  companyId,
}: CompanyContactsTableProps) => {
  const columns: ColumnDef<Contact>[] = [
    {
      id: "name",
      accessorKey: "name",
      header: "Nombre",
      cell: ({ row }) => (
        <div className="flex min-w-0 items-center gap-2">
          {row.original.avatarUrl && (
            <Image
              src={row.original.avatarUrl}
              alt={row.original.name}
              height={10}
              width={10}
              className="h-8 w-8 rounded-full"
            />
          )}
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      id: "jobTitle",
      accessorKey: "jobTitle",
      header: "Cargo",
      cell: ({ row }) => (
        <div className="min-w-0">
          <span className="truncate">{row.original.jobTitle}</span>
        </div>
      ),
    },
    {
      id: "email",
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="min-w-0">
          <span className="truncate">{row.original.email}</span>
        </div>
      ),
    },
    {
      id: "status",
      accessorKey: "status",
      header: "Estado",
      cell: ({ row }) => (
        <div className="min-w-0">
          <span className="truncate">{row.original.status}</span>
        </div>
      ),
    },
  ]

  const refineTable = useTable<Contact>({
    columns,
    refineCoreProps: {
      resource: "contacts",
      meta: {
        gqlQuery: CONTACTS_QUERY,
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
        <Users2 className="mr-2 inline-block" size={20} />
        <h3 className="text-lg font-semibold">Contacts</h3>
      </div>
      <ShadboardTable table={refineTable} />
    </div>
  )
}
