import { useQuery, gql, ApolloError } from "@apollo/client";
import GenreQuery from "../../../../../../../apollo/types/Genre/GenreQuery";

const getCarouselShowData = gql`
  query getCarouselShowData($id: ID!) {
    genre(id: $id) {
      data {
        id
        attributes {
          name
          shows {
            data {
              id
              attributes {
                name
                images {
                  id
                  wideBanner
                  wideThumbnail
                  tallBanner
                  tallThumbnail
                  logo
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function useGetCarouselData(id: string): {
  error?: ApolloError;
  loading: boolean;
  data?: GenreQuery;
} {
  const { loading, error, data } = useQuery<GenreQuery>(getCarouselShowData, {
    variables: {
      id,
    },
  });

  return {
    error,
    loading,
    data,
  };
}
