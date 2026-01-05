'use client'

import { AuthPage } from 'shadboard'

export default function LoginPage() {
  return (
    <div>
      <AuthPage
        type="register"
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
