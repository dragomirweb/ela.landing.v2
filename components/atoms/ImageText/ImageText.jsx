import React, { Fragment } from 'react'
import Image from 'next/image'

import { CheckIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ImageText({
  heading = 'Headline',
  image = '/consultatie-initiala.jpg',
  right = false,
  infos = ['test'],
}) {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className={classNames('space-y-4', right && 'order-last')}>
          <Image
            src={image}
            alt="test"
            width={640}
            height={427}
            layout="intrinsic"
            className="rounded-md object-cover"
          />
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <h2>{heading}</h2>
          <div className="flex flex-col gap-2 mt-5">
            {infos.map((info, idx) => (
              <div className="flex gap-2" key={`${idx}-${info.slice(0, 4)}`}>
                <div>
                  <CheckIcon className="w-5 h-5 text-green-500" />
                </div>{' '}
                <p className="text-base text-gray-500">{info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
