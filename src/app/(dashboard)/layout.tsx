'use client'

import { CanAccess } from '@refinedev/core'
import { ThemedLayout } from 'shadboard'
import { usePathname } from 'next/navigation'

// Mapeo automático de rutas a recursos y acciones
const getResourceFromPath = (pathname: string) => {
  // Remover el slash inicial
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname
  const segments = cleanPath.split('/').filter(Boolean)

  // Si no hay segmentos o es la raíz, no hay recurso
  if (segments.length === 0 || pathname === '/') {
    return null
  }

  // El primer segmento es el nombre del recurso
  const resource = segments[0]

  // Si solo hay un segmento, es una acción "list"
  if (segments.length === 1) {
    return { resource, action: 'list' }
  }

  // Si hay dos segmentos
  if (segments.length === 2) {
    const secondSegment = segments[1]

    // Si es "create", es una acción de creación
    if (secondSegment === 'create') {
      return { resource, action: 'create' }
    }

    // Si no es "create", asumimos que es un ID para "show"
    return {
      resource,
      action: 'show',
      params: { id: secondSegment },
    }
  }

  // Si hay tres segmentos: /resource/action/id
  if (segments.length === 3) {
    const action = segments[1] // edit, show, delete, etc.
    const id = segments[2]

    return {
      resource,
      action,
      params: { id },
    }
  }

  // Para rutas más complejas, retornar null
  return null
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const accessControl = getResourceFromPath(pathname)
  console.log('Access Control:', accessControl)

  return (
    <ThemedLayout>
      {accessControl ? (
        <CanAccess
          resource={accessControl.resource}
          action={accessControl.action}
          params={accessControl.params}
          fallback={
            <div className="p-8">
              <h1 className="mb-4 text-2xl font-bold">Acceso Denegado</h1>
              <p>No tienes permisos para acceder a esta página.</p>
            </div>
          }
        >
          {children}
        </CanAccess>
      ) : (
        children
      )}
    </ThemedLayout>
  )
}
