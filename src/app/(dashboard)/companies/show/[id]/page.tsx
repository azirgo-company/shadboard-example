'use client'

import { CompanyInformation } from '@/modules/company/components/company-information'
import { CompanyContactsTable } from '@/modules/company/components/contacts-table'
import { COMPANY_QUERY } from '@/modules/company/query'
import { QuotesTable } from '@/modules/quotes/query/components/quotes-table'
import { useShow } from '@refinedev/core'
import Image from 'next/image'
import { Show } from 'shadboard'

export default function ShowCompanyPage() {
  const show = useShow({ meta: { gqlQuery: COMPANY_QUERY } })

  const {
    query: { isLoading, data },
  } = show

  const company = data?.data

  return (
    <Show isLoading={isLoading}>
      <div className="my-5 max-w-4xl rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg bg-black">
            {company?.avatarUrl ? (
              <Image
                src={company.avatarUrl}
                alt="Company Avatar"
                width={96}
                height={96}
                className="object-cover"
              />
            ) : (
              <div className="h-16 w-16 bg-gray-200" />
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {company?.name}
            </h1>

            <div className="mt-2 flex items-center text-sm text-gray-600">
              <span className="mr-3">Sales Owner:</span>
              {company?.salesOwner?.avatarUrl && (
                <Image
                  src={company.salesOwner.avatarUrl}
                  alt={company.salesOwner.name}
                  width={28}
                  height={28}
                  className="mr-2 rounded-full object-cover"
                />
              )}
              <span className="font-medium text-gray-800">
                {company?.salesOwner?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      {company?.id ? (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="bg-card rounded-lg border p-6">
              <CompanyContactsTable companyId={String(company.id)} />
            </div>

            <div className="bg-card mt-6 rounded-lg border p-6">
              <QuotesTable companyId={String(company.id)} />
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="bg-card rounded-lg border p-6">
              <CompanyInformation company={company} />
            </div>
          </aside>
        </div>
      ) : null}
    </Show>
  )
}
