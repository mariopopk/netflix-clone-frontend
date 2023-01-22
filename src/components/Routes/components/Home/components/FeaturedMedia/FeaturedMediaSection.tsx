import { FeaturedMediaHorizontal, FeaturedMediaVertical } from './FeaturedMedia'
import useGetFeaturedMedia from './hooks/useGetFeaturedMedia'

export default function FeaturedMediaSection() {
  const { data, loading, error } = useGetFeaturedMedia()
  return (
    <>
      <>
        <div className="d-none d-md-block">
          <FeaturedMediaHorizontal
            show={data?.show?.data?.attributes}
            loading={loading}
            error={error}
          />
        </div>
        <div className="d-md-none d-block">
          <FeaturedMediaVertical
            show={data?.show?.data?.attributes}
            loading={loading}
            error={error}
          />
        </div>
      </>
    </>
  )
}
