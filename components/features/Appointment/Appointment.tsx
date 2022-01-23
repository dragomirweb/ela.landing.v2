import React from 'react'
import { Container, ElaImage, FancyTitle, Heading, Paragraph } from '@/atoms'

import ElaForm from './components/Form/Form'
import styles from './Appointment.module.scss'

interface IAppointmentProps {}

const Appointment: React.FunctionComponent<IAppointmentProps> = (props) => {
  return (
    <div id="programare" className={styles.appointment}>
      <Container className="py-10 desktop:py-20">
        <Heading tag="h3" className="mb-10 text-center">
          Programează-te acum și începe să slăbești!
        </Heading>

        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-2 bg-neutral-200 rounded-3xl overflow-hidden">
          <div className="flex flex-col px-5 tablet:px-16 py-10">
            <FancyTitle variant="gray">PROGRAMARE</FancyTitle>
            <p className="mb-5 leading-tight">
              Completează formularul de mai jos și un consultant ELA CLINIC te
              va contacta pentru programarea primei consultații în cel mult 48
              de ore.
            </p>
            <ElaForm />
          </div>

          <div className="relative hidden desktop:block">
            <ElaImage
              className="object-cover"
              src="/assets/images/contact-bg2.webp"
              alt="dr laura ene"
              layout="fill"
            ></ElaImage>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Appointment
