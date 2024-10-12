import { Analytics } from "@vercel/analytics/react"

import '@/styles/globals.css'
import './_app.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
