import { FormExpand } from "@mariopopk/react-lightning";
import { UilSearch } from "@iconscout/react-unicons";
import { useState } from "react";
// import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <FormExpand
        displayLabel={<UilSearch color="white" />}
        label="Search"
        formProps={{
          onChange: handleOnChange,
          value: query,
        }}
      />
    </>
  );
}
