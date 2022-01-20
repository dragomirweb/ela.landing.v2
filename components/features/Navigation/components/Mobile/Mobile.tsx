import { AnimatePresence, motion, useCycle } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { VscThreeBars, VscChromeClose } from 'react-icons/vsc'

import SocialLinks from '../SocialLinks/SocialLinks'
import { links } from '../Desktop/Desktop'

import styles from './Mobile.module.scss'

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}

interface IMobileProps {}

const Mobile: React.FunctionComponent<IMobileProps> = (props) => {
  const [open, cycleOpen] = useCycle(false, true)

  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [open])

  return (
    <>
      <button
        aria-label="open menu"
        className={styles['menu-button']}
        onClick={() => cycleOpen()}
      >
        <svg
          aria-hidden="true"
          className="w-7 h-7"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <div className={styles.menu}>
            <motion.aside
              initial={{ width: 0, backgroundColor: '#3b6cef' }}
              animate={{ width: '100%' }}
            >
              <div className={styles['menu-header']}>
                <h4 className="text-white text-3xl">Ela Clinic</h4>
                <button
                  aria-label="close menu"
                  className="pointer"
                  onClick={() => cycleOpen()}
                >
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                    ></path>
                  </svg>
                </button>
              </div>
              <motion.div
                className={styles['menu-links']}
                initial="closed"
                animate="open"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <Link href={{ hash: to }} passHref key={id}>
                    <motion.a
                      onClick={() => cycleOpen()}
                      className={styles.link}
                      whileHover={{ x: 0, y: 0, scale: 1.3 }}
                      whileTap={{ x: 0, y: 0, scale: 1.3 }}
                      variants={itemVariants}
                    >
                      {name}
                    </motion.a>
                  </Link>
                ))}
              </motion.div>
              <div className={styles['menu-footer']}>
                <SocialLinks size="2rem" />
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Mobile
