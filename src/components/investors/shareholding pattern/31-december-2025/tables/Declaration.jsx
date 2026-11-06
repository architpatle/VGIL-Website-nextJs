import React from "react";

const DECLARATION_DATA = [
  {
    srNo: 1,
    particular:
      "Whether the Listed Entity has issued any partly paid up shares?",
    yesNo: "No",
    promoter: "No",
    publicShareholder: "No",
    nonPromoter: "No",
  },
  {
    srNo: 2,
    particular:
      "Whether the Listed Entity has issued any Convertible Securities ?",
    yesNo: "No",
    promoter: "No",
    publicShareholder: "No",
    nonPromoter: "No",
  },
  {
    srNo: 3,
    particular:
      "Whether the Listed Entity has issued any Warrants ?",
    yesNo: "No",
    promoter: "No",
    publicShareholder: "No",
    nonPromoter: "No",
  },
  {
    srNo: 4,
    particular:
      "Whether Listed Entity has granted any ESOPs, which are outstanding?",
    yesNo: "No",
    promoter: "No",
    publicShareholder: "No",
    nonPromoter: "No",
  },
  {
    srNo: 5,
    particular:
      "Whether the Listed Entity has any shares against which depository receipts are issued?",
    yesNo: "No",
    promoter: "No",
    publicShareholder: "No",
    nonPromoter: "No",
  },
  {
    srNo: 6,
    particular:
      "Whether the Listed Entity has any shares in locked-in?",
    yesNo: "Yes",
    promoter: "Yes",
    publicShareholder: "Yes",
    nonPromoter: "No",
  },
  {
    srNo: 7,
    particular:
      'Whether any shares held by promoters are encumbered under "Pledged"?',
    yesNo: "No",
    promoter: "No",
    publicShareholder: "",
    nonPromoter: "",
  },
  {
    srNo: 8,
    particular:
      'Whether any shares held by promoters are encumbered under "Non-Disposal Undertaking"?',
    yesNo: "No",
    promoter: "No",
    publicShareholder: "",
    nonPromoter: "",
  },
  {
    srNo: 9,
    particular:
      "Whether any shares held by promoters are encumbered, other than by way of Pledge or NDU, if any?",
    yesNo: "No",
    promoter: "No",
    publicShareholder: "",
    nonPromoter: "",
  },
  {
    srNo: 10,
    particular:
      "Whether company has equity shares with differential voting rights?",
    yesNo: "No",
    promoter: "No",
    publicShareholder: "No",
    nonPromoter: "No",
  },
  {
    srNo: 11,
    particular:
      "Whether the listed entity has any significant beneficial owner?",
    yesNo: "No",
    promoter: "",
    publicShareholder: "",
    nonPromoter: "",
  },
];

function Declaration() {
  return (
    <div className="shareholding-table-container">

      <table className="shareholding-information-table declaration-table">

        <thead>

          {/* TABLE TITLE */}
          <tr>
            <th colSpan="6">
              Declaration
            </th>
          </tr>

          {/* COLUMN HEADINGS */}
          <tr>
            <th>Sr. No.</th>

            <th>Particular</th>

            <th>Yes/No</th>

            <th>
              Promoter and
              <br />
              Promoter Group
            </th>

            <th>
              Public
              <br />
              shareholder
            </th>

            <th>
              Non Promoter-
              <br />
              Non Public
            </th>
          </tr>

        </thead>

        <tbody>

          {DECLARATION_DATA.map((item) => (
            <tr key={item.srNo}>

              <td>{item.srNo}</td>

              <td>{item.particular}</td>

              <td>{item.yesNo}</td>

              <td>{item.promoter}</td>

              <td>{item.publicShareholder}</td>

              <td>{item.nonPromoter}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Declaration;