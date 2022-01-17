import * as React from 'react'

import { Container, FancyTitle, Heading, Paragraph } from '@atoms'
import styles from './RegainYourHealth.module.scss'

interface IRegainYourHealthProps {}

const RegainYourHealth: React.FunctionComponent<IRegainYourHealthProps> = (
  props
) => {
  return (
    <Container className="py-10">
      <div className="flex flex-col gap-2">
        <FancyTitle variant="gray">RECAPATATI SANATATEA</FancyTitle>
        <Heading tag="h3" className="mb-4">
          Cum să-ți recapeți sănătatea fără pastile în plus chiar dacă pare
          imposibil
        </Heading>
        <Heading tag="h5">
          Urmează dietele validate științific de protocoalele medicale
          internaționale.
        </Heading>
        <Paragraph>
          Medicul ți-a spus că degeaba iei pastile dacă nu ții dietă?
        </Paragraph>
        <Paragraph>
          Pe Internet circulă zeci de remedii, suplimente și diete și nu știi ce
          să alegi.
        </Paragraph>
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
        <Paragraph>
          Nu ești singurul. În România, mii de oameni suferă de boli provocate
          de alimentație: diabet, tensiune, boli de inimă, ficat gras, sindrom
          de intestin iritabil, cancer. Studiile medicale internaționale au
          arătat că aceste boli pot fi tratate cu ajutorul unor diete speciale,
          numite diete terapeutice.
        </Paragraph>
        <Paragraph>
          Dacă și tu te confrunți cu astfel de boli, noi avem soluția pentru
          tine.
        </Paragraph>
        <Paragraph>
          <strong>Programele Suport ELA CLINIC</strong> sunt concepute astfel
          încât să te ajute să te simți mai bine și să scapi de o parte din
          medicamente pentru tot restul vieții.
        </Paragraph>
        <Paragraph>
          Imaginează-ți cum ar fi să iei mai puține medicamente dar cu toate
          acestea analizele tale să se regleze iar tu să te simți din ce în ce
          mai bine.
        </Paragraph>
        <Paragraph>
          Timp de 15 ani, Dr. Laura Ene a tratat cu succes peste 15.000 de
          pacienți cu probleme de sănătate legate de alimentație. Acum a
          perfecționat acest sistem și l-a transformat într-o clinică de
          nutriție terapeutică, unde beneficiezi de{' '}
          <strong>Programe SUPORT</strong> pentru fiecare afecțiune în parte.
        </Paragraph>
      </div>
    </Container>
  )
}

export default RegainYourHealth
