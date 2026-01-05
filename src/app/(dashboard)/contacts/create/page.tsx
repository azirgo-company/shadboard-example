'use client'

import { Breadcrumb, Create } from 'shadboard'

export default function CreatePostPage() {
  return <Create breadcrumb={<Breadcrumb showHome={true} />} />
}
