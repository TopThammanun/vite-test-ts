import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";

type dataType = {
  [key: string]: any;
};

export default function DetailPages({ dataCountry }: dataType) {
  const { country } = useParams();
  const [searchParams] = useSearchParams();
  const [countryDecode, setCountryDecode] = useState(atob(String(country)));

  console.log(countryDecode);
  console.log(searchParams.get("search"));

  return (
    <>
      <div>
        <Link to={`/?search=${searchParams.get("search")}`}>
          <button>back</button>
        </Link>
      </div>
      <div>{countryDecode}</div>
    </>
  );
}
