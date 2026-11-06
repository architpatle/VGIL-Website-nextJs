import React from "react";

const SHAREHOLDING_ENCUMBRANCE_DATA = [
  // =========================
  // A - PROMOTER
  // =========================

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
    shareholding: "66.67",
    lockedInShares: "16161636",
    lockedInPercentage: "99.98",
    dematerializedShares: "16164204",
  },

  {
    type: "subtotal",
    category: "Sub-Total (A)(1)",
    name: "",
    shareholding: "66.67",
    lockedInShares: "16161636",
    lockedInPercentage: "99.98",
    dematerializedShares: "16164204",
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
    shareholding: "66.67",
    lockedInShares: "16161636",
    lockedInPercentage: "99.98",
    dematerializedShares: "16164204",
  },

  // =========================
  // B - PUBLIC
  // =========================

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
    shareholding: "0.8",
    dematerializedShares: "209000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(i)",
    name: "NBFCs registered with RBI",
    shareholding: "0.27",
    dematerializedShares: "71000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(j)",
    name: "Other Financial Institutions",
    shareholding: "0.05",
    dematerializedShares: "13000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "subtotal",
    category: "Sub-Total (B)(1)",
    name: "",
    shareholding: "1.12",
    dematerializedShares: "293000",
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
    shareholding: "1.06",
    dematerializedShares: "278000",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "subtotal",
    category: "Sub-Total (B)(2)",
    name: "",
    shareholding: "1.06",
    dematerializedShares: "278000",
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
    shareholding: "13.48",
    dematerializedShares: "3518632",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(h)",
    name: "Resident Individuals holding nominal share capital in excess of Rs. 2 lakhs",
    shareholding: "10.55",
    dematerializedShares: "2755514",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(i)",
    name: "Non Resident Indians (NRIs)",
    shareholding: "1.7",
    dematerializedShares: "444124",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(k)",
    name: "Foreign Companies",
    shareholding: "0.72",
    dematerializedShares: "188013",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(l)",
    name: "Bodies Corporate",
    shareholding: "1.34",
    dematerializedShares: "350369",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "data",
    category: "(m)",
    name: "Any Other (specify)",
    shareholding: "3.36",
    dematerializedShares: "876779",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "subtotal",
    category: "Sub-Total (B)(4)",
    name: "",
    shareholding: "31.15",
    dematerializedShares: "8133431",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  {
    type: "total",
    category:
      "Total Public Shareholding (B)=(B)(1)+(B)(2)+(B)(3)+(B)(4)",
    name: "",
    shareholding: "33.33",
    dematerializedShares: "8704431",
    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },

  // =========================
  // C - NON PROMOTER / NON PUBLIC
  // =========================

  {
    type: "section",
    category: "C",
    title:
      "Table IV - Statement showing shareholding pattern of the Non Promoter- Non Public shareholder",
  },

  {
    type: "total",
    category: "Total (A+B+C2)",
    name: "",
    shareholding: "100",
    lockedInShares: "16161636",
    lockedInPercentage: "64.99",
    dematerializedShares: "24868635",
  },

  {
    type: "total",
    category: "Total (A+B+C)",
    name: "",
    shareholding: "100",
    lockedInShares: "16161636",
    lockedInPercentage: "64.99",
    dematerializedShares: "24868635",
  },
];

function ShareholdingEncumbrance2() {
  const renderBodyRow = (row) => {
    if (row.type === "section") {
      return (
        <tr className="table-section-row">
          <td>{row.category}</td>
          <td colSpan="16">{row.title}</td>
        </tr>
      );
    }

    if (row.type === "subSection") {
      return (
        <tr className="table-subsection-row">
          <td>{row.category}</td>
          <td colSpan="16">{row.name}</td>
        </tr>
      );
    }

    return (
      <tr
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

        {/* 3. Shareholding % assuming full conversion */}
        <td>{row.shareholding}</td>

        {/* 4. Locked-in shares - No. */}
        <td>{row.lockedInShares}</td>

        {/* 5. Locked-in shares - % */}
        <td>{row.lockedInPercentage}</td>

        {/* 6. Pledged shares - No. */}
        <td>{row.pledgedShares}</td>

        {/* 7. Pledged shares - % */}
        <td>{row.pledgedPercentage}</td>

        {/* 8. NDU - No. */}
        <td>{row.nonDisposalShares}</td>

        {/* 9. NDU - % */}
        <td>{row.nonDisposalPercentage}</td>

        {/* 10. Other encumbrances - No. */}
        <td>{row.otherEncumbranceShares}</td>

        {/* 11. Other encumbrances - % */}
        <td>{row.otherEncumbrancePercentage}</td>

        {/* 12. Total encumbered shares - No. */}
        <td>{row.totalEncumberedShares}</td>

        {/* 13. Total encumbered shares - % */}
        <td>{row.totalEncumberedPercentage}</td>

        {/* 14. Dematerialized shares */}
        <td>{row.dematerializedShares}</td>

        {/* 15. Sub-category (i) */}
        <td>{row.subCategory1}</td>

        {/* 16. Sub-category (ii) */}
        <td>{row.subCategory2}</td>

        {/* 17. Sub-category (iii) */}
        <td>{row.subCategory3}</td>
      </tr>
    );
  };

  return (
    <div className="summary-statement-wrapper shareholding-encumbrance-wrapper">
      {/* Fixed title */}
      <div className="summary-statement-title">
        Table II - Statement showing shareholding pattern of the Promoter and
        Promoter Group
      </div>

      {/* Scrollable table area */}
      <div className="summary-statement-scroll">
        <table className="summary-statement-table shareholding-encumbrance-table">
          <thead>
            <tr>
              <th rowSpan="2">Sr. No.</th>

              <th rowSpan="2">
                Category &amp; Name of the Shareholders (I)
              </th>

              <th rowSpan="2">
                Shareholding, as a % assuming full conversion of convertible
                securities (XII)=(VII)+(X) As a % of (A+B+C2)
              </th>

              <th colSpan="2">Number of Locked in shares (XIII)</th>

              <th colSpan="2">Number of Shares pledged (XIV)</th>

              <th colSpan="2">Non-Disposal Undertaking (XV)</th>

              <th colSpan="2">Other encumbrances, if any (XVI)</th>

              <th colSpan="2">
                Total Number of Shares encumbered (XVII) = (XIV+XV+XVI)
              </th>

              <th rowSpan="2">
                Number of equity shares held in dematerialized form (XVIII)
              </th>

              <th colSpan="3">Sub-categorization of shares</th>
            </tr>

            <tr>
              {/* Locked in */}
              <th>
                No. (a)
              </th>
              <th>
                As a % of total Shares held (b)
              </th>

              {/* Pledged */}
              <th>
                No. (a)
              </th>
              <th>
                As a % of total Shares held (b)
              </th>

              {/* NDU */}
              <th>
                No. (a)
              </th>
              <th>
                As a % of total Shares held (b)
              </th>

              {/* Other encumbrances */}
              <th>
                No. (a)
              </th>
              <th>
                As a % of total Shares held (b)
              </th>

              {/* Total encumbered */}
              <th>
                No. (a)
              </th>
              <th>
                As a % of total Shares held (b)
              </th>

              {/* Sub-categorization */}
              <th>Sub-category (i)</th>
              <th>Sub-category (ii)</th>
              <th>Sub-category (iii)</th>
            </tr>
          </thead>

          <tbody>
            {SHAREHOLDING_ENCUMBRANCE_DATA.map((row, index) => (
              <React.Fragment key={index}>
                {renderBodyRow(row)}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShareholdingEncumbrance2;