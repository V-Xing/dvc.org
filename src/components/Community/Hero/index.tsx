import React from 'react'

import LayoutWidthContainer from '../../LayoutWidthContainer'
import ShowOnly from '../../ShowOnly'
import Link from '../../Link'
import { useCommunityData } from '../../../utils/front/community'
import { logEvent } from '../../../utils/front/ga'

import styles from './styles.module.css'

const logHero = (): void => logEvent('community', 'hero')

const Hero: React.FC = () => {
  const { hero } = useCommunityData()

  if (!hero) {
    return null
  }

  return (
    <LayoutWidthContainer className={styles.container}>
      <Link
        className={styles.link}
        href={hero.url}
        target="_blank"
        onClick={logHero}
      >
        <ShowOnly on="desktop">
          <img className={styles.picture} src={hero.pictureDesktop} alt="" />
        </ShowOnly>
        <ShowOnly on="mobile">
          <img className={styles.picture} src={hero.pictureMobile} alt="" />
        </ShowOnly>
      </Link>
    </LayoutWidthContainer>
  )
}

export default Hero
