import { gql } from 'graphql-tag'

export const QUOTES_QUERY = gql`
  query Quotes(
    $paging: OffsetPaging!
    $filter: QuoteFilter
    $sorting: [QuoteSort!]
  ) {
    quotes(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        title
        status
        description
        total
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`
