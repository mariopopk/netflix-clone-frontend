import { useQuery, gql, ApolloError } from "@apollo/client";
import GenresQuery from "../../../../../../../apollo/types/Genre/GenresQuery";

const getCarouselShowData = gql`
  query {
    genres {
      data {
        id
      }
    }
  }
`;

export default function useGetHomeCategoryIds(): {
  error?: ApolloError;
  loading: boolean;
  data?: GenresQuery;
} {
  const { loading, error, data } = useQuery<GenresQuery>(getCarouselShowData);
  return {
    error,
    loading,
    data,
  };
}
