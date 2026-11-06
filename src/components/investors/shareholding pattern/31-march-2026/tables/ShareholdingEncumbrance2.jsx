import React from "react";

const SHAREHOLDING_ENCUMBRANCE_DATA = [
  // ---------------------------------------------------------
  // PROMOTER & PROMOTER GROUP
  // ---------------------------------------------------------
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
    shareholding: "65",
    lockedShares: "16164204",
    lockedPercentage: "100",
    dematerialized: "16164204",
  },

  {
    type: "subtotal",
    category: "Sub-Total (A)(1)",
    shareholding: "65",
    lockedShares: "16164204",
    lockedPercentage: "100",
    dematerialized: "16164204",
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
    shareholding: "65",
    lockedShares: "16164204",
    lockedPercentage: "100",
    dematerialized: "16164204",
  },

  // ---------------------------------------------------------
  // PUBLIC SHAREHOLDER
  // ---------------------------------------------------------
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
    shareholding: "1.21",
    lockedShares: "0",
    lockedPercentage: "0",
    dematerialized: "300000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(i)",
    name: "NBFCs registered with RBI",
    shareholding: "0.29",
    lockedShares: "0",
    lockedPercentage: "0",
    dematerialized: "71000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(j)",
    name: "Other Financial Institutions",
    shareholding: "0.05",
    lockedShares: "0",
    lockedPercentage: "0",
    dematerialized: "13000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "subtotal",
    category: "Sub-Total (B)(1)",
    shareholding: "1.54",
    lockedShares: "0",
    lockedPercentage: "0",
    dematerialized: "384000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
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
    shareholding: "1.12",
    lockedShares: "0",
    lockedPercentage: "0",
    dematerialized: "278000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "subtotal",
    category: "Sub-Total (B)(2)",
    shareholding: "1.12",
    lockedShares: "0",
    lockedPercentage: "0",
    dematerialized: "278000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
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
    shareholding: "13.33",
    lockedShares: "710137",
    lockedPercentage: "21.43",
    dematerialized: "3314137",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(h)",
    name: "Resident Individuals holding nominal share capital in excess of Rs. 2 lakhs",
    shareholding: "10.75",
    lockedShares: "756009",
    lockedPercentage: "28.27",
    dematerialized: "2674009",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(i)",
    name: "Non Resident Indians (NRIs)",
    shareholding: "1.53",
    lockedShares: "133124",
    lockedPercentage: "34.93",
    dematerialized: "381124",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(k)",
    name: "Foreign Companies",
    shareholding: "0.76",
    lockedShares: "188013",
    lockedPercentage: "100",
    dematerialized: "188013",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(l)",
    name: "Bodies Corporate",
    shareholding: "2.38",
    lockedShares: "177369",
    lockedPercentage: "29.99",
    dematerialized: "591369",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(m)",
    name: "Any Other (specify)",
    shareholding: "3.59",
    lockedShares: "239779",
    lockedPercentage: "26.83",
    dematerialized: "893779",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "subtotal",
    category: "Sub-Total (B)(4)",
    shareholding: "32.34",
    lockedShares: "2204431",
    lockedPercentage: "27.41",
    dematerialized: "8042431",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "total",
    category:
      "Total Public Shareholding (B)=(B)(1)+(B)(2)+(B)(3)+(B)(4)",
    shareholding: "35",
    lockedShares: "2204431",
    lockedPercentage: "25.33",
    dematerialized: "8704431",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  // ---------------------------------------------------------
  // NON-PROMOTER - NON-PUBLIC
  // ---------------------------------------------------------
  {
    type: "section",
    category: "C",
    title:
      "Table IV - Statement showing shareholding pattern of the Non Promoter- Non Public shareholder",
  },

  {
    type: "total",
    category: "Total (A+B+C2)",
    shareholding: "100",
    lockedShares: "18368635",
    lockedPercentage: "73.86",
    dematerialized: "24868635",
  },

  {
    type: "total",
    category: "Total (A+B+C)",
    shareholding: "100",
    lockedShares: "18368635",
    lockedPercentage: "73.86",
    dematerialized: "24868635",
  },
];

