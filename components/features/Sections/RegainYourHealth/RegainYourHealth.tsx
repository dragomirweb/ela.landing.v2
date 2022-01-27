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
              Înțelegi principiile și regulile dietei înainte de a o urma
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
        </ul>

        <Heading className="my-5" tag="h5">
          5 ședințe de consiliere nutrițională cu un tehnician nutriționist
          specializat în managementul greutății, în care
        </Heading>

        <ul className="list-disc list-inside desktop:pl-4 text-lg leading-snug text-secondary">
          <li>
            Primești meniuri clare, adaptate fiecărei săptămâni de dietă în
            parte
          </li>
          <li>
            Ai mereu o lista de cumpărături bine stabilită, astfel încât să te
            organizezi eficient
          </li>
          <li>
            Afli soluții practice - rețete, mod de preparare, idei de asociere a
            alimentelor.
          </li>
          <li>
            Înveți cum să-ți organizezi mesele în funcție de programul tău
            zilnic
          </li>
          <li>
            Ai parte de monitorizare, îndrumare și motivare permanentă pentru a
            reuși
          </li>
        </ul>

        <Heading className="my-5" tag="h5">
          5 Ateliere de coaching de grup, în care
        </Heading>

        <ul className="list-disc list-inside desktop:pl-4 text-lg leading-snug text-secondary">
          <li>
            Afli cum să-ți păstrezi motivația pe tot parcursul procesului de
            slăbit și menținere
          </li>
          <li>
            Înveți să-ți gestionezi mai bine timpul și să te organizezi eficient
          </li>
          <li>Afli metode simple și eficiente de gestionare a stresului</li>
          <li>
            Te împrietenești cu emoțiile tale și înveți să le controlezi altfel
            decât prin mâncare
          </li>
          <li>
            Înțelegi care sunt mecanismele din spatele poftelor alimentare și
            cum le faci față
          </li>
        </ul>
      </div>
      <div>
        <Heading className="mt-10 text-brand-500 " tag="h3">
          1750 lei*
        </Heading>
        <p className="text-secondary italic">
          *În cazul în care nu te vei încadra în acest program, vei plăti doar
          prima consultație, în valoare de 250 lei si vei primi recomandarea
          pentru programul ELA CLINIC potrivit pentru tine
        </p>
      </div>
    </Container>
  )
}

export default RegainYourHealth
