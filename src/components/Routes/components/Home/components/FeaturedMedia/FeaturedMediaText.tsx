import { Typography } from "@mariopopk/react-lightning";
import { Keyword } from "../../../../../../apollo/types/Keyword/KeywordQuery";

interface MediaTextProps {
  description?: string;
  keywords?: Keyword[];
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
          {keywords?.map(({ name, id }, i) => {
            const firstKeyword = i === 0;
            if (firstKeyword) return <span key={id}>{name}</span>;
            return <span key={id}> • {name}</span>;
          })}
        </Typography>
      </div>
    </>
  );
}
