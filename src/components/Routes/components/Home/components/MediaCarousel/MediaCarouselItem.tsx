import { AspectRatioBox } from '@mariopopk/react-lightning'
import { CSSProperties, ReactNode } from 'react'
import {
  horizontalAspectRatio,
  verticalAspectRatio,
} from '../../../../../../constants'
import { Show } from '../../../../../../types/Show'
import styles from './MediaCarouselItem.module.css'

export interface MediaCarouselData
  extends Pick<Partial<Show>, 'id' | 'images' | 'name'> {}

export interface MediaCarouselItemProps extends MediaCarouselData {
  isFocusable: boolean
  style?: CSSProperties
  tallChildren: ReactNode
  wideChildren: ReactNode
}

export default function MediaCarouselItem({
  style,
  isFocusable,
  wideChildren,
  tallChildren,
}: MediaCarouselItemProps) {
  const tabIndex = isFocusable ? 0 : -1

  return (
    <div className={styles['MediaCarousel-item']} style={style}>
      <div className="d-none d-md-block" tabIndex={tabIndex}>
        <AspectRatioBox aspectRatio={horizontalAspectRatio}>
          <div style={{ padding: '0.2rem', width: '100%', height: '100%' }}>
            {wideChildren}
          </div>
        </AspectRatioBox>
      </div>

      <div className="d-block d-md-none " tabIndex={0}>
        <AspectRatioBox aspectRatio={verticalAspectRatio}>
          <div style={{ padding: '0.2rem', width: '100%', height: '100%' }}>
            {tallChildren}
          </div>
        </AspectRatioBox>
      </div>
    </div>
  )
}
