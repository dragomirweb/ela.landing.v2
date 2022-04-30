import React from 'react'

import {
  Container,
  ElaButton,
  ElaImage,
  FancyTitle,
  Heading,
  Paragraph,
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
        <Heading tag="h3" className="mb-10">
          Ce conține programul{' '}
          <strong className="text-brand-500">SILUETA DE 10</strong>
        </Heading>
        <Heading className="my-5" tag="h5">
          1 consultație de evaluare inițială cu medicul coordonator al
          programului în care
        </Heading>

        <ul className="list-disc list-inside desktop:pl-4 text-lg leading-snug text-secondary ">
          <li>
            <span>
              Înțelegi principiile și regulile unei diete eficiente și sănătoase
              înainte de a o urma
            </span>
          </li>
          <li>
            <span>
              Afli care sunt arderile corpului tău în repaus și cum le poți
              îmbunătăți
            </span>
          </li>
          <li>
            <span>
              Realizezi câte calorii trebuie să mănânci ca să reușești să
              slăbești și să te menții
            </span>
          </li>
          <li>
            <span>
              Afli care este dieta potrivită pentru tine, fără să renunţi
              definitiv la alimentele preferate
            </span>
          </li>
          <li>
            <span>
              Identifici care sunt tiparele de comportament alimentar care te sabotează
            </span>
          </li>
        </ul>

        <Heading className="my-5" tag="h5">
          5 ședințe de consiliere nutrițională și follow-up săptămânal cu un
          tehnician nutriționist specializat în managementul greutății, în care
        </Heading>

        <ul className="list-disc list-inside desktop:pl-4 text-lg leading-snug text-secondary">
          <li>
            Primești meniuri clare, adaptate preferințelor tale alimentare și
            nevoilor corpului tău
          </li>
          <li>
            Afli soluții practice - rețete, mod de preparare, idei de asociere a
            alimentelor
          </li>
          <li>
            Înveți cum să-ți organizezi mesele în funcție de programul tău
            zilnic
          </li>
          <li>
            Scapi de pofte și de obiceiurile alimentare nesănătoase care te
            sabotează
          </li>
          <li>
            Ai parte de monitorizare, îndrumare și motivare permanentă pentru a
            reuși
          </li>
        </ul>

        <Heading className="my-5" tag="h5">
          10 Lecții audio - video de Lifestyle Coaching și Psihonutriție, în
          care
        </Heading>

        <ul className="list-disc list-inside desktop:pl-4 text-lg leading-snug text-secondary">
          <li>
            Afli cum să-ți păstrezi motivația pe tot parcursul procesului de
            slăbit și menținere
          </li>
          <li>
            Înveți să-ți gestionezi mai bine timpul și să te organizezi eficient
          </li>
          <li>Afli metode simple și eficiente de management al stresului</li>
          <li>
            Te împrietenești cu emoțiile tale și înveți să le controlezi altfel
            decât prin mâncare
          </li>
          <li>
            Înțelegi care sunt mecanismele din spatele poftelor alimentare și
            cum le faci față
          </li>
        </ul>

        <Heading className="my-5" tag="h5">
          1 consultație de evaluare finală cu medicul coordonator al programului
          în care
        </Heading>

        <ul className="list-disc list-inside desktop:pl-4 text-lg leading-snug text-secondary">
          <li>
            Evaluezi și te bucuri de rezultatele primelor 10 săptămâni de dietă
          </li>
          <li>
            Stabilești împreună cu medicul tău strategia și modalitatea de
            continuare
          </li>
          <li>Afli cum poți să combați tendința de reîngrășare după dietă</li>
          <li>Înțelegi care sunt principiile unei mențineri de durată</li>
          <li>
            Alegi programul de monitorizare pe termen lung potrivit pentru tine
          </li>
        </ul>
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
