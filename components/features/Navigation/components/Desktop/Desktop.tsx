import React from 'react'
import Link from 'next/link'
import SocialLinks from '../SocialLinks/SocialLinks'

import styles from './Desktop.module.scss'

export const links = [
  { name: 'Recapata-ți silueta'.toUpperCase(), to: '#recapata-silueta', id: 1 },
  { name: 'Beneficii'.toUpperCase(), to: '#beneficii', id: 2 },
  { name: 'Pașii programului'.toUpperCase(), to: '#pasi', id: 3 },
  { name: 'Programare'.toUpperCase(), to: '#programare', id: 4 },
]

interface IDesktopProps {}

const Desktop: React.FunctionComponent<IDesktopProps> = (props) => {
  return (
    <ul aria-label="navigation" className={styles.menu}>
      {links.map(({ name, to, id }) => (
        <li className={styles.item} key={id}>
          <Link href={{ hash: to }}>
            <a className={styles.link}>{name}</a>
          </Link>
        </li>
      ))}
      <SocialLinks />
    </ul>
  )
}

export default Desktop
