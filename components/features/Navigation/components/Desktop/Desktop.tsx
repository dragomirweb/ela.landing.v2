import React from 'react'
import Link from 'next/link'
import SocialLinks from '../SocialLinks/SocialLinks'

import styles from './Desktop.module.scss'

export const links = [
  { name: 'Cum să-ți recapeți sănătatea', to: '#recapata-sanatatea', id: 1 },
  { name: 'Beneficii', to: '#beneficii', id: 2 },
  { name: 'Pașii programului', to: '#pasi', id: 3 },
  { name: 'Programare', to: '#programare', id: 4 },
]

interface IDesktopProps {}

const Desktop: React.FunctionComponent<IDesktopProps> = (props) => {
  return (
    <ul className={styles.menu}>
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
