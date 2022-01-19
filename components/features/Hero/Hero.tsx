import React from 'react'

import { Container, FancyTitle, ElaImage, ElaButton, Heading } from '@atoms'
import styles from './Hero.module.scss'

const Hero: React.FunctionComponent = () => {
  const programare = () => {
    window.location.hash = ''
    window.location.hash = 'programare'
  }

  return (
    <div className={styles.intro}>
      <Container className="flex flex-col desktop:flex-row pt-10">
        <div className="flex flex-col gap-4 w-full desktop:w-1/2">
          <FancyTitle variant="white"> ELA CLINIC</FancyTitle>
          <Heading tag="h1" className="text-center desktop:text-left">
            Prima clinică de nutriție terapeutică
          </Heading>
          <Heading
            tag="h5"
            className="text-secondary text-center desktop:text-left"
          >
            Programe pentru sănătate și vitalitate prin alimentație
          </Heading>
          <ElaButton
            className="self-center desktop:mt-5 desktop:self-start"
            onClick={programare}
          >
            Programează-te și tu
          </ElaButton>
        </div>
        <div className="flex flex-col items-center w-full desktop:w-1/2">
          <ElaImage
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
