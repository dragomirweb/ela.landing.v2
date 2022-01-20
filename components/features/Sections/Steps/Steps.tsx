import * as React from 'react'

import { Container, FancyTitle, Heading, Paragraph } from '@atoms'
import { Step } from '@molecules'

const Steps: React.FunctionComponent = () => {
  return (
    <Container id="pasi" className="py-10 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <FancyTitle variant="gray">PASII PROGRAMULUI</FancyTitle>
        <Heading tag="h2">
          Cum se desfășoară{' '}
          <span className="text-brand-500 uppercase">programele suport</span>{' '}
          Ela Clinic
        </Heading>
        <Step
          className="mt-10"
          step="Pasul 1"
          heading="Analiza compoziției corporale"
          imgPath="/assets/images/pasi/analiza_compozitiei_corporale.webp"
          alt="Analiza compozitiei corporale"
          align="left"
        >
          <Paragraph>
            Vii în clinică și îți faci analiza pe un cântar performant care
            funcționează pe bază de bioimpedanță. Aceasta înseamnă că trimite un
            curent de intensitate foarte mică prin corp. Deși acesta nu se simte
            deloc, adună informații despre densitatea diverselor medii pe care
            le traversează.
          </Paragraph>
          <Paragraph>
            La finalul analizei vei primi un raport complet care conține gradul
            de grăsime viscerală, cantitatea de apă, mușchi și oase din corp,
            estimarea vârstei metabolice și a ratei metabolice de repaus.
          </Paragraph>
        </Step>
      </div>
    </Container>
  )
}

export default Steps
