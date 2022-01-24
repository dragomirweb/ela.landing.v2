import type { NextPage } from 'next'
import Head from 'next/head'

import { Navigation, Hero, Appointment, Footer, ElaClinicCta } from '@features'
import { RegainYourHealth, Benefits, Steps } from '@/features/Sections'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Silueta Perfecta - Ela Clinic</title>
        <meta
          name="description"
          content="Vrei sa slabesti 10 kg in 10 saptamani?"
        />
      </Head>
      <Navigation />
      <Hero />
      <main>
        <RegainYourHealth />
        <Benefits />
        <Steps />
        <Appointment />
        <ElaClinicCta />
      </main>
      <Footer />
    </>
  )
}

export default Home
