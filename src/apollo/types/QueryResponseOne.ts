// Base Singular
type QueryResponseOne<QueryKeySingular extends string, ResponseAttributes> = {
  [key in QueryKeySingular]?: {
    data?: {
      id?: string;
      attributes?: ResponseAttributes;
    };
  };
};

export default QueryResponseOne;
