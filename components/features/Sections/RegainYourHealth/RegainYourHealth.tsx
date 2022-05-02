import React from 'react'

import {
  Container,
  ElaButton,
  ElaImage,
  FancyTitle,
  Heading,
  Paragraph,
  ImageText,
} from '@atoms'

const RegainYourHealth: React.FunctionComponent = () => {
  return (
    <Container
      id="recapata-silueta"
      className="py-10 desktop:py-20 scroll-mt-24"
    >
      <div className="flex flex-col gap-2">
        <FancyTitle className="uppercase" variant="gray">
          RECAPăTă-ȚI SILUETA
        </FancyTitle>
      </div>
      <div className="flex flex-col">
        <Heading tag="h3" className="mb-6">
          Ce conține programul{' '}
          <strong className="text-brand-500">SILUETA DE 10</strong>
        </Heading>

        <ImageText
          heading="1 consultație de evaluare inițială cu medicul coordonator al
          programului în care"
          infos={[
            `Înțelegi principiile și regulile unei diete eficiente și sănătoase înainte de a o urma`,
            `Afli care sunt arderile corpului tău în repaus și cum le poți îmbunătăți`,
            `Realizezi câte calorii trebuie să mănânci ca să reușești să slăbești și să te menții`,
            `Afli care este dieta potrivită pentru tine, fără să renunţi definitiv la alimentele preferate`,
            `Identifici care sunt tiparele de comportament alimentar care te sabotează`,
          ]}
        />

        <ImageText
          heading="5 ședințe de consiliere nutrițională și follow-up săptămânal cu un
          tehnician nutriționist specializat în managementul greutății, în care"
          image="/lectii-audio.jpg"
          infos={[
            `Primești meniuri clare, adaptate preferințelor tale alimentare și nevoilor corpului tău`,
            ` Afli soluții practice - rețete, mod de preparare, idei de asociere a alimentelor`,
            `Înveți cum să-ți organizezi mesele în funcție de programul tău zilnic`,
            `Scapi de pofte și de obiceiurile alimentare nesănătoase care te sabotează`,
            `Ai parte de monitorizare, îndrumare și motivare permanentă pentru a reuși`,
          ]}
          right
        />

        <ImageText
          heading="10 Lecții audio - video de Lifestyle Coaching și Psihonutriție, în
          care"
          image="/LifestyleCoaching.jpg"
          infos={[
            `Afli cum să-ți păstrezi motivația pe tot parcursul procesului de slăbit și menținere`,
            `Înveți să-ți gestionezi mai bine timpul și să te organizezi eficient`,
            `Afli metode simple și eficiente de management al stresului`,
            `Te împrietenești cu emoțiile tale și înveți să le controlezi altfel decât prin mâncare`,
            `Înțelegi care sunt mecanismele din spatele poftelor alimentare și cum le faci față`,
          ]}
        />

        <ImageText
          heading="1 consultație de evaluare finală cu medicul coordonator al programului
          în care"
          image="/evaluare-finala.jpg"
          infos={[
            `Evaluezi și te bucuri de rezultatele primelor 10 săptămâni de dietă`,
            `Stabilești împreună cu medicul tău strategia și modalitatea de continuare`,
            `Afli cum poți să combați tendința de reîngrășare după dietă`,
            `Înțelegi care sunt principiile unei mențineri de durată`,
            `Alegi programul de monitorizare pe termen lung potrivit pentru tine`,
          ]}
          right
        />
      </div>

      <div>
        <Heading className="mt-10 text-brand-500 " tag="h3">
          1950 lei*
        </Heading>
        <p className="text-secondary italic">
          În cazul în care nu te vei încadra în acest program, vei plăti doar
          prima consultație, în valoare de 250 lei si vei primi recomandarea
          pentru programul ELA CLINIC potrivit pentru tine
        </p>
      </div>
    </Container>
  )
}

export default RegainYourHealth
