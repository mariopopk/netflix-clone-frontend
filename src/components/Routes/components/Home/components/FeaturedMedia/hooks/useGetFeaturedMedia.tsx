import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ShowQuery from "../../../../../../../apollo/types/Show/ShowQuery";
import ShowsQuery from "../../../../../../../apollo/types/Show/ShowsQuery";

const getShows = gql`
  query getShows {
    shows(pagination: { pageSize: 50 }) {
      data {
        id
      }
    }
  }
`;

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
`;

export default function useGetFeaturedMedia() {
  const [randomId, setRandomId] = useState<string | undefined>();

  const {
    data: showsData,
    loading: showsLoading,
    error: showsError,
  } = useQuery<ShowsQuery>(getShows, {
    skip: !!randomId,
  });

  const {
    loading: showLoading,
    error: showError,
    data: showData,
  } = useQuery<ShowQuery>(getShow, {
    variables: {
      id: randomId,
    },
    skip: !randomId,
  });

  useEffect(() => {
    if (showsData?.shows?.data?.length) {
      const randomIndex = Math.ceil(
        Math.random() * showsData.shows.data.length
      );
      setRandomId(showsData.shows.data[randomIndex].id);
    }
  }, [showsData]);

  console.log(
    showsData,
    showsError,
    showsLoading,
    showData,
    showError,
    showLoading
  );

  return {
    data: showData,
    error: showsError || showError,
    loading: showLoading || showsLoading,
  };
}
