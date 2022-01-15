import React from 'react'
import Image from 'next/image'
import styles from './FancyTitle.module.scss'

enum FancyTitleType {
  gray = '/assets/images/heading-bggray.webp',
  blue = '/assets/images/heading-bgblue.webp',
  white = '/assets/images/heading-bgwhite.webp',
}

interface IFancyTitleProps {
  variant?: 'gray' | 'blue' | 'white'
}

const FancyTitle: React.FunctionComponent<IFancyTitleProps> = ({
  variant = 'gray',
  children,
}) => {
  return (
    <div className={`${styles.box} ${styles[variant]}`}>
      <Image
        className={styles.image}
        src={FancyTitleType[variant]}
        alt="bg-image"
        layout="fixed"
        width={77}
        height={40}
        placeholder="blur"
        blurDataURL={FancyTitleType[variant]}
      />
      <span className={styles.content}>{children}</span>
    </div>
  )
}

export default FancyTitle
