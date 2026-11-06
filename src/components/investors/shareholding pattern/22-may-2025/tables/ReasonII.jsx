import React from "react";

const REASON_II_DATA = [
  {
    reason:
      "Reason for non compliance with minimum(25%) Public shareholding",
    remark: "",
  },
];

function ReasonII() {
  return (
    <div className="shareholding-table-container">
      <table className="shareholding-information-table remarks-table">
        <thead>
          <tr>
            <th colSpan="2">Reason II</th>
          </tr>
        </thead>

        <tbody>
          {REASON_II_DATA.map((item, index) => (
            <tr key={index}>
              <td>{item.reason}</td>
              <td>{item.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReasonII;