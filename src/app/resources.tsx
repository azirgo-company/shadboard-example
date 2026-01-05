import { Book, Building, Home, Users } from 'lucide-react'

import { ResourceProps } from '@refinedev/core'

export const resources: ResourceProps[] = [
  {
    name: 'dashboard',
    list: '/',
    meta: { icon: <Home /> },
  },
  {
    name: 'companies',
    list: '/companies',
    create: '/companies/create',
    show: '/companies/show/:id',
    edit: '/companies/edit/:id',
    meta: { icon: <Building /> },
  },
  {
    name: 'contacts',
    list: '/contacts',
    create: '/contacts/create',
    meta: { icon: <Users /> },
  },
  {
    name: 'posts',
    list: '/posts',
    create: '/posts/create',
  },
  {
    name: 'books',
    list: '/books',
    meta: { icon: <Book /> },
  },
  {
    name: 'authors',
    list: '/authors',
    meta: { parent: 'books' },
  },
  {
    name: 'categories',
    list: '/categories',
    meta: { parent: 'books' },
  },
  {
    name: 'publishers',
    list: '/publishers',
  },
  {
    name: 'reviews',
    list: '/reviews',
    meta: { parent: 'publishers' },
  },
  {
    name: 'profiles',
    list: '/profiles',
    meta: { parent: 'publishers' },
  },
]
