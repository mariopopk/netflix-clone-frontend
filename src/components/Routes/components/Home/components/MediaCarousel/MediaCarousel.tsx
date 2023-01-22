import { useRef } from 'react'
import styles from './MediaCarousel.module.css'
import cx from 'classnames'
import { Skeleton, useWindowSize } from '@mariopopk/react-lightning'
import { UilAngleRightB, UilAngleLeftB } from '@iconscout/react-unicons'
import useSlideMediaCarousel from './hooks/useSlideMediaCarousel'
import MediaCarouselItem from './MediaCarouselItem'
import ShowsQuery from '../../../../../../apollo/types/Show/ShowsQuery'
import MediaCarouselItemImage from './MediaCarouselItemImage'
import ShowModalSection from '../ShowModal/ShowModalSection'

export interface MediaCarouselProps {
  shows?: ShowsQuery['shows']
  loading?: boolean
}

export default function MediaCarousel({ shows, loading }: MediaCarouselProps) {
  const { width } = useWindowSize()
  const MediaCarouselRef = useRef<HTMLDivElement>(null)

  const totalItems = shows?.data?.length || 0

  // TODO: (1) Finalize breakpoints and (2) turn inScreenItems into props
  const inScreenItems = {
    // breakpoint -> inScreenItem
    large: 6,
    small: 3,
  }

  const currentInScreenItems =
    width >= 992 ? inScreenItems.large : inScreenItems.small

  const screenSize = width >= 992 ? 100 : 90

  const { positionX, move, currentItem } = useSlideMediaCarousel({
    MediaCarouselRef,
    inScreenItems: currentInScreenItems,
    totalItems,
  })

  return (
    <div className={styles['MediaCarousel']}>
      <button
        disabled={currentItem === 0}
        className={cx(styles['MediaCarousel-button'], styles.left)}
        onClick={() => {
          move('left', currentInScreenItems)
        }}
      >
        <UilAngleLeftB color="white" />
      </button>

      <div
        className={styles['MediaCarousel-inner']}
        ref={MediaCarouselRef}
        style={{
          transform: width >= 768 ? `translate(${positionX}px, 0px)` : 'none',
          transition: width >= 768 ? `ease-out 0.75s` : 'none',
        }}
      >
        {shows?.data?.map(({ id, attributes }, i: number) => {
          const isFocusable =
            i >= currentItem && i < currentItem + currentInScreenItems
          return (
            <MediaCarouselItem
              isFocusable={isFocusable}
              key={id}
              style={{
                width: `${screenSize / currentInScreenItems}%`,
              }}
              tallChildren={
                <MediaCarouselItemImage
                  alt={attributes?.name}
                  image={attributes?.images?.tallThumbnail}
                />
              }
              wideChildren={
                <MediaCarouselItemImage
                  alt={attributes?.name}
                  image={attributes?.images?.wideThumbnail}
                />
              }
            />
          )
        })}

        {loading &&
          [1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => {
            return (
              <MediaCarouselItem
                key={i}
                style={{
                  width: `${screenSize / currentInScreenItems}%`,
                }}
                isFocusable={false}
                tallChildren={<Skeleton variant="rectangular" />}
                wideChildren={<Skeleton variant="rectangular" />}
              />
            )
          })}
      </div>

      <button
        disabled={currentItem === totalItems - currentInScreenItems}
        className={cx(styles['MediaCarousel-button'], styles.right)}
        onClick={() => {
          move('right', currentInScreenItems)
        }}
      >
        <UilAngleRightB color="white" />
      </button>
    </div>
  )
}
