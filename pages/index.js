import Head from 'next/head'
import AboutImeama from '../components/AboutImeama'
import AboutUs from '../components/AboutUs'
import Executives from '../components/Executives'
import HeroPage from '../components/HeroPage'

export default function Home() {
  return (
    <div className="min-h-screen font-poiret scroll-smooth">
      <Head>
        <title>IMUYA | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Puppies+Play&family=Rye&display=swap" rel="stylesheet"></link>
      </Head>

      <HeroPage />
      <AboutUs />
      <AboutImeama />
      <Executives />
    </div>
  )
}
