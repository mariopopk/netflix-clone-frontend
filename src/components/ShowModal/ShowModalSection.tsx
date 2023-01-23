import { useNavigate, useParams } from 'react-router-dom'
import useGetShow from './hooks/useGetShow'
import ShowModal from './ShowModal'

export default function ShowModalSection() {
  const { id } = useParams()
  const { data } = useGetShow(id)
  const navigate = useNavigate()

  return (
    <ShowModal
      show={data?.show?.data?.attributes}
      open={!!data?.show?.data?.attributes}
      handleClose={() => {
        navigate(-1)
      }}
    />
  )
}
