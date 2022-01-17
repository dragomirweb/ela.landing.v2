import * as React from 'react'

import { Container, FancyTitle, Heading } from '@atoms'
import styles from './RegainYourHealth.module.scss'

interface IRegainYourHealthProps {}

const RegainYourHealth: React.FunctionComponent<IRegainYourHealthProps> = (
  props
) => {
  return (
    <Container className="py-10">
      <div className="flex flex-col gap-2">
        <FancyTitle variant="gray">RECAPATATI SANATATEA</FancyTitle>
        <Heading tag="h1">Heading 1</Heading>
        <Heading tag="h2">Heading 2</Heading>
        <Heading tag="h3">Heading 3</Heading>
        <Heading tag="h4">Heading 4</Heading>
        <Heading tag="h5">Heading 5</Heading>
        <Heading tag="h6">Heading 6</Heading>
        <h2 className="text-3xl desktop:text-4xl leading-tight font-semibold pb-5">
          Cum să-ți recapeți sănătatea fără pastile în plus chiar dacă pare
          imposibil
        </h2>
        <h3 className="">
          Urmează dietele validate științific de protocoalele medicale
          internaționale.
        </h3>
        <p className="text-secondary text-base">
          Medicul ți-a spus că degeaba iei pastile dacă nu ții dietă?
        </p>
        <p className="text-secondary text-lg desktop:text-xl">
          Pe Internet circulă zeci de remedii, suplimente și diete și nu știi ce
          să alegi.
        </p>
        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-2 my-7">
          <div className={styles['yt-box']}>
            <iframe
              className={styles['responsive-iframe']}
              title="Dieta pacienților cu afecțiuni caradiovasculare"
              src="https://www.youtube.com/embed/YqKuASBV3-Q"
            ></iframe>
          </div>
          <div className={styles['yt-box']}>
            <iframe
              className={styles['responsive-iframe']}
              title="Dieta este primul pas în prevenția cardiovasculară"
              src="https://www.youtube.com/embed/PYXq9U57ILc"
            ></iframe>
          </div>
        </div>

        <p className="text-secondary text-lg desktop:text-xl">
          Pe Internet circulă zeci de remedii, suplimente și diete și nu știi ce
          să alegi.
        </p>
      </div>
    </Container>
  )
}

export default RegainYourHealth
