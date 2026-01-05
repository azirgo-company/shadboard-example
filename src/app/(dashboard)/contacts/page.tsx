'use client'

import { AvatarField, List, ShadboardTable } from 'shadboard'

import { CONTACTS_QUERY } from '@/modules/contact/query'
import { ColumnDef } from '@tanstack/react-table'
import { Company } from '@/graphql/schema.types'
import { useMemo } from 'react'
import { useTable } from '@refinedev/react-table'

export default function ListCompaniesPage() {
  const columns = useMemo<ColumnDef<Company>[]>(
    () => [
      {
        id: 'name',
        header: 'Name',
        cell: ({ row }) => {
          const name = row.original.name
          const avatarUrl = row.original.avatarUrl
          return <AvatarField text={name} src={avatarUrl ?? ''} />
        },
      },
      {
        id: 'email',
        header: 'Email',
        accessorKey: 'email',
      },
      {
        id: 'company',
        header: 'Company',
        accessorKey: 'company.name',
      },
      {
        id: 'jobTitle',
        header: 'Title',
        accessorKey: 'jobTitle',
      },
      {
        id: 'status',
        header: 'Status',
        accessorKey: 'status',
      },
    ],
    []
  )

  const table = useTable({
    columns,
    refineCoreProps: {
      meta: {
        gqlQuery: CONTACTS_QUERY,
      },
      sorters: { initial: [{ field: 'createdAt', order: 'desc' }] },
    },
  })

  return (
    <List>
      <ShadboardTable table={table} />
    </List>
  )
}
