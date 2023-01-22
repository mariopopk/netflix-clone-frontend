import FeaturedMediaSection from './components/FeaturedMedia/FeaturedMediaSection'
import useGetHomeCategoryIds from './components/MediaCarousel/hooks/useGetHomeCategoryIds'
import MediaCarouselSection from './components/MediaCarousel/MediaCarouselSection'
import ShowModal from './components/ShowModal/ShowModal'
import ShowModalSection from './components/ShowModal/ShowModalSection'

export default function Home() {
  const { data, error, loading } = useGetHomeCategoryIds()

  console.log(data, error, loading, 'k')

  return (
    <>
      <FeaturedMediaSection />
      <div
        style={{
          marginBottom: '5rem',
        }}
      >
        {data?.genres?.data?.map(({ id }) => {
          return <MediaCarouselSection key={id} category={id!} />
        })}
      </div>
    </>
  )
}
