import React from 'react'
import Image from 'next/image'

interface IElaImageProps {
  src: string
  alt: string
  layout?: 'responsive' | 'fixed' | 'fill' | 'intrinsic'
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

const ElaImage: React.FunctionComponent<IElaImageProps> = ({
  src,
  alt,
  layout = 'responsive',
  width = undefined,
  height = undefined,
  priority = true,
  className = '',
}) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        priority={priority}
        placeholder="blur"
        blurDataURL={src}
      />
    </div>
  )
}

export default ElaImage
