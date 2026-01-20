"use client"

import { CompanyContactsTable } from "@/modules/company/components/contacts-table"
import { QuotesTable } from "@/modules/quotes/query/components/quotes-table"
import { useShow } from "@refinedev/core"
import { gql } from "graphql-tag"
import Image from "next/image"
import { Show } from "shadboard"

const CONTACT_QUERY = gql`
  query Contact($id: ID!) {
    contact(id: $id) {
      id
      name
      avatarUrl
      jobTitle
      status
      email
      phone
      company {
        id
        name
        avatarUrl
      }
      createdAt
      updatedAt
    }
  }
`

export default function ShowContactPage() {
  const show = useShow({ meta: { gqlQuery: CONTACT_QUERY } })

  const {
    query: { isLoading, data },
  } = show

  const contact = data?.data

  return (
    <Show isLoading={isLoading}>
      <div className="my-5 max-w-4xl rounded-lg  p-6 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg ">
            {contact?.avatarUrl ? (
              <Image
                src={contact.avatarUrl}
                alt="Contact Avatar"
                width={96}
                height={96}
                className="object-cover"
              />
            ) : (
              <div className="h-16 w-16 bg-gray-200" />
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold  md:text-3xl">
              {contact?.name}
            </h1>

            <div className="mt-2 text-sm">
              {contact?.jobTitle && (
                <div className="text-sm">{contact.jobTitle}</div>
              )}
              {contact?.email && (
                <div className="text-sm">Email: {contact.email}</div>
              )}
              {contact?.phone && (
                <div className="text-sm">Phone: {contact.phone}</div>
              )}
              <div className="mt-1 text-sm">
                <span className="mr-2">Status:</span>
                <span className="font-medium">{contact?.status}</span>
              </div>
              {contact?.company && (
                <div className="mt-2 flex items-center text-sm">
                  <span className="mr-2">Company:</span>
                  {contact.company.avatarUrl && (
                    <Image
                      src={contact.company.avatarUrl}
                      alt={contact.company.name}
                      width={24}
                      height={24}
                      className="mr-2 rounded-full object-cover"
                    />
                  )}
                  <span className="font-medium">{contact.company.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {contact?.company?.id ? (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="bg-card rounded-lg border p-6">
              <CompanyContactsTable companyId={String(contact.company.id)} />
            </div>

            <div className="bg-card mt-6 rounded-lg border p-6">
              <QuotesTable companyId={String(contact.company.id)} />
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="mt-4 text-sm">
                <div>
                  <strong>Joined:</strong> {contact?.createdAt}
                </div>
                <div>
                  <strong>Last updated:</strong> {contact?.updatedAt}
                </div>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </Show>
  )
}
