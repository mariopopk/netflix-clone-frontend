import useGetShow from './hooks/useGetShow'
import ShowModal from './ShowModal'

interface ShowModalSectionProps {
  id?: string
}

export default function ShowModalSection({ id }: ShowModalSectionProps) {
  const { data } = useGetShow(id)

  return (
    <>{/* <ShowModal show={data?.show?.data?.attributes} open={false} /> */}</>
  )
}
