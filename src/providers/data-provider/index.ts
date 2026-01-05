import dataProviderNestjsQuery, { GraphQLClient } from '@refinedev/nestjs-query'

import Cookies from 'js-cookie'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.crm.refine.dev/graphql'

export const gqlClient = new GraphQLClient(API_URL, {
  fetch: async (url: string, options: RequestInit): Promise<Response> => {
    const auth = Cookies.get('_session')

    const headers = {
      ...options.headers,
      ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
    }

    return await fetch(url, {
      ...options,
      headers,
    })
  },
})

export const dataProvider = dataProviderNestjsQuery(gqlClient)
