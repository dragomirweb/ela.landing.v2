import React from 'react'

import { Container, FancyTitle, Heading, Paragraph } from '@atoms'
import { Step } from '@molecules'

const Steps: React.FunctionComponent = () => {
  return (
    <Container id="pasi" className="py-10 desktop:py-20 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <FancyTitle variant="gray">PASII PROGRAMULUI</FancyTitle>
        <Heading tag="h3" className="mb-10">
          Cum intri în programul{' '}
          <strong className="text-brand-500">SILUETA DE 10</strong>
        </Heading>
        <Step
          step="Pasul 1"
          heading="Înscrierea"
          imgPath="/assets/images/inscrierea.webp"
          alt="inscrierea"
          align="left"
        >
          <div className="flex flex-col gap-2">
            <Paragraph>
              Pentru a te înscrie în program tot ce ai de făcut este să
              completezi formularul de la final. Un consultant ELA CLINIC te va
              contacta în cel mult 48 de ore pentru a stabili data primei
              programări.
            </Paragraph>
          </div>
        </Step>
        <hr className="my-10" />
        <Step
          step="Pasul 2"
          heading="Consultația medicală"
          imgPath="/assets/images/consultatia_medicala.webp"
          alt="Analiza compozitiei corporale"
          align="right"
        >
          <div className="flex flex-col gap-2">
            <Paragraph>
              Te prezinți în clinică la data și ora programării, unde susții
              prima consultație cu medicul coordonator. Acesta îți va evalua
              starea de sănătate, îți va prezenta structura și regulile dietei
              și va decide dacă ți se potrivește acest program.
            </Paragraph>
            <Paragraph>
              Ca să fii admis în acest program trebuie să fii într-o stare de
              sănătate optimă. Pentru a fi sigur de acest lucru, te rugăm să
              aduci la prima consultație lista cu ultimele analize de sânge, nu
              mai vechi de 3 luni. Dacă nu ai analize recente, descarcă de mai
              jos lista cu cele recomandate.
            </Paragraph>
            <a
              href="/assets/files/Analize Ela Clinic.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-500 text-xl underline decoration-brand-500/40 
                underline-offset-1 flex gap-2 place-items-start desktop:place-items-end mt-5"
            >
              <svg
                aria-hidden="true"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"
                ></path>
              </svg>
              <span className="leading-none">
                Descarcă lista cu analizele recomandate!
              </span>
            </a>
          </div>
        </Step>

        <hr className="my-10" />

        <Step
          step="Pasul 3"
          heading="Consilierea nutrițională și atelierele de coaching"
          imgPath="/assets/images/consultatii_coaching.webp"
          alt="Analiza compozitiei corporale"
          align="left"
        >
          <div className="flex flex-col gap-2">
            <Paragraph>
              Timp de 10 săptămâni vei avea parte de monitorizare, îndrumare și
              suport săptămânal prin întâlniri cu nutriționistul tău specializat
              în managementul greutății și ateliere de coaching de grup, astfel
              încât să reușești ce ți-ai propus.
            </Paragraph>
          </div>
        </Step>
        <hr className="my-10" />
        <Step
          step="Rezultate"
          heading="Finalizarea programului"
          imgPath="/assets/images/final_program.webp"
          alt="Analiza compozitiei corporale"
          align="right"
        >
          <div className="flex flex-col gap-2">
            <Heading className="my-5" tag="h5">
              Felicitări! Cântărești cu 10 kg mai puțin. Cum continui?
            </Heading>

            <ul className="list-disc list-inside desktop:pl-4 text-lg leading-snug text-secondary ">
              <li>
                <span>
                  Poți relua programul de 10 săptămâni, dacă ai nevoie să
                  slăbești în continuare
                </span>
              </li>
              <li>
                <span>
                  Poți opta pentru un program de menținere a greutății
                  (RECOMANDAT).
                </span>
              </li>
            </ul>
          </div>
        </Step>
      </div>
    </Container>
  )
}

export default Steps
