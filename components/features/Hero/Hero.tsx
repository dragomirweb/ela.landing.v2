import React from 'react'

import { Container, FancyTitle, ElaImage, ElaButton, Heading } from '@atoms'
import styles from './Hero.module.scss'

const Hero: React.FunctionComponent = () => {
  return (
    <div className={styles.intro}>
      <Container className="flex flex-col desktop:flex-row pt-10">
        <div className="flex flex-col gap-4 w-full desktop:w-1/2">
          <FancyTitle variant="white"> ELA CLINIC</FancyTitle>
          <Heading tag="h1" className="text-center desktop:text-left">
            Vrei să slăbești 10 kg în 10 săptămâni?
          </Heading>
          <Heading
            tag="h5"
            className="text-secondary text-center desktop:text-left"
          >
            Intră în Programul Silueta de 10 !
          </Heading>
          <ElaButton
            className="self-center desktop:mt-5 desktop:self-start"
            onClick={() => {
              window.location.hash = ''
              window.location.hash = 'programare'
            }}
          >
            Programează-te!
          </ElaButton>
        </div>
        <div className="flex flex-col items-center w-full desktop:w-1/2">
          <ElaImage
            className="flex mt-auto"
            src="/assets/images/drlauraene.webp"
            alt="dr laura ene"
            layout="intrinsic"
            width={440}
            height={558}
          ></ElaImage>
        </div>
      </Container>
    </div>
  )
}

export default Hero
