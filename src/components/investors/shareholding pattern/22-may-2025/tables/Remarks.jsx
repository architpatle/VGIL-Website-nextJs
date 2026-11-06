import React from "react";

const REMARKS_DATA = [
  {
    particular: "Disclosure of notes on shareholding pattern",
    remark: "",
  },
  {
    particular:
      "Disclosure of notes on shareholding pattern for company remarks explanatory",
    remark: "",
  },
  {
    particular: "Exchange Remark",
    remark:
      "Kindly add all the promoter/promoter group mentioned in the prospectus even if the holding is zero",
  },
  {
    particular: "Revision Remark",
    remark:
      "updated all the names of promoter and promoter group mentioned in the prospectus even if the holding is Zero",
  },
];

function Remarks() {
  return (
    <div className="shareholding-table-container">
      <table className="shareholding-information-table remarks-table">
        <thead>
          <tr>
            <th colSpan="2">Remarks</th>
          </tr>
        </thead>

        <tbody>
          {REMARKS_DATA.map((item, index) => (
            <tr key={index}>
              <td>{item.particular}</td>
              <td>{item.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Remarks;