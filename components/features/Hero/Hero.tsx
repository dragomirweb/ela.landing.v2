import React from 'react'

import { Container, FancyTitle, ElaImage, ElaButton } from '@atoms'
import styles from './Hero.module.scss'

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  const programare = () => {
    window.location.hash = ''
    window.location.hash = 'programare'
  }

  return (
    <div className={styles.intro}>
      <Container className="flex flex-col desktop:flex-row pt-10">
        <div className="flex flex-col gap-4 w-full desktop:w-1/2">
          <FancyTitle variant="white"> ELA CLINIC</FancyTitle>
          <h1 className={styles.heading}>
            Prima clinică de nutriție terapeutică
          </h1>
          <p className={styles.slogan}>
            Programe pentru sănătate și vitalitate prin alimentație
          </p>
          <ElaButton
            className="self-center desktop:self-start"
            onClick={programare}
          >
            Programează-te și tu
          </ElaButton>
        </div>
        <div className="flex flex-col  w-full desktop:w-1/2">
          <ElaImage
            className="mt-auto mx-auto"
            src="/assets/images/drlauraene.webp"
            alt="dr laura ene"
            layout="fixed"
            width={440}
            height={558}
          ></ElaImage>
        </div>
      </Container>
    </div>
  )
}

export default Hero
