import { FormExpand } from "library";
import { UilSearch } from "@iconscout/react-unicons";

export default function Search() {
  return (
    <>
      <div>
        <FormExpand displayLabel={<UilSearch color="white" />} label="Search" />
      </div>
    </>
  );
}
