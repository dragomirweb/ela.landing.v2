import * as React from 'react'

import { Container, FancyTitle } from '@atoms'
import styles from './RegainYourHealth.module.scss'

interface IRegainYourHealthProps {}

const RegainYourHealth: React.FunctionComponent<IRegainYourHealthProps> = (
  props
) => {
  return (
    <Container className="py-10">
      <div className="flex flex-col gap-2">
        <FancyTitle variant="gray">RECAPATATI SANATATEA</FancyTitle>
        <h2 className="text-3xl font-medium pb-5">
          Cum să-ți recapeți sănătatea fără pastile în plus chiar dacă pare
          imposibil
        </h2>
        <h3 className="text-2xl">
          Urmează dietele validate științific de protocoalele medicale
          internaționale.
        </h3>
        <p className="text-secondary text-xl">
          Medicul ți-a spus că degeaba iei pastile dacă nu ții dietă?
        </p>
        <p className="text-secondary text-xl">
          Pe Internet circulă zeci de remedii, suplimente și diete și nu știi ce
          să alegi.
        </p>
        <div className="grid grid-cols-2 gap-2">
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

        <p className="text-secondary text-xl">
          Pe Internet circulă zeci de remedii, suplimente și diete și nu știi ce
          să alegi.
        </p>
      </div>
    </Container>
  )
}

export default RegainYourHealth
