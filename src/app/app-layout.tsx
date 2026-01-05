'use client'

import { adapter, model } from '@/app/access-control'
import { BaseLayout, useNotificationProvider } from 'shadboard'

import { resources } from '@/app/resources'
import { authProviderClient } from '@/providers/auth-provider/auth-provider.client'
import { dataProvider } from '@/providers/data-provider'
import { Refine } from '@refinedev/core'
import routerProvider from '@refinedev/nextjs-router'
import { newEnforcer } from 'casbin'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const role = 'editor'

  return (
    <BaseLayout>
      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider}
        authProvider={authProviderClient}
        notificationProvider={useNotificationProvider}
        accessControlProvider={{
          can: async ({ action, params, resource }) => {
            const enforcer = await newEnforcer(model, adapter)
            if (action === 'delete' || action === 'edit' || action === 'show') {
              return Promise.resolve({
                can: await enforcer.enforce(
                  role,
                  `${resource}/${params?.id}`,
                  action
                ),
              })
            }
            if (action === 'field') {
              return Promise.resolve({
                can: await enforcer.enforce(
                  role,
                  `${resource}/${params?.field}`,
                  action
                ),
              })
            }
            return {
              can: await enforcer.enforce(role, resource, action),
            }
          },
        }}
        resources={resources}
      >
        {children}
      </Refine>
    </BaseLayout>
  )
}

export default AppLayout
