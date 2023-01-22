import { gql, useQuery } from '@apollo/client'
import ShowQuery from '../../../../../../../apollo/types/Show/ShowQuery'

const getShow = gql`
  query getShow($id: ID!) {
    show(id: $id) {
      data {
        id
        attributes {
          name
          description
          releaseYear
          maturityLevel
          keywords {
            data {
              id
              attributes {
                name
              }
            }
          }
          genres {
            data {
              id
              attributes {
                name
              }
            }
          }
          starring {
            data {
              id
              attributes {
                name
              }
            }
          }
          cast {
            data {
              id
              attributes {
                name
              }
            }
          }
          genres {
            data {
              id
              attributes {
                name
              }
            }
          }
          keywords {
            data {
              id
              attributes {
                name
              }
            }
          }
          audio {
            data {
              id
              attributes {
                name
              }
            }
          }
          subtitles {
            data {
              id
              attributes {
                name
              }
            }
          }
          images {
            id
            tallBanner
            tallThumbnail
            wideThumbnail
            wideBanner
            logo
          }
        }
      }
    }
  }
`

export default function useGetShow(id: string | undefined) {
  const { loading, error, data } = useQuery<ShowQuery>(getShow, {
    variables: {
      id,
    },
    skip: !id,
  })

  return {
    data,
    error,
    loading,
  }
}
