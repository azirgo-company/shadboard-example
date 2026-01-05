'use client'

import { AuthPage } from 'shadboard'

export default function LoginPage() {
  return (
    <div>
      <AuthPage
        formProps={{
          defaultValues: {
            email: 'dwight.schrute@dundermifflin.com',
            password: 'loco1234',
          },
        }}
      />
    </div>
  )
}
