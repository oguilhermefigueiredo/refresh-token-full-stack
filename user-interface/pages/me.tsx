import { UserDocument } from '@shared'
import { Router } from 'express'
import { useEffect } from 'react'
import { useUser } from '../contexts/user-context'
import { environment } from '../lib/environment'

export default function Me() {
  const {user, setUser} = useUser()

  const getMe = async () => {
    const [error, user] = await fetcher<UserDocument>(`${environment.apiUrl}/me`)
    if (!error && user) setUser(user)
    else Router.push('/')
  }

  useEffect(() => {
    if (!user) getMe()
  })

  return (
    <main className="flex items-center justify-center h-full">
      <div className="space-y-4 text-center">
        <h1 className="px-4 py-2 text-lg font-medium bg-gray-200 rounded">
          Client side authentication
        </h1>
        {user ? <p>Hello,{user.name} 👋</p> : <p>Preparing...</p>}
      </div>
    </main>
  )
}