function ShareholdingEncumbrance2() {
  return (
    <div className="summary-statement-wrapper promoter-public-wrapper">
      {/* Fixed title */}
      <div className="summary-statement-title">
        Table II - Statement showing shareholding pattern of the Promoter and
        Promoter Group
      </div>

      {/* Scrollable table area */}
      <div className="summary-statement-scroll">
        <table className="summary-statement-table promoter-public-table shareholding-encumbrance-table">
          <thead>
            <tr>
              <th rowSpan="3">Sr. No.</th>

              <th rowSpan="3">
                Category &amp; Name of the Shareholders (I)
              </th>

              <th rowSpan="3">
                Shareholding , as a % assuming full conversion of convertible
                securities ( as a percentage of diluted share capital) (XII)=
                (VII) + (X) As a % of (A+B+C2)
              </th>

              <th colSpan="2">Number of Locked in shares (XIII)</th>

              <th colSpan="2">Number of Shares pledged (XIV)</th>

              <th colSpan="2">Non-Disposal Undertaking (XV)</th>

              <th colSpan="2">Other encumbrances, if any (XVI)</th>

              <th colSpan="2">
                Total Number of Shares encumbered (XVII) = (XIV+XV+XVI)
              </th>

              <th rowSpan="3">
                Number of equity shares held in dematerialized form (XVIII)
              </th>

              <th colSpan="3">Sub-categorization of shares</th>
            </tr>

            <tr>
              <th>No. (a)</th>
              <th>As a % of total Shares held (b)</th>

              <th>No. (a)</th>
              <th>As a % of total Shares held (b)</th>

              <th>No. (a)</th>
              <th>As a % of total Shares held (b)</th>

              <th>No. (a)</th>
              <th>As a % of total Shares held (b)</th>

              <th>No. (a)</th>
              <th>As a % of total Shares held (b)</th>

              <th>Sub-category (i)</th>
              <th>Sub-category (ii)</th>
              <th>Sub-category (iii)</th>
            </tr>
          </thead>

          <tbody>
            {SHAREHOLDING_ENCUMBRANCE_DATA.map((row, index) => {
              // Section rows: A / B / C
              if (row.type === "section") {
                return (
                  <tr key={index} className="table-section-row">
                    <td>{row.category}</td>
                    <td colSpan="15">{row.title}</td>
                  </tr>
                );
              }

              // Sub-section rows: (1), (2), (3), (4)
              if (row.type === "subSection") {
                return (
                  <tr key={index} className="table-subsection-row">
                    <td>{row.category}</td>
                    <td colSpan="15">{row.name}</td>
                  </tr>
                );
              }

              // Normal / subtotal / total rows
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
                  {/* 1. Sr. No. */}
                  <td>{row.category}</td>

                  {/* 2. Category & Name */}
                  <td>{row.name}</td>

                  {/* 3. Shareholding % */}
                  <td>{row.shareholding}</td>

                  {/* 4. Locked shares - No. */}
                  <td>{row.lockedShares}</td>

                  {/* 5. Locked shares - % */}
                  <td>{row.lockedPercentage}</td>

                  {/* 6. Pledged - No. */}
                  <td>{row.pledgedShares}</td>

                  {/* 7. Pledged - % */}
                  <td>{row.pledgedPercentage}</td>

                  {/* 8. NDU - No. */}
                  <td>{row.nduShares}</td>

                  {/* 9. NDU - % */}
                  <td>{row.nduPercentage}</td>

                  {/* 10. Other encumbrances - No. */}
                  <td>{row.otherEncumbrances}</td>

                  {/* 11. Other encumbrances - % */}
                  <td>{row.otherEncumbrancesPercentage}</td>

                  {/* 12. Total encumbered - No. */}
                  <td>{row.totalEncumbered}</td>

                  {/* 13. Total encumbered - % */}
                  <td>{row.totalEncumberedPercentage}</td>

                  {/* 14. Dematerialized */}
                  <td>{row.dematerialized}</td>

                  {/* 15. Sub-category i */}
                  <td>{row.subCategory1}</td>

                  {/* 16. Sub-category ii */}
                  <td>{row.subCategory2}</td>

                  {/* 17. Sub-category iii */}
                  <td>{row.subCategory3}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShareholdingEncumbrance2;