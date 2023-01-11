import { Typography } from "@mariopopk/react-lightning";
import KeywordsQuery from "../../../../../../apollo/types/Keyword/KeywordsQuery";

interface MediaTextProps {
  description?: string;
  keywords?: KeywordsQuery["keywords"];
}

export default function FeaturedMediaText({
  description,
  keywords,
}: MediaTextProps) {
  return (
    <>
      <div className="d-none d-xl-block">
        <Typography variant="subtitle" color="light" fontWeight="normal">
          {description}
        </Typography>
      </div>

      <div className="d-xl-none d-xl-none">
        <Typography variant="base" color="light" fontWeight="normal">
          {keywords?.data?.map(({ id, attributes }, i) => {
            const firstKeyword = i === 0;
            if (firstKeyword) return <span key={id}>{attributes?.name}</span>;
            return <span key={id}> • {attributes?.name}</span>;
          })}
        </Typography>
      </div>
    </>
  );
}
