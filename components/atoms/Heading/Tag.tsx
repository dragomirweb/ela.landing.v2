import React from 'react'

interface ITagProps {
  tagName: string
  className?: string
}

const Tag: React.FunctionComponent<ITagProps> = ({
  tagName,
  children,
  ...props
}) => React.createElement(tagName, props, children)

export default Tag
