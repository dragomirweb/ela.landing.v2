import React from 'react'

import { Container, ElaImage } from '@atoms'
import SocialLinks from '../Navigation/components/SocialLinks/SocialLinks'

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="border-t-[1px]">
      <Container className="flex justify-between py-5">
        <div className="flex items-center gap-2">
          <ElaImage
            className="flex"
            src="/favicon.png"
            alt="Logo"
            width={40}
            height={40}
            layout="fixed"
          />
          <span className="text-sm text-neutral-600 leading-none">
            &copy; {new Date().getFullYear()} Ela Clinic. Toate drepturile
            rezervate.
          </span>
        </div>

        <div className="text-neutral-600">
          <SocialLinks />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
