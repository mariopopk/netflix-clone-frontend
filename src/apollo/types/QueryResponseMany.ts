// Base Plural
type QueryResponseMany<QueryKeyPlural extends string, ResponseAttributes> = {
  [key in QueryKeyPlural]?: {
    data?: {
      id?: string;
      attributes?: ResponseAttributes;
    }[];
  };
};

export default QueryResponseMany;
