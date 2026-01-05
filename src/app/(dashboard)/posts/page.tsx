"use client"

import { useTable } from "@refinedev/core"
import { List } from "shadboard"

export default function ListPostsPage() {
  const { tableQuery } = useTable({
    resource: "companies",
    syncWithLocation: false,
    pagination: {
      currentPage: 1,
      pageSize: 10,
    },
  })

  console.log("tableQuery data:", tableQuery?.data)
  console.log("tableQuery isLoading:", tableQuery?.isLoading)
  console.log("tableQuery error:", tableQuery?.error)

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
