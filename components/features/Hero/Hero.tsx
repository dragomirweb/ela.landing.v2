import React from 'react'

import { Container, FancyTitle } from '@atoms'
import styles from './Hero.module.scss'

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className={styles.intro}>
      <Container className="flex flex-col desktop:flex-row py-10">
        <div className="flex flex-col gap-2 w-full desktop:w-1/2">
          <FancyTitle variant="white"> ELA CLINIC</FancyTitle>
          <h1 className={styles.heading}>
            Prima clinică de nutriție terapeutică
          </h1>
          <p className={styles.slogan}>
            Programe pentru sănătate și vitalitate prin alimentație
          </p>
        </div>
        <div className="flex flex-col w-full desktop:w-1/2">xxx</div>
      </Container>
    </div>
  )
}

export default Hero
