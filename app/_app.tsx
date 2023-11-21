import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { pageview } from '@/components/lib/gtag'
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps ) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
