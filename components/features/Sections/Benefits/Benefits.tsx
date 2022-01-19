import * as React from 'react'

import { Container, FancyTitle, Heading, Paragraph } from '@atoms'
import styles from './Benefits.module.scss'

interface IBenefitsProps {}

const Benefits: React.FunctionComponent<IBenefitsProps> = (props) => {
  return (
    <div id="beneficii" className={styles.benefits}>
      <Container className="py-10">
        <FancyTitle variant="white">BENEFICII</FancyTitle>
        <div className="flex flex-col gap-4">
          <Heading tag="h3" className="mb-10">
            Programele SUPORT te ajută să:
          </Heading>
          <Heading tag="h5">
            Te simți mai bine fără să iei pastile în plus.
          </Heading>
          <Paragraph>
            - Vei învăța cum să-ți alegi alimentele și cum să le prepari astfel
            încât să renunți treptat la o parte dintre medicamente.
          </Paragraph>
          <Heading tag="h5">
            Îți creezi noi obiceiuri alimentare care să te ajute să-ți menții
            sănătatea.
          </Heading>
          <Paragraph>
            - Vei fi uimit de rețetele gustoase și nutritive pe care le vei
            primi, precum și de rutina zilnică pe care vei reuși să ți-o creezi
            astfel încât să poți respecta dieta terapeutică fără efort.
          </Paragraph>
          <Heading tag="h5">
            Te bucuri de sprijinul pe care ți-l vor oferi medicul,
            psihoterapeutul și tehnicianul nutriționist la fiecare pas
          </Heading>
          <Paragraph>
            - Nu vei fi singur. Vei fi însoțit în fiecare etapă atât medical,
            cât și psihologic de medici specialiști, psihoterapeuți și
            tehnicieni nutriționiști care au urmat cursuri de nutriție și
            psihonutriție cu Dr. Laura Ene.
          </Paragraph>
        </div>
      </Container>
    </div>
  )
}

export default Benefits
