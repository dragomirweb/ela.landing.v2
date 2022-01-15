import React from 'react'
import Link from 'next/link'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

interface ISocialLinksProps {
  size?: string
}

const SocialLinks: React.FunctionComponent<ISocialLinksProps> = ({
  size = '24px',
}) => {
  return (
    <>
      <div className="flex gap-2">
        <div className="flex h-full">
          <Link
            href="https://www.facebook.com/ElaClinic-104786381559677"
            passHref
          >
            <a role="facebook page" className="flex items-center h-full">
              <FaFacebookSquare size={size} />
            </a>
          </Link>
        </div>
        <div className="flex h-full">
          <Link href="https://www.instagram.com/elaclinic.ro/" passHref>
            <a role="facebook page" className="flex items-center h-full">
              <FaInstagram size={size} />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SocialLinks
