import React from 'react'
import { Container, ElaButton, Heading } from '@/atoms'
import Link from 'next/link'

interface IElaClinicCtaProps {}

const ElaClinicCta: React.FunctionComponent<IElaClinicCtaProps> = (props) => {
  return (
    <Container className="py-10 desktop:py-20">
      <Heading
        tag="h2"
        className="mb-2 text-brand-500 text-center uppercase font-bold"
      >
        Ela Clinic
      </Heading>
      <Heading tag="h3" className="mb-5 text-center">
        Prima clinică de nutriție terapeutică
      </Heading>
      <div className="flex w-full items-center justify-center">
        <Link href="https://elaclinic.ro/programe/" passHref>
          <a
            target="_blank"
            aria-label="facebook page"
            className="flex items-center h-full"
          >
            <ElaButton className="self-center desktop:self-start">
              Vezi toate programele Ela Clinic
            </ElaButton>
          </a>
        </Link>
      </div>
    </Container>
  )
}

export default ElaClinicCta
