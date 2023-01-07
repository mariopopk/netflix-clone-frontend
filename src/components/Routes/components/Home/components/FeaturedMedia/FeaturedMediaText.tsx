import { Typography } from "@mariopopk/react-lightning";

interface MediaTextProps {
  description: string;
  keywords: string;
}

export default function FeaturedMediaText({
  description,
  keywords,
}: MediaTextProps) {
  const keywordList = keywords.split(",");
  return (
    <>
      <div className="d-none d-xl-block">
        <Typography variant="subtitle" color="light" fontWeight="normal">
          {description}
        </Typography>
      </div>

      <div className="d-xl-none d-xl-none">
        <Typography variant="base" color="light" fontWeight="normal">
          {keywordList.map((keyword, i) => {
            const firstKeyword = i === 0;
            if (firstKeyword) return <span key={keyword}>{keyword}</span>;
            return <span key={keyword}> • {keyword}</span>;
          })}
        </Typography>
      </div>
    </>
  );
}
