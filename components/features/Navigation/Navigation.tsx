import React, { useEffect } from 'react'
import Link from 'next/link'
import { Container, ElaImage } from '@atoms'

import styles from './Navigation.module.scss'

import Desktop from './components/Desktop/Desktop'
import Mobile from './components/Mobile/Mobile'

const Navigation: React.FunctionComponent = () => {
  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  const isSticky = (e: Event) => {
    const header = document.querySelector('.header-section')
    const scrollTop = window.scrollY
    if (header) {
      scrollTop >= 96
        ? header.classList.add(styles.sticky)
        : header.classList.remove(styles.sticky)
    }
  }

  return (
    <header className={`${styles.header} header-section`}>
      <Container className={styles.wrapper}>
        <Link href="/" passHref>
          <a>
            <ElaImage
              src="/favicon.png"
              alt="Logo"
              width={72}
              height={72}
              layout="fixed"
            />
          </a>
        </Link>

        <Desktop />
        <Mobile />
      </Container>
    </header>
  )
}

export default Navigation
