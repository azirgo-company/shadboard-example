"use client"

import { EditableField } from "@/components/ui/editable-field"
import { Company } from "@/graphql/schema.types"
import type { BaseRecord } from "@refinedev/core"
import { useUpdate } from "@refinedev/core"
import { Store } from "lucide-react"

interface CompanyInformationProps {
  company?: Partial<Company> | BaseRecord | null
}

export const CompanyInformation = ({ company }: CompanyInformationProps) => {
  const { mutate } = useUpdate()

  const handleUpdate = async (field: string, value: string) => {
    try {
      const parsedValue =
        field === "totalRevenue"
          ? parseInt(value)
          : value
      await mutate({
        resource: "companies",
        id: company?.id,
        values: { [field]: parsedValue },
      })
    } catch (error) {
      console.error("Error updating company:", error)
    }
  }

  return (
    <div>
      <div className="mb-4 flex flex-row items-center border-b border-gray-200 pb-3">
        <Store className="mr-2 inline-block" size={20} />
        <h3 className="text-lg font-semibold">Company Information</h3>
      </div>
      <table className="w-full text-sm">
        <tbody>
          <tr>
            <td className="py-2 text-xs text-gray-500">Company size</td>
            <td className="py-2 font-medium">
              <EditableField
                initialValue={company?.companySize || ""}
                onSave={(value) => handleUpdate("companySize", value)}
              />
            </td>
          </tr>

          <tr>
            <td className="py-2 text-xs text-gray-500">Total revenue</td>
            <td className="py-2 font-medium">
              <EditableField
                initialValue={company?.totalRevenue?.toString() || ""}
                onSave={(value) => handleUpdate("totalRevenue", value)}
                inputType="number"
              />
            </td>
          </tr>

          <tr>
            <td className="py-2 text-xs text-gray-500">Business Type</td>
            <td className="py-2 font-medium">
              <EditableField
                initialValue={company?.businessType || ""}
                onSave={(value) => handleUpdate("businessType", value)}
              />
            </td>
          </tr>

          <tr>
            <td className="py-2 text-xs text-gray-500">Country</td>
            <td className="py-2 font-medium">
              <EditableField
                initialValue={company?.country || ""}
                onSave={(value) => handleUpdate("country", value)}
              />
            </td>
          </tr>

          <tr>
            <td className="py-2 text-xs text-gray-500">Website</td>
            <td className="py-2 font-medium text-blue-600">
              <EditableField
                initialValue={company?.website || ""}
                onSave={(value) => handleUpdate("website", value)}
                renderValue={(value) =>
                  value ? (
                    <a href={value} target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    "-"
                  )
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
