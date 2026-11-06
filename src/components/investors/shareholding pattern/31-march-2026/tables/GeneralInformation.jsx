import React from "react";

const GENERAL_INFORMATION = [
  {
    label: "Scrip code",
    value: "000000",
  },
  {
    label: "NSE Symbol",
    value: "VGINFOTECH",
  },
  {
    label: "MSEI Symbol",
    value: "NOTLISTED",
  },
  {
    label: "ISIN",
    value: "INE0VRH01015",
  },
  {
    label: "Name of the company",
    value: "Virtual Galaxy Infotech Limited",
  },
  {
    label: "Whether company is SME",
    value: "Yes",
  },
  {
    label: "Class of Security",
    value: "Equity Shares",
  },
  {
    label: "Type of report",
    value: "Quarterly",
  },
  {
    label:
      "Quarter Ended / Half year ended/Date of Report (For Prelisting / Allotment)",
    value: "31-03-2026",
  },
  {
    label:
      "Date of allotment / extinguishment (in case Capital Restructuring selected) / Listing Date",
    value: "",
  },
  {
    label: "Shareholding pattern filed under",
    value: "Regulation 31 (1) (b)",
  },
  {
    label:
      "Whether the listed entity is Public Sector Undertaking (PSU)?",
    value: "No",
  },
];

function GeneralInformation() {
  return (
    <div className="shareholding-table-container">
      <table className="shareholding-information-table">
        <thead>
          <tr>
            <th colSpan="2">
              General information about company
            </th>
          </tr>
        </thead>

        <tbody>
          {GENERAL_INFORMATION.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneralInformation;