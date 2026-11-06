import React from "react";

const SHAREHOLDING_DATA = [
  // =========================================================
  // TABLE II - PROMOTER & PROMOTER GROUP
  // =========================================================

  {
    type: "section",
    category: "A",
    title:
      "Table II - Statement showing shareholding pattern of the Promoter and Promoter Group",
  },

  {
    type: "subSection",
    category: "(1)",
    name: "Indian",
  },

  {
    type: "data",
    category: "(a)",
    name: "Individuals/Hindu undivided Family",
    shareholders: "5",
    fullyPaid: "16164204",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "16164204",
    shareholding: "65",
    votingClassX: "16164204",
    votingClassY: "",
    votingTotal: "16164204",
    votingPercentage: "65",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "16164204",
  },

  {
    type: "subtotal",
    category: "Sub-Total (A) (1)",
    name: "",
    shareholders: "5",
    fullyPaid: "16164204",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "16164204",
    shareholding: "65",
    votingClassX: "16164204",
    votingClassY: "",
    votingTotal: "16164204",
    votingPercentage: "65",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "16164204",
  },

  {
    type: "subSection",
    category: "(2)",
    name: "Foreign",
  },

  {
    type: "total",
    category:
      "Total Shareholding of Promoter and Promoter Group (A)=(A)(1)+(A)(2)",
    name: "",
    shareholders: "5",
    fullyPaid: "16164204",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "16164204",
    shareholding: "65",
    votingClassX: "16164204",
    votingClassY: "",
    votingTotal: "16164204",
    votingPercentage: "65",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "16164204",
  },

  // =========================================================
  // TABLE III - PUBLIC SHAREHOLDER
  // =========================================================

  {
    type: "section",
    category: "B",
    title:
      "Table III - Statement showing shareholding pattern of the Public shareholder",
  },

  {
    type: "subSection",
    category: "(1)",
    name: "Institutions (Domestic)",
  },

  {
    type: "data",
    category: "(c)",
    name: "Alternate Investment Funds",
    shareholders: "4",
    fullyPaid: "300000",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "300000",
    shareholding: "1.21",
    votingClassX: "300000",
    votingClassY: "",
    votingTotal: "300000",
    votingPercentage: "1.21",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "300000",
  },

  {
    type: "data",
    category: "(i)",
    name: "NBFCs registered with RBI",
    shareholders: "1",
    fullyPaid: "71000",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "71000",
    shareholding: "0.29",
    votingClassX: "71000",
    votingClassY: "",
    votingTotal: "71000",
    votingPercentage: "0.29",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "71000",
  },

  {
    type: "data",
    category: "(j)",
    name: "Other Financial Institutions",
    shareholders: "1",
    fullyPaid: "13000",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "13000",
    shareholding: "0.05",
    votingClassX: "13000",
    votingClassY: "",
    votingTotal: "13000",
    votingPercentage: "0.05",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "13000",
  },

  {
    type: "subtotal",
    category: "Sub-Total (B) (1)",
    name: "",
    shareholders: "6",
    fullyPaid: "384000",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "384000",
    shareholding: "1.54",
    votingClassX: "384000",
    votingClassY: "",
    votingTotal: "384000",
    votingPercentage: "1.54",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "384000",
  },

  {
    type: "subSection",
    category: "(2)",
    name: "Institutions (Foreign)",
  },

  {
    type: "data",
    category: "(d)",
    name: "Foreign Portfolio Investors Category I",
    shareholders: "4",
    fullyPaid: "278000",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "278000",
    shareholding: "1.12",
    votingClassX: "278000",
    votingClassY: "",
    votingTotal: "278000",
    votingPercentage: "1.12",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "278000",
  },

  {
    type: "subtotal",
    category: "Sub-Total (B) (2)",
    name: "",
    shareholders: "4",
    fullyPaid: "278000",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "278000",
    shareholding: "1.12",
    votingClassX: "278000",
    votingClassY: "",
    votingTotal: "278000",
    votingPercentage: "1.12",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "278000",
  },

  {
    type: "subSection",
    category: "(3)",
    name: "Central Government / State Government(s)",
  },

  {
    type: "subSection",
    category: "(4)",
    name: "Non-institutions",
  },

  {
    type: "data",
    category: "(g)",
    name: "Resident Individuals holding nominal share capital up to Rs. 2 lakhs",
    shareholders: "1351",
    fullyPaid: "3314137",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "3314137",
    shareholding: "13.33",
    votingClassX: "3314137",
    votingClassY: "",
    votingTotal: "3314137",
    votingPercentage: "13.33",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "3314137",
  },

  {
    type: "data",
    category: "(h)",
    name: "Resident Individuals holding nominal share capital in excess of Rs. 2 lakhs",
    shareholders: "55",
    fullyPaid: "2674009",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "2674009",
    shareholding: "10.75",
    votingClassX: "2674009",
    votingClassY: "",
    votingTotal: "2674009",
    votingPercentage: "10.75",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "2674009",
  },

  {
    type: "data",
    category: "(i)",
    name: "Non Resident Indians (NRIs)",
    shareholders: "56",
    fullyPaid: "381124",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "381124",
    shareholding: "1.53",
    votingClassX: "381124",
    votingClassY: "",
    votingTotal: "381124",
    votingPercentage: "1.53",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "381124",
  },

  {
    type: "data",
    category: "(k)",
    name: "Foreign Companies",
    shareholders: "1",
    fullyPaid: "188013",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "188013",
    shareholding: "0.76",
    votingClassX: "188013",
    votingClassY: "",
    votingTotal: "188013",
    votingPercentage: "0.76",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "188013",
  },

  {
    type: "data",
    category: "(l)",
    name: "Bodies Corporate",
    shareholders: "49",
    fullyPaid: "591369",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "591369",
    shareholding: "2.38",
    votingClassX: "591369",
    votingClassY: "",
    votingTotal: "591369",
    votingPercentage: "2.38",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "591369",
  },

  {
    type: "data",
    category: "(m)",
    name: "Any Other (specify)",
    shareholders: "91",
    fullyPaid: "893779",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "893779",
    shareholding: "3.59",
    votingClassX: "893779",
    votingClassY: "",
    votingTotal: "893779",
    votingPercentage: "3.59",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "893779",
  },

  {
    type: "subtotal",
    category: "Sub-Total (B) (4)",
    name: "",
    shareholders: "1603",
    fullyPaid: "8042431",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "8042431",
    shareholding: "32.34",
    votingClassX: "8042431",
    votingClassY: "",
    votingTotal: "8042431",
    votingPercentage: "32.34",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "8042431",
  },

  {
    type: "total",
    category:
      "Total Public Shareholding (B)=(B)(1)+(B)(2)+(B)(3)+(B)(4)",
    name: "",
    shareholders: "1613",
    fullyPaid: "8704431",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "8704431",
    shareholding: "35",
    votingClassX: "8704431",
    votingClassY: "",
    votingTotal: "8704431",
    votingPercentage: "35",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "8704431",
  },

  // =========================================================
  // TABLE IV - NON PROMOTER - NON PUBLIC
  // =========================================================

  {
    type: "section",
    category: "C",
    title:
      "Table IV - Statement showing shareholding pattern of the Non Promoter- Non Public shareholder",
  },

  {
    type: "total",
    category: "Total ( A+B+C2 )",
    name: "",
    shareholders: "1618",
    fullyPaid: "24868635",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "24868635",
    shareholding: "100",
    votingClassX: "24868635",
    votingClassY: "",
    votingTotal: "24868635",
    votingPercentage: "100",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "24868635",
  },

  {
    type: "total",
    category: "Total ( A+B+C )",
    name: "",
    shareholders: "1618",
    fullyPaid: "24868635",
    partlyPaid: "",
    underlyingDR: "",
    totalShares: "24868635",
    shareholding: "100",
    votingClassX: "24868635",
    votingClassY: "",
    votingTotal: "24868635",
    votingPercentage: "100",
    convertibleShares: "",
    warrants: "",
    esop: "",
    totalUnderlying: "",
    fullyDiluted: "24868635",
  },
];

