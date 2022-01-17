import React from 'react'

import Tag from './Tag'
import styles from './Heading.module.scss'

interface IHeadingProps {
  tag: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  children: React.ReactNode
}

const Heading: React.FunctionComponent<IHeadingProps> = ({
  tag,
  className,
  children,
}) => {
  return (
    <Tag
      tagName={tag}
      className={`${styles[tag]} ${className !== undefined ? className : ''}`}
    >
      {children}
    </Tag>
  )
}

export default Heading
