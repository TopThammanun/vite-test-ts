import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

type dataType = {
  [key: string]: any;
};

export default function Table_card({ dataCountry, search }: dataType) {
  const countryEncode = btoa(dataCountry.country);
  const searchEncode = btoa(search);
  return (
    <>
      <tr className="hover">
        <th></th>
        <td>{dataCountry.country}</td>
        <td>{dataCountry.cases.total}</td>
        <td>{dataCountry.cases.new}</td>
        <td>{dataCountry.cases.recovered}</td>
        <td>{dataCountry.deaths.total}</td>
        <td>
          <Link to={`/detail/${countryEncode}?search=${searchEncode}`}>
            <button className="btn-sm btn-primary rounded-btn">view</button>
          </Link>
        </td>
      </tr>
    </>
  );
}
