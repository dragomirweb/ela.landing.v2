import * as React from 'react'
import { FunctionComponent, HTMLAttributes } from 'react'

import { ElaImage, Heading } from '@atoms'

interface IStepProps extends HTMLAttributes<HTMLDivElement> {
  step: string
  heading: string
  imgPath: string
  alt: string
  align?: 'left' | 'right'
}

const Step: FunctionComponent<IStepProps> = ({
  step,
  heading,
  children,
  className,
  imgPath,
  alt,
  align = 'left',
  ...rest
}) => {
  return (
    <div className={`grid grid-cols-12 gap-4 ${className}`} {...rest}>
      <div
        className={`flex w-full items-center justify-items-center 
                  tablet:col-span-12 desktop:col-span-3 order-last ${
                    align === 'left'
                      ? 'desktop:order-last'
                      : 'desktop:order-first'
                  }`}
      >
        <ElaImage
          className="mx-auto"
          src={imgPath}
          alt={alt}
          layout="intrinsic"
          width={450}
          height={450}
        ></ElaImage>
      </div>
      <div className="flex flex-col tablet:col-span-12 desktop:col-span-9">
        <span className="text-brand-500 text-lg">{step}</span>
        <Heading className="mb-4" tag="h4">
          {heading}
        </Heading>
        {children}
      </div>
    </div>
  )
}

export default Step
