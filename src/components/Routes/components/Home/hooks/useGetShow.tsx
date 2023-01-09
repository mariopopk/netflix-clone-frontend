import { useQuery, gql, ApolloError } from "@apollo/client";
import QueryResponseOne from "../../../../../apollo/types/QueryResponseOne";
import { ShowResponse } from "../../../../../apollo/types/Show/Show";
import { Show } from "../../../../../types/Show";

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
              attributes {
                name
              }
            }
          }
          starring {
            data {
              attributes {
                name
              }
            }
          }
          cast {
            data {
              attributes {
                name
              }
            }
          }
          genres {
            data {
              attributes {
                name
              }
            }
          }
          keywords {
            data {
              attributes {
                name
              }
            }
          }
          audio {
            data {
              attributes {
                name
              }
            }
          }
          subtitles {
            data {
              attributes {
                name
              }
            }
          }
          images {
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
`;

interface QueryResponse extends QueryResponseOne<"show", ShowResponse> {}

// TODO: V2 - redo
export default function useGetShow(id: string | number): {
  data?: Show;
  loading?: boolean;
  error?: ApolloError;
} {
  const { loading, error, data } = useQuery<QueryResponse>(getShow, {
    variables: {
      id,
    },
  });
  //   data[0].attributes.name
  console.log("hi");

  return {
    loading,
    error,
    data: {
      id: data?.show?.data?.id,
      name: data?.show?.data?.attributes?.name,
      images: data?.show?.data?.attributes?.images,
      description: data?.show?.data?.attributes?.description,
      releaseYear: data?.show?.data?.attributes?.releaseYear,
      maturityLevel: data?.show?.data?.attributes?.maturityLevel,
      keywords: data?.show?.data?.attributes?.keywords?.data?.map((item) => {
        return item?.attributes?.name!;
      }),
    },
  };
}
