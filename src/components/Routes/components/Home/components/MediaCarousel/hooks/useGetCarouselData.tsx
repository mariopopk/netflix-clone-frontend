import { useQuery, gql, ApolloError } from "@apollo/client";
import QueryResponseGenres from "../../../../../../../apollo/types/QueryResponseGenres";
import { MediaCarouselData } from "../MediaCarouselItem";

const getCarouselShowData = gql`
  query getCarouselShowData($categoryName: String!) {
    genres(filters: { name: { eq: $categoryName } }) {
      data {
        attributes {
          name
          shows {
            data {
              id
              attributes {
                name
                images {
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

interface Genre {
  name?: string;
  shows?: MediaCarouselData[];
}

export default function useGetCarouselData(categoryName: string): {
  error?: ApolloError;
  loading: boolean;
  data: Genre;
} {
  const { loading, error, data } = useQuery<QueryResponseGenres>(
    getCarouselShowData,
    {
      variables: {
        categoryName,
      },
    }
  );

  // This hook looks for ONE category only, so index 0 can be safely hardcoded
  const result = {
    name: data?.genres?.data?.[0]?.attributes?.name,

    shows: data?.genres?.data?.[0]?.attributes?.shows?.data?.map((item) => {
      return {
        id: item?.id,
        name: item?.attributes?.name,
        images: item?.attributes?.images,
      };
    }),
  };

  return {
    error,
    loading,
    data: result,
  };
}
