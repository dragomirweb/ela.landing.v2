import * as React from 'react'

import styles from './Paragraph.module.scss'

interface IParagraphProps {
  className?: string
  children: React.ReactNode
}

const Paragraph: React.FunctionComponent<IParagraphProps> = ({
  className = '',
  children,
}) => {
  return <p className={`${className} ${styles.p}`}>{children}</p>
}

export default Paragraph
