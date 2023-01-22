import { AspectRatioBox, Paper } from '@mariopopk/react-lightning'
import { Children, createContext, ReactNode, useRef } from 'react'
import useSlideMediaCarousel from './hooks/useSlideMediaCarousel'
import styles from './MediaCarousel.module.css'
import cx from 'classnames'
import { UilAngleRightB, UilAngleLeftB } from '@iconscout/react-unicons'
import { horizontalAspectRatio } from '../../../../../../constants'

interface CarouselProps {
  children?: ReactNode
  showCount?: number
}

export default function Carousel({ children, showCount = 1 }: CarouselProps) {
  const MediaCarouselRef = useRef<HTMLDivElement>(null)

  console.log(Children.count(children))

  const { positionX, move, currentItem } = useSlideMediaCarousel({
    MediaCarouselRef,
    inScreenItems: showCount,
    totalItems: Children.count(children),
  })

  return (
    <div className={styles['MediaCarousel']}>
      <CarouselButtonLeft handleMove={() => move('left', showCount)} />

      {/* <div
        className={styles['MediaCarousel-inner']}
        ref={MediaCarouselRef}
        style={{
          transform: `translate(${positionX}px, 0px)`,
          transition: `ease-out 0.75s`,
        }}
      >
        {children}
      </div> */}

      <CarouselButtonRight handleMove={() => move('right', showCount)} />
    </div>
  )
}

interface CarouselButtonProps {
  handleMove: () => void
}

function CarouselButtonLeft({ handleMove }: CarouselButtonProps) {
  return (
    <button
      //   disabled={currentItem === 0}
      className={cx(styles['MediaCarousel-button'], styles.left)}
      onClick={handleMove}
    >
      <UilAngleLeftB color="white" />
    </button>
  )
}

function CarouselButtonRight({ handleMove }: CarouselButtonProps) {
  return (
    <button
      //   disabled={currentItem === totalCount - showCount}
      className={cx(styles['MediaCarousel-button'], styles.right)}
      onClick={handleMove}
    >
      <UilAngleRightB color="white" />
    </button>
  )
}

function CarouselItem({ children }: { children: ReactNode }) {
  return <div className={styles['MediaCarousel-item']}>{children}</div>
}

export function Root() {
  const items = ['Item', 'Item']

  return (
    <Carousel showCount={1}>
      {items.map((item, i) => {
        return (
          <CarouselItem key={i}>
            <AspectRatioBox aspectRatio={horizontalAspectRatio}>
              <Paper>{item}</Paper>
            </AspectRatioBox>
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}
