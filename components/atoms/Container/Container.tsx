import React from 'react'

interface IContainerProps {
  className?: string
}

const Container: React.FunctionComponent<IContainerProps> = ({
  className = '',
  children,
}) => {
  return <div className={`container mx-auto px-4 ${className}`}>{children}</div>
}

export default Container
