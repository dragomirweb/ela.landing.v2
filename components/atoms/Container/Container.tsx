import React from 'react'
import { FunctionComponent, HTMLAttributes } from 'react'

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const Container: FunctionComponent<IContainerProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <div className={`container mx-auto px-4 ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default Container
