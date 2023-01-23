import { useNavigate, useParams } from 'react-router-dom'
import useGetShow from './hooks/useGetShow'
import ShowModal from './ShowModal'

export default function ShowModalSection() {
  const { id } = useParams()
  const { data, loading } = useGetShow(id)
  const navigate = useNavigate()

  return (
    <ShowModal
      loading={loading}
      show={data?.show?.data?.attributes}
      open={true}
      handleClose={() => {
        navigate(-1)
      }}
    />
  )
}
