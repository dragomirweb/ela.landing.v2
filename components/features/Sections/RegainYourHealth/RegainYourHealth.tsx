import React from 'react'

import {
  Container,
  ElaButton,
  ElaImage,
  FancyTitle,
  Heading,
  Paragraph,
} from '@atoms'

const RegainYourHealth: React.FunctionComponent = () => {
  return (
    <Container
      id="recapata-sanatatea"
      className="py-10 desktop:py-20 scroll-mt-24"
    >
      <div className="flex flex-col gap-2">
        <FancyTitle variant="gray">RECAPATATI SANATATEA</FancyTitle>
        <Heading tag="h3" className="mb-10 text-center">
          50% din populație va fi obeză sau supraponderală până în 2030
        </Heading>

        <div className="grid gap-5 tablet:grid-cols-2  desktop:grid-cols-3">
          <div className="flex flex-col items-center ">
            <ElaImage
              className="flex "
              src="/assets/images/obez.webp"
              alt="obezitate"
              layout="intrinsic"
              width={150}
              height={150}
            ></ElaImage>
            <Heading tag="h5" className="grow py-4 text-center">
              Trăim într-un mediu obezogen, care ne influențează alegerile.
            </Heading>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ElaImage
              className="flex "
              src="/assets/images/smartphone.webp"
              alt="obezitate"
              layout="intrinsic"
              width={150}
              height={150}
            ></ElaImage>
            <Heading tag="h5" className="grow py-4 text-center">
              Suntem înconjurați de mâncare și aceasta este din ce în ce mai
              accesibilă.
            </Heading>
          </div>
          <div className="flex flex-col items-center justify-center tablet:col-span-2 desktop:col-span-1">
            <ElaImage
              className="flex "
              src="/assets/images/fastfood.webp"
              alt="obezitate"
              layout="intrinsic"
              width={150}
              height={150}
            ></ElaImage>
            <Heading tag="h5" className="grow py-4 text-center">
              Consumăm tot mai multă mâncare procesată.
            </Heading>
          </div>
        </div>
        <div className="flex items-center justify-center py-10">
          <ElaButton
            className="text-2xl"
            onClick={() => {
              window.location.hash = ''
              window.location.hash = 'programare'
            }}
          >
            Intră în programul SILUETA DE 10!
          </ElaButton>
        </div>
      </div>
    </Container>
  )
}

export default RegainYourHealth
