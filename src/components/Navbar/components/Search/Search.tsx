import { FormExpand } from "@mariopopk/react-lightning";
import { UilSearch } from "@iconscout/react-unicons";
// import { useState } from "react";

export default function Search() {
  // const [query, setQuery] = useState("");

  return (
    <>
      <FormExpand displayLabel={<UilSearch color="white" />} label="Search" />
    </>
  );
}
