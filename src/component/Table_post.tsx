import Table_card from "./Table_card";
import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  useState,
  Dispatch,
  SetStateAction,
  Fragment,
} from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://covid-193.p.rapidapi.com/statistics",
        {
          headers: {
            "X-RapidAPI-Key":
              "30d4347d53mshea909afc5c11a04p151b38jsn9559ce24561b",
            "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
          },
        }
      );
      return data.response;
    },
  });
}

export default function Table_post() {
  const { isLoading, error, data, isFetching } = usePosts();
  const [searchParams] = useSearchParams();
  const [searchedVal, setSearchedVal] = useState(
    searchParams.get("search") ? atob(String(searchParams.get("search"))) : ""
  );

  if (isLoading) return <div>Loading ....</div>;

  return (
    <Fragment>
      <div className="form-control m-10">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            onChange={(e) => setSearchedVal(e.target.value)}
            value={searchedVal}
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto m-10 hide">
        <table className="table table-compact w-full">
          <thead>
            <tr className="hover">
              <th></th>
              <th>Country</th>
              <th>Cases</th>
              <th>New</th>
              <th>recovered</th>
              <th>Death</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {data.length > -1 ? (
              data
                .filter(
                  (row: any) =>
                    !searchedVal.length ||
                    row.country
                      .toString()
                      .toLowerCase()
                      .includes(searchedVal.toString().toLowerCase())
                )
                .map((x: object) => (
                  <Table_card dataCountry={x} search={searchedVal} />
                ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
