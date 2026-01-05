'use client'

import { List } from 'shadboard'
import { useTable } from '@refinedev/core'

export default function ListPostsPage() {
  const { tableQuery } = useTable({
    resource: 'companies',
    syncWithLocation: false,
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  console.log('tableQuery data:', tableQuery?.data)
  console.log('tableQuery isLoading:', tableQuery?.isLoading)
  console.log('tableQuery error:', tableQuery?.error)

  return (
    <List>
      {tableQuery?.isLoading && <div>Loading...</div>}
      {tableQuery?.error && <div>Error: {tableQuery.error.message}</div>}
      {tableQuery?.data && (
        <pre>{JSON.stringify(tableQuery.data, null, 2)}</pre>
      )}
    </List>
  )
}
