import { Fragment, useState } from "react";

export default function Table_post() {
  return (
    <Fragment>
      <div className="overflow-x-auto m-10">
        <table className="table table-compact w-full">
          <thead>
            <tr className="hover">
              <th></th>
              <th>Country</th>
              <th>Cases</th>
              <th>recovered</th>
              <th>Death</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
            </tr>
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>United States</td>
              <td>12/5/2020</td>
            </tr>
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Carroll Group</td>
              <td>China</td>
              <td>8/15/2020</td>
            </tr>
            <tr className="hover">
              <th>4</th>
              <td>Marjy Ferencz</td>
              <td>Office Assistant I</td>
              <td>Rowe-Schoen</td>
              <td>Russia</td>
              <td>3/25/2021</td>
            </tr>
            <tr className="hover">
              <th>5</th>
              <td>Yancy Tear</td>
              <td>Community Outreach Specialist</td>
              <td>Wyman-Ledner</td>
              <td>Brazil</td>
              <td>5/22/2020</td>
            </tr>
            <tr className="hover">
              <th>6</th>
              <td>Irma Vasilik</td>
              <td>Editor</td>
              <td>Wiza, Bins and Emard</td>
              <td>Venezuela</td>
              <td>12/8/2020</td>
            </tr>
            <tr className="hover">
              <th>7</th>
              <td>Meghann Durtnal</td>
              <td>Staff Accountant IV</td>
              <td>Schuster-Schimmel</td>
              <td>Philippines</td>
              <td>2/17/2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
