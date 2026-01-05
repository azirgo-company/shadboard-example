import type * as Types from './schema.types';

export type LoginMutationVariables = Types.Exact<{
  loginInput: Types.LoginInput;
}>;


export type LoginMutation = { login: (
    Pick<Types.AuthResponse, 'accessToken' | 'refreshToken'>
    & { user: Pick<Types.User, 'id' | 'email'> }
  ) };

export type RegisterMutationVariables = Types.Exact<{
  registerInput: Types.RegisterInput;
}>;


export type RegisterMutation = { register: Pick<Types.User, 'id' | 'email'> };

export type CompaniesQueryVariables = Types.Exact<{
  paging: Types.OffsetPaging;
  filter?: Types.InputMaybe<Types.CompanyFilter>;
  sorting?: Types.InputMaybe<Array<Types.CompanySort> | Types.CompanySort>;
}>;


export type CompaniesQuery = { companies: (
    Pick<Types.CompanyConnection, 'totalCount'>
    & {
      nodes: Array<(
        Pick<Types.Company, 'id' | 'name' | 'avatarUrl'>
        & {
          salesOwner: Pick<Types.User, 'id' | 'name' | 'avatarUrl'>,
          dealsAggregate: Array<{ sum?: Types.Maybe<Pick<Types.CompanyDealsSumAggregate, 'value'>> }>,
        }
      )>,
      pageInfo: Pick<Types.OffsetPageInfo, 'hasNextPage' | 'hasPreviousPage'>,
    }
  ) };

export type CompanyQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type CompanyQuery = { company: (
    Pick<
      Types.Company,
      | 'id'
      | 'name'
      | 'avatarUrl'
      | 'totalRevenue'
      | 'companySize'
      | 'industry'
      | 'businessType'
      | 'country'
      | 'website'
      | 'createdAt'
      | 'updatedAt'
    >
    & {
      dealsAggregate: Array<{ sum?: Types.Maybe<Pick<Types.CompanyDealsSumAggregate, 'value'>> }>,
      salesOwner: Pick<Types.User, 'id' | 'name' | 'avatarUrl'>,
    }
  ) };

export type CreateOneCompanyMutationVariables = Types.Exact<{
  input: Types.CreateOneCompanyInput;
}>;


export type CreateOneCompanyMutation = { createOneCompany: Pick<
      Types.Company,
      | 'id'
      | 'name'
      | 'avatarUrl'
      | 'totalRevenue'
      | 'companySize'
      | 'industry'
      | 'businessType'
      | 'country'
      | 'website'
      | 'createdAt'
      | 'updatedAt'
    > };

export type UpdateOneCompanyMutationVariables = Types.Exact<{
  input: Types.UpdateOneCompanyInput;
}>;


export type UpdateOneCompanyMutation = { updateOneCompany: Pick<
      Types.Company,
      | 'id'
      | 'name'
      | 'companySize'
      | 'totalRevenue'
      | 'businessType'
      | 'country'
      | 'website'
    > };

export type ContactsQueryVariables = Types.Exact<{
  paging: Types.OffsetPaging;
  filter?: Types.InputMaybe<Types.ContactFilter>;
  sorting?: Types.InputMaybe<Array<Types.ContactSort> | Types.ContactSort>;
}>;


export type ContactsQuery = { contacts: (
    Pick<Types.ContactConnection, 'totalCount'>
    & {
      nodes: Array<(
        Pick<
          Types.Contact,
          | 'id'
          | 'name'
          | 'avatarUrl'
          | 'jobTitle'
          | 'status'
          | 'email'
        >
        & { company: Pick<Types.Company, 'id' | 'name' | 'avatarUrl'> }
      )>,
      pageInfo: Pick<Types.OffsetPageInfo, 'hasNextPage' | 'hasPreviousPage'>,
    }
  ) };

export type QuotesQueryVariables = Types.Exact<{
  paging: Types.OffsetPaging;
  filter?: Types.InputMaybe<Types.QuoteFilter>;
  sorting?: Types.InputMaybe<Array<Types.QuoteSort> | Types.QuoteSort>;
}>;


export type QuotesQuery = { quotes: (
    Pick<Types.QuoteConnection, 'totalCount'>
    & {
      nodes: Array<Pick<
          Types.Quote,
          | 'title'
          | 'status'
          | 'description'
          | 'total'
        >>,
      pageInfo: Pick<Types.OffsetPageInfo, 'hasNextPage' | 'hasPreviousPage'>,
    }
  ) };

export type UsersQueryVariables = Types.Exact<{
  paging: Types.OffsetPaging;
  filter?: Types.InputMaybe<Types.UserFilter>;
  sorting?: Types.InputMaybe<Array<Types.UserSort> | Types.UserSort>;
}>;


export type UsersQuery = { users: (
    Pick<Types.UserConnection, 'totalCount'>
    & {
      nodes: Array<Pick<
          Types.User,
          | 'id'
          | 'name'
          | 'avatarUrl'
          | 'email'
        >>,
      pageInfo: Pick<Types.OffsetPageInfo, 'hasNextPage' | 'hasPreviousPage'>,
    }
  ) };

export type UserQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type UserQuery = { user: Pick<
      Types.User,
      | 'id'
      | 'name'
      | 'avatarUrl'
      | 'email'
    > };
