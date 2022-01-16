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
        <VscThreeBars size="32px" />
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
                  <VscChromeClose size="42px" />
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
