import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

type dataType = {
  [key: string]: any;
};

export default function Table_card({
  dataCountry,
  search,
  setTest,
  test,
}: dataType) {
  const [selected, setSelected] = useState("");
  const countryEncode = btoa(dataCountry.country);
  const searchEncode = btoa(search);
  const [check, setCheck] = useState(false);

  const onClick = () => {
    if (check) {
      let x = [dataCountry.country, ...test];
      x = x.filter((country) => country != dataCountry.country);
      setTest(x);
      setCheck(false);
    } else {
      const x = [dataCountry.country, ...test];
      setTest(x);
      setCheck(true);
    }
  };

  return (
    <>
      <tr className="hover">
        <th></th>
        <td>
          {test.length > 2 ? (
            test.includes(dataCountry.country) ? (
              <input
                type="checkbox"
                value={dataCountry.country}
                onClick={onClick}
              />
            ) : (
              <></>
            )
          ) : (
            <input
              type="checkbox"
              value={dataCountry.country}
              onClick={onClick}
            />
          )}
        </td>
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
