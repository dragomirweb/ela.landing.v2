import React from 'react'

import {
  Container,
  ElaButton,
  ElaImage,
  FancyTitle,
  Heading,
  Paragraph,
} from '@atoms'
import styles from './Benefits.module.scss'

interface IBenefitsProps {}

const Benefits: React.FunctionComponent<IBenefitsProps> = (props) => {
  return (
    <div id="beneficii" className={styles.benefits}>
      <Container className="py-10 desktop:py-20">
        <FancyTitle variant="white">BENEFICII</FancyTitle>

        <div className="flex flex-col gap-2">
          <div className="grid gap-5 gap-y-20 tablet:grid-cols-2  desktop:grid-cols-3">
            <div className="flex flex-col items-center ">
              <ElaImage
                className="flex "
                src="/assets/images/obez.webp"
                alt="obezitate"
                layout="intrinsic"
                width={150}
                height={150}
              ></ElaImage>
              <p
                className="text-center text-xl first-letter:text-3xl 
                first-letter:font-black text-secondary grow mt-5"
              >
                Cu toții trăim într-un mediu obezogen, care ne influențează
                alegerile alimentare. Noi te ajutăm să înțelegi ce se întâmplă
                cu corpul și metabolismul tău în cadrul unei diete. Tu înveți să
                faci alegerile potrivite pentru silueta și sănătatea ta
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ElaImage
                className="flex "
                src="/assets/images/fastfood.webp"
                alt="obezitate"
                layout="intrinsic"
                width={150}
                height={150}
              ></ElaImage>
              <p
                className="text-center text-xl first-letter:text-3xl first-letter:font-black 
                 text-secondary grow mt-5"
              >
                Cu toții suntem înconjurați de mâncare și influențați de pofte.
                Noi te ajutăm să slăbești sănătos și echilibrat, fără să te
                înfometezi. Tu afli cum scapi de pofte și de obiceiurile
                alimentare nesănătoase.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center tablet:col-span-2 desktop:col-span-1">
              <ElaImage
                className="flex "
                src="/assets/images/smartphone.webp"
                alt="obezitate"
                layout="intrinsic"
                width={150}
                height={150}
              ></ElaImage>
              <p className="text-center text-xl first-letter:text-3xl first-letter:font-black text-secondary grow mt-5">
                Cu toții trăim un stil de viață alert, stresant, în care cu greu
                ne mai găsim timp și pentru noi. Noi te ajutăm cu soluții
                practice – meniuri, rețete, idei de asociere a alimentelor. Tu
                înveți să-ți gestionezi mai bine timpul, emoțiile și stresul.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center py-10">
            <ElaButton
              className="text-2xl"
              onClick={() => {
                window.location.hash = ''
                window.location.hash = 'programare'
              }}
            >
              Intră în programul SILUETA DE 10!
            </ElaButton>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Benefits