function PromoterPublicShareholding() {
  return (
    <div className="summary-statement-wrapper promoter-public-wrapper">
      {/* Fixed title */}
      <div className="summary-statement-title">
        Table II - Statement showing shareholding pattern of the Promoter and
        Promoter Group
      </div>

      {/* Scrollable table */}
      <div className="summary-statement-scroll">
        <table className="summary-statement-table promoter-public-table">
          <thead>
            {/* =====================================================
                HEADER ROW 1
            ===================================================== */}
            <tr>
              <th rowSpan="3">
                Sr. No.
              </th>

              <th rowSpan="3">
                Category &amp;
                <br />
                Name of the
                <br />
                Shareholders (I)
              </th>

              <th rowSpan="3">
                Nos. Of
                <br />
                shareholders
                <br />
                (III)
              </th>

              <th rowSpan="3">
                No. of fully
                <br />
                paid up equity
                <br />
                shares
                <br />
                held (IV)
              </th>

              <th rowSpan="3">
                No. Of
                <br />
                Partly paid-
                <br />
                up equity
                <br />
                shares
                <br />
                held
                <br />
                (V)
              </th>

              <th rowSpan="3">
                No. Of
                <br />
                shares
                <br />
                underlying
                <br />
                Depository
                <br />
                Receipts
                <br />
                (VI)
              </th>

              <th rowSpan="3">
                Total nos.
                <br />
                shares held
                <br />
                (VII) = (IV)+
                <br />
                (V)+(VI)
              </th>

              <th rowSpan="3">
                Shareholding
                <br />
                as a % of
                <br />
                total no. of
                <br />
                shares
                <br />
                (calculated
                <br />
                as per SCRR,
                <br />
                1957) (VIII)
                <br />
                As a % of
                <br />
                (A+B+C2)
              </th>

              <th colSpan="4">
                Number of Voting Rights held in each
                <br />
                class of securities (IX)
              </th>

              

              <th rowSpan="3">
                No. Of Shares
                <br />
                Underlying
                <br />
                Outstanding
                <br />
                convertible
                <br />
                securities
                <br />
                (XA)
              </th>

              <th rowSpan="3">
                No. of Shares
                <br />
                Underlying
                <br />
                Outstanding
                <br />
                Warrants
                <br />
                (XB)
              </th>

              <th rowSpan="3">
                No. Of Shares
                <br />
                Underlying
                <br />
                Outstanding
                <br />
                ESOP Granted
                <br />
                (XC)
              </th>

              <th rowSpan="3">
                No. Of Shares
                <br />
                Underlying
                <br />
                Outstanding
                <br />
                convertible
                <br />
                securities,
                <br />
                Warrants
                <br />
                and ESOP
                <br />
                etc. (X)
                <br />
                =(XA+XB+XC)
              </th>

              <th rowSpan="3">
                Total No. of
                <br />
                shares on fully
                <br />
                diluted basis
                <br />
                (including
                <br />
                warrants,
                <br />
                ESOP,
                <br />
                Convertible
                <br />
                Securities
                <br />
                etc.) (XI)=
                <br />
                (VII+X)
              </th>
            </tr>

            {/* =====================================================
                HEADER ROW 2
            ===================================================== */}
            <tr>
              <th colSpan="3">
                No. of Voting (XIV) Rights
              </th>
              <th rowSpan="2">
                Total as a %
                <br />
                of Total
                <br />
                Voting rights
              </th>
            </tr>

            {/* =====================================================
                HEADER ROW 3
            ===================================================== */}
            <tr>
              <th>
                Class eg:
                <br />
                X
              </th>

              <th>
                Class
                <br />
                eg:Y
              </th>

              <th>
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {SHAREHOLDING_DATA.map((row, index) => {
              // ---------------------------------------------------
              // Section rows: A / B / C
              // ---------------------------------------------------
              if (row.type === "section") {
                return (
                  <tr
                    key={index}
                    className="table-section-row"
                  >
                    <td>{row.category}</td>

                    <td colSpan="16">
                      {row.title}
                    </td>
                  </tr>
                );
              }

              // ---------------------------------------------------
              // Sub-section rows
              // ---------------------------------------------------
              if (row.type === "subSection") {
                return (
                  <tr
                    key={index}
                    className="table-subsection-row"
                  >
                    <td>{row.category}</td>

                    <td colSpan="16">
                      {row.name}
                    </td>
                  </tr>
                );
              }

              // ---------------------------------------------------
              // Data / subtotal / total rows
              // ---------------------------------------------------
              return (
                <tr
                  key={index}
                  className={`table-data-row ${
                    row.type === "subtotal"
                      ? "table-subtotal-row"
                      : row.type === "total"
                      ? "table-total-row"
                      : ""
                  }`}
                >
                  {/* 1 */}
                  <td>{row.category}</td>

                  {/* 2 */}
                  <td>{row.name}</td>

                  {/* 3 */}
                  <td>{row.shareholders}</td>

                  {/* 4 */}
                  <td>{row.fullyPaid}</td>

                  {/* 5 */}
                  <td>{row.partlyPaid}</td>

                  {/* 6 */}
                  <td>{row.underlyingDR}</td>

                  {/* 7 */}
                  <td>{row.totalShares}</td>

                  {/* 8 */}
                  <td>{row.shareholding}</td>

                  {/* 9 */}
                  <td>{row.votingClassX}</td>

                  {/* 10 */}
                  <td>{row.votingClassY}</td>

                  {/* 11 */}
                  <td>{row.votingTotal}</td>

                  {/* 12 */}
                  <td>{row.votingPercentage}</td>

                  {/* 13 */}
                  <td>{row.convertibleShares}</td>

                  {/* 14 */}
                  <td>{row.warrants}</td>

                  {/* 15 */}
                  <td>{row.esop}</td>

                  {/* 16 */}
                  <td>{row.totalUnderlying}</td>

                  {/* 17 */}
                  <td>{row.fullyDiluted}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PromoterPublicShareholding;