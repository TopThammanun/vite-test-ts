import { Fragment, useState } from "react";
import Card from "./Card";

export default function Card_post() {
  return (
    <Fragment>
      <div className="p-5 hide-card">
        <div className="grid md:grid-cols-2 grid-col-1 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Fragment>
  );
}
