import { gql } from 'graphql-tag'

export const CONTACTS_QUERY = gql`
  query Contacts(
    $paging: OffsetPaging!
    $filter: ContactFilter
    $sorting: [ContactSort!]
  ) {
    contacts(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        name
        avatarUrl
        jobTitle
        status
        email
        company {
          id
          name
          avatarUrl
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`
