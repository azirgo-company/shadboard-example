'use client'

import { LOGIN, REGISTER } from '@/modules/auth/query'
import type {
  LoginMutation,
  LoginMutationVariables,
  RegisterMutation,
  RegisterMutationVariables,
} from '@/graphql/types'

import type { AuthProvider } from '@refinedev/core'
import Cookies from 'js-cookie'
import { gqlClient } from '@/providers/data-provider'

const getTokenExpiration = (token: string): Date | undefined => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    console.log('Decoded token payload:', payload)
    if (payload.exp) {
      return new Date(payload.exp * 1000)
    }
  } catch (error) {
    console.error('Error decoding token:', error)
  }
  return undefined
}

export const authProviderClient: AuthProvider = {
  login: async ({ email }) => {
    try {
      const { login } = await gqlClient.request<
        LoginMutation,
        LoginMutationVariables
      >(LOGIN, {
        loginInput: {
          email,
        },
      })

      if (login.accessToken) {
        // Get expiration from access token
        const accessTokenExpiration = getTokenExpiration(login.accessToken)
        const refreshTokenExpiration = getTokenExpiration(login.refreshToken)
        console.log('Access Token Expiration:', accessTokenExpiration)
        console.log('Refresh Token Expiration:', refreshTokenExpiration)

        Cookies.set('_session', login.accessToken, {
          expires: accessTokenExpiration,
          path: '/',
        })
        Cookies.set('_refresh', login.refreshToken, {
          expires: refreshTokenExpiration,
          path: '/',
        })

        Cookies.set('auth', JSON.stringify(login.user), {
          expires: accessTokenExpiration,
          path: '/',
        })

        return {
          success: true,
          redirectTo: '/companies',
        }
      }

      return {
        success: false,
        error: {
          name: 'LoginError',
          message: 'Invalid credentials',
        },
      }
    } catch (error: any) {
      console.error('Login error:', error)

      let message = 'Invalid username or password'

      // GraphQL Client errors have response.errors array
      if (error?.response?.errors?.[0]?.message) {
        message = error.response.errors[0].message
      }
      // Fallback to error.message if it's a standard Error
      else if (error?.message && typeof error.message === 'string') {
        // Only use error.message if it's a simple string, not a serialized object
        try {
          JSON.parse(error.message)
          // If it parses as JSON, it's likely a serialized error, use default
        } catch {
          // Not JSON, use the message
          message = error.message
        }
      }

      return {
        success: false,
        error: {
          name: 'LoginError',
          message,
        },
      }
    }
  },
  register: async (params) => {
    try {
      const { register } = await gqlClient.request<
        RegisterMutation,
        RegisterMutationVariables
      >(REGISTER, {
        registerInput: {
          email: params.email,
          password: params.password,
        },
      })

      if (register) {
        // After successful register, perform login to obtain tokens
        const { login } = await gqlClient.request<
          LoginMutation,
          LoginMutationVariables
        >(LOGIN, {
          loginInput: {
            email: params.email,
          },
        })

        if (login?.accessToken) {
          const accessTokenExpiration = getTokenExpiration(login.accessToken)
          const refreshTokenExpiration = getTokenExpiration(login.refreshToken)

          Cookies.set('_session', login.accessToken, {
            expires: accessTokenExpiration,
            path: '/',
          })
          Cookies.set('_refresh', login.refreshToken, {
            expires: refreshTokenExpiration,
            path: '/',
          })

          Cookies.set('auth', JSON.stringify(login.user), {
            expires: accessTokenExpiration,
            path: '/',
          })

          return {
            success: true,
            redirectTo: '/login ',
          }
        }
      }

      // If registration/login didn't return tokens, return an error
      return {
        success: false,
        error: {
          message: 'Register failed: no tokens returned from server',
          name: 'RegisterError',
        },
      }
    } catch (error: any) {
      console.error('Register error:', error)
      let message = 'Register failed'
      if (error?.response?.errors?.[0]?.message) {
        message = error.response.errors[0].message
      } else if (error?.message && typeof error.message === 'string') {
        try {
          JSON.parse(error.message)
        } catch {
          message = error.message
        }
      }

      return {
        success: false,
        error: {
          message,
          name: 'RegisterError',
        },
      }
    }
  },
  forgotPassword: async (params) => {
    // Not implemented: call backend endpoint to send reset email
    return {
      success: false,
      error: {
        message: 'Forgot password not implemented',
        name: 'NotImplemented',
      },
    }
  },
  updatePassword: async (params) => {
    // Suppose we actually send a request to the back end here.
    const isPasswordInvalid = params.password === '123456' || !params.password

    if (isPasswordInvalid) {
      return {
        success: false,
        error: {
          message: 'Update password failed',
          name: 'Invalid password',
        },
      }
    }

    return {
      success: true,
    }
  },
  logout: async () => {
    Cookies.remove('_session', { path: '/' })
    Cookies.remove('auth', { path: '/' })
    return {
      success: true,
      redirectTo: '/login',
    }
  },
  check: async () => {
    const token = Cookies.get('_session')
    if (token) {
      return {
        authenticated: true,
      }
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: '/login',
    }
  },
  getPermissions: async () => {
    const auth = Cookies.get('auth')
    if (auth) {
      const parsedUser = JSON.parse(auth)
      return parsedUser.roles
    }
    return null
  },
  getIdentity: async () => {
    const auth = Cookies.get('auth')
    if (auth) {
      const parsedUser = JSON.parse(auth)
      return parsedUser
    }
    return null
  },
  onError: async (error) => {
    if (error.response?.status === 401) {
      return {
        logout: true,
      }
    }

    return { error }
  },
}
