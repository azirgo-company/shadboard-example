import { gql } from 'graphql-tag'

export const COMPANIES_QUERY = gql`
  query Companies(
    $paging: OffsetPaging!
    $filter: CompanyFilter
    $sorting: [CompanySort!]
  ) {
    companies(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        name
        avatarUrl
        salesOwner {
          id
          name
          avatarUrl
        }
        dealsAggregate {
          sum {
            value
          }
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

export const COMPANY_QUERY = gql`
  query Company($id: ID!) {
    company(id: $id) {
      id
      name
      avatarUrl
      totalRevenue
      companySize
      industry
      businessType
      country
      website
      createdAt
      updatedAt
      dealsAggregate {
        sum {
          value
        }
      }
      salesOwner {
        id
        name
        avatarUrl
      }
    }
  }
`

export const CREATE_COMPANY_MUTATION = gql`
  mutation CreateOneCompany($input: CreateOneCompanyInput!) {
    createOneCompany(input: $input) {
      id
      name
      avatarUrl
      totalRevenue
      companySize
      industry
      businessType
      country
      website
      createdAt
      updatedAt
    }
  }
`
export const UPDATE_ONE_COMPANY_MUTATION = gql`
  mutation UpdateOneCompany($input: UpdateOneCompanyInput!) {
    updateOneCompany(input: $input) {
      id
      name
      companySize
      totalRevenue
      businessType
      country
      website
    }
  }
`
