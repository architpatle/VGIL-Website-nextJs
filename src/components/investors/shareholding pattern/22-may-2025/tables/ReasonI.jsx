import React from "react";

const REASON_I_DATA = [
  {
    reason:
      "Disclosure of notes in case of promoter holding in dematerialised form is less than 100 percentage",
    remark: "",
  },
];

function ReasonI() {
  return (
    <div className="shareholding-table-container">
      <table className="shareholding-information-table remarks-table">
        <thead>
          <tr>
            <th colSpan="2">Reason I</th>
          </tr>
        </thead>

        <tbody>
          {REASON_I_DATA.map((item, index) => (
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

export default ReasonI;