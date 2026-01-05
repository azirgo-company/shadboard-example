'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useList, useSelect } from '@refinedev/core'

import { CREATE_COMPANY_MUTATION } from '@/modules/company/query'
import { Create } from 'shadboard'
import { Input } from '@/components/ui/input'
import { USERS_QUERY } from '@/modules/user/query'
import { useForm } from '@refinedev/react-hook-form'

export default function CreateCompanyPage() {
  const form = useForm({
    defaultValues: {
      name: 'Company 1',
      salesOwnerId: '1',
    },
    refineCoreProps: {
      meta: {
        gqlMutation: CREATE_COMPANY_MUTATION,
      },
    },
  })

  const {
    refineCore: { formLoading },
    saveButtonProps,
  } = form

  const select = useSelect({
    resource: 'users',
    optionLabel: 'name',
    optionValue: 'id',
    // meta: {
    //   gqlQuery: USERS_QUERY,
    // },
  })

  const list = useList({
    resource: 'users',
    // meta: {
    //   gqlQuery: USERS_QUERY,
    // },
  })

  console.log('Select options:', select)
  console.log('List data:', list)

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Form {...form}>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salesOwnerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Propietaria de ventas</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Form>
    </Create>
  )
}
