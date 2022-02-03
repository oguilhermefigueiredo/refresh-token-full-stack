import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import { Navigation } from '../components/navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="h-screen">
    <Navigation />
    <Component {...pageProps} />
  </div>
}
export default MyApp
