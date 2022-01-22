import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'

import styles from './Form.module.scss'
import { ElaButton } from '@/atoms'

interface IElaFormProps {}

interface Errors {
  nume?: string | undefined | null
  prenume?: string | undefined | null
  email?: string | undefined | null
  telefon?: string | undefined | null
  program?: string | undefined | null
  mesaj?: string | undefined | null
}

const ElaForm: React.FunctionComponent<IElaFormProps> = (props) => {
  const [confirm, setConfirm] = useState<null | string>(null)
  const [error, setError] = useState<null | string>(null)

  return (
    <Formik
      initialValues={{
        nume: '',
        prenume: '',
        email: '',
        telefon: '',
        program: 'Silueta de 10',
        mesaj: '',
      }}
      validate={(values) => {
        const errors: Errors = {}

        if (confirm && confirm.length > 0) {
          setConfirm(null)
        }

        if (!values.nume) {
          errors.nume = 'Completați acest câmp obligatoriu.'
        } else if (values.nume.length < 2) {
          errors.nume = 'Nume Invalid'
        }

        if (!values.prenume) {
          errors.prenume = 'Completați acest câmp obligatoriu.'
        } else if (values.prenume.length < 2) {
          errors.prenume = 'Prenume Invalid'
        }

        if (!values.telefon) {
          errors.telefon = 'Completați acest câmp obligatoriu.'
        } else if (
          !/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/gm.test(
            values.telefon
          )
        ) {
          errors.telefon = 'Numar de telefon invalid! ex: 0722222222'
        }

        if (!values.email) {
          errors.email = 'Completați acest câmp obligatoriu.'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Adresa de email este invalida!'
        }

        if (!values.program) {
          errors.program = 'Selecteaza un program'
        }

        return errors
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then(() => {
            setSubmitting(false)
            resetForm()
            setConfirm('Programarea a fost solicitata!')
          })
          .catch(() => {
            setError('A aparut o eroare!')
          })
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <label htmlFor="nume">Nume</label>
          <Field
            id="nume"
            className={styles.input}
            type="text"
            name="nume"
            disabled={isSubmitting}
          />
          <div className={styles.error}>
            <ErrorMessage name="nume" component="div" />
          </div>

          <label htmlFor="prenume">Prenume</label>
          <Field
            id="prenume"
            className={styles.input}
            type="text"
            name="prenume"
            disabled={isSubmitting}
          />
          <div className={styles.error}>
            <ErrorMessage name="prenume" component="div" />
          </div>

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            className={styles.input}
            type="email"
            name="email"
            disabled={isSubmitting}
          />
          <div className={styles.error}>
            <ErrorMessage name="email" component="div" />
          </div>

          <label htmlFor="telefon">Telefon</label>
          <Field
            id="telefon"
            className={styles.input}
            type="text"
            name="telefon"
            disabled={isSubmitting}
          />
          <div className={styles.error}>
            <ErrorMessage name="telefon" component="div" />
          </div>

          <Field
            className={styles.select}
            component="select"
            hidden
            id="program"
            name="program"
            disabled={isSubmitting}
          >
            <option value="">Selectează programul dorit</option>
            <option value="Diabet Suport">Diabet Suport</option>
            <option value="Cardiometabolic Suport">
              Cardiometabolic Suport
            </option>
            <option value="Digestiv Suport">Digestiv Suport</option>
            <option value="Pneumo Suport">Pneumo Suport</option>
            <option value="Onco Suport">Onco Suport</option>
            <option value="Bariatric Suport">Bariatric Suport</option>
            <option value="Covid Suport">Covid Suport</option>
            <option value="Stop Fumat Suport">Stop Fumat Suport</option>
            <option value="Silueta Perfectă">Silueta Perfectă</option>
            <option value="Profertilia">Profertilia</option>
            <option value="Materna Suport">Materna Suport</option>
            <option value="Femina Suport">Femina Suport</option>
            <option value="Nu stiu ce program doresc">
              Nu stiu ce program doresc
            </option>
            <option value="Alt program">Alt program</option>
          </Field>

          <label htmlFor="mesaj">Mesaj</label>
          <Field
            component="textarea"
            id="mesaj"
            className={[styles.input, styles.textarea].join(' ')}
            name="mesaj"
            rows="5"
            disabled={isSubmitting}
          />

          {confirm && <p className="text-green-600 ">{confirm}</p>}
          {error && <p className="text-red-600">{error}</p>}

          <ElaButton
            buttonType="submit"
            className="self-center mt-5 desktop:self-start"
          >
            Trimite
          </ElaButton>
        </Form>
      )}
    </Formik>
  )
}

export default ElaForm
