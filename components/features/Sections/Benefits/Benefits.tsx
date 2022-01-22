import React from 'react'

import { Container, FancyTitle, Heading, Paragraph } from '@atoms'
import styles from './Benefits.module.scss'

interface IBenefitsProps {}

const Benefits: React.FunctionComponent<IBenefitsProps> = (props) => {
  return (
    <div id="beneficii" className={styles.benefits}>
      <Container className="py-10 desktop:py-20">
        <FancyTitle variant="white">BENEFICII</FancyTitle>
        <div className="flex flex-col gap-4">
          <Heading tag="h3" className="mb-10">
            Ce conține programul{' '}
            <strong className="text-brand-500">SILUETA DE 10</strong>
          </Heading>
          <div className="flex flex-col gap-4">
            <Heading tag="h5">
              - 1 consultație cu medicul supervizor al programului
            </Heading>
            <Heading tag="h5">
              - 5 consultații cu un nutriționist specializat în diete rapide
            </Heading>
            <Heading tag="h5">- 5 ateliere de coaching de grup</Heading>
          </div>
          <Heading tag="h3" className="mt-10">
            <span className="text-brand-500">1750 lei*</span>
          </Heading>
          <Paragraph>
            * În cazul în care nu vei fi acceptat în program, vei plăti doar
            prima consultație, în valoare de 250 lei.
          </Paragraph>
        </div>
      </Container>
    </div>
  )
}

export default Benefits
