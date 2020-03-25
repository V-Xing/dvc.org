import cn from 'classnames'
import React from 'react'
import { useWindowScroll } from 'react-use'

import { LayoutModifiers, ILayoutModifiable } from '../MainLayout'
import LayoutWidthContainer from '../LayoutWidthContainer'
import Link from '../Link'
import Nav from '../Nav'

import { ReactComponent as LogoSVG } from './logo.svg'
import styles from './styles.module.css'

const LayoutHeader: React.SFC<Required<ILayoutModifiable>> = ({
  modifiers
}) => {
  const { y } = useWindowScroll()

  return (
    <header className={styles.wrapper} id="header">
      <div className={styles.placeholder} />
      <div className={styles.header}>
        <LayoutWidthContainer
          className={cn(styles.container, y > 25 && styles.scrolled)}
          wide={modifiers.includes(LayoutModifiers.Wide)}
        >
          <Link href="/" className={styles.logoLink} title="DVC">
            <LogoSVG className={styles.logo} />
          </Link>
          <Nav />
        </LayoutWidthContainer>
      </div>
    </header>
  )
}

export default LayoutHeader