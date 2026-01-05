import { gql } from 'graphql-tag'

export const USERS_QUERY = gql`
  query Users(
    $paging: OffsetPaging!
    $filter: UserFilter
    $sorting: [UserSort!]
  ) {
    users(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        name
        avatarUrl
        email
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`

export const USER_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      avatarUrl
      email
    }
  }
`
