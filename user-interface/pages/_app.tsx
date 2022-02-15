import 'tailwindcss/tailwind.css'

import { Navigation } from '../components/navigation'
import { UserProvider } from '../contexts/user-context'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div className="h-screen">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </UserProvider>
  )
}
export default MyApp
