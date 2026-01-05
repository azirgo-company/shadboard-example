'use client'

import { Check, Edit, X } from 'lucide-react'
import { useState } from 'react'

interface EditableFieldProps {
  initialValue: string
  onSave: (newValue: string) => void
  onCancel?: () => void
  renderValue?: (value: string) => React.ReactNode
  inputType?: 'text' | 'number'
  placeholder?: string
}

export const EditableField = ({
  initialValue,
  onSave,
  onCancel,
  renderValue,
  inputType = 'text',
  placeholder = '',
}: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [tempValue, setTempValue] = useState(initialValue)

  const handleSave = () => {
    onSave(tempValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTempValue(initialValue)
    setIsEditing(false)
    onCancel?.()
  }

  const handleEdit = () => {
    setTempValue(initialValue)
    setIsEditing(true)
  }

  return (
    <div className="flex items-center justify-between">
      {isEditing ? (
        <div className="flex flex-1 items-center space-x-2">
          <input
            type={inputType}
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="flex-1 rounded border px-2 py-1"
            placeholder={placeholder}
          />
          <button onClick={handleSave}>
            <Check size={16} />
          </button>
          <button onClick={handleCancel}>
            <X size={16} />
          </button>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-between">
          <span>
            {renderValue ? renderValue(initialValue) : initialValue || '-'}
          </span>
          <button onClick={handleEdit}>
            <Edit size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
