import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-primary text-9xl font-bold">404</h1>
          <div className="bg-primary mx-auto mt-4 h-1 w-24 rounded-full"></div>
        </div>

        <h2 className="mb-4 text-3xl font-semibold tracking-tight">
          Página no encontrada
        </h2>

        <p className="text-muted-foreground mb-8 text-lg">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contacts">Ver contactos</Link>
          </Button>
        </div>

        <div className="text-muted-foreground mt-12 text-sm">
          <p>
            ¿Necesitas ayuda?{' '}
            <Link href="/" className="text-primary hover:underline">
              Contacta con soporte
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
