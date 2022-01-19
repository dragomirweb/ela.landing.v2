import React from 'react'

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const Container: React.FunctionComponent<IContainerProps> = ({
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
