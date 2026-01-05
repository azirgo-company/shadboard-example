'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-8 flex flex-col items-center gap-4">
          <h1 className="text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl md:text-8xl dark:text-slate-50">
            Shadboard
          </h1>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
        </div>

        <p className="mb-4 max-w-2xl text-xl leading-relaxed text-slate-700 sm:text-2xl dark:text-slate-300">
          La solución moderna para gestionar tus datos con elegancia y
          eficiencia
        </p>

        <p className="mb-12 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
          Un dashboard completo construido con Next.js, Tailwind CSS y
          componentes reutilizables para acelerar tu desarrollo.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/login"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 font-medium text-slate-50 transition-all hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <span className="relative z-10">Iniciar Sesión</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-20"></div>
          </Link>

          <Link
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-slate-900 px-8 font-medium text-slate-900 transition-all hover:bg-slate-900 hover:text-slate-50 dark:border-slate-50 dark:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900"
          >
            Explorar Demo
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <div className="mb-2 text-3xl">⚡</div>
            <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-50">
              Rápido
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Optimizado para rendimiento y velocidad
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <div className="mb-2 text-3xl">🎨</div>
            <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-50">
              Elegante
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Diseño moderno y componentes personalizables
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <div className="mb-2 text-3xl">🚀</div>
            <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-50">
              Productivo
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Acelera tu desarrollo con herramientas listas
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
