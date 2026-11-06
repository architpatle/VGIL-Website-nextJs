import React from "react";

const SHAREHOLDER_COLUMNS = [
  {
    srNo: "1",
    category: "HUF",
    subCategory: "Category",
    name: "",
    pan: "",
    shareholders: "84",
    fullyPaid: "384274",
    totalShares: "384274",
    shareholding: "1.55",
    votingClassX: "384274",
    votingTotal: "384274",
    votingPercentage: "1.55",
    fullyDiluted: "384274",
    lockedShares: "183274",
    lockedPercentage: "47.69",
    dematerialized: "384274",
    subCategoryI: "0",
    subCategoryII: "0",
    subCategoryIII: "0",
  },
  {
    srNo: "2",
    category: "LLP",
    subCategory: "Category",
    name: "",
    pan: "",
    shareholders: "7",
    fullyPaid: "509505",
    totalShares: "509505",
    shareholding: "2.05",
    votingClassX: "509505",
    votingTotal: "509505",
    votingPercentage: "2.05",
    fullyDiluted: "509505",
    lockedShares: "56505",
    lockedPercentage: "11.09",
    dematerialized: "509505",
    subCategoryI: "0",
    subCategoryII: "0",
    subCategoryIII: "0",
  },
  {
    srNo: "3",
    category: "LLP",
    subCategory: "More than 1 percentage of shareholding",
    name: "MIND SCOPE ADVISORS LLP",
    pan: "ABYFM4330Q",
    shareholders: "1",
    fullyPaid: "349505",
    totalShares: "349505",
    shareholding: "1.41",
    votingClassX: "349505",
    votingTotal: "349505",
    votingPercentage: "1.41",
    fullyDiluted: "349505",
    lockedShares: "56505",
    lockedPercentage: "16.17",
    dematerialized: "349505",
    subCategoryI: "0",
    subCategoryII: "0",
    subCategoryIII: "0",
  },
];

function AnyOther() {
  const total = {
    shareholders: "91",
    fullyPaid: "893779",
    totalShares: "893779",
    shareholding: "3.6",
    votingTotal: "893779",
    votingPercentage: "3.6",
    fullyDiluted: "893779",
    lockedShares: "239779",
    lockedPercentage: "26.83",
    dematerialized: "893779",
    subCategoryI: "0",
    subCategoryII: "0",
    subCategoryIII: "0",
  };

  return (
    <div className="summary-statement-wrapper any-other-wrapper">
      {/* Fixed Table Title */}
      <div className="summary-statement-title">
        Any Other (specify)
      </div>

      {/* Scrollable Table */}
      <div className="summary-statement-scroll">
        <table className="summary-statement-table any-other-table">
          <tbody>
            {/* =========================================================
                SR. NO.
            ========================================================== */}
            <tr>
              <td className="any-other-label-cell">Sr. No.</td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.srNo}
                </td>
              ))}

              <td></td>
            </tr>

            {/* =========================================================
                CATEGORY
            ========================================================== */}
            <tr>
              <td className="any-other-label-cell">Category</td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.category}
                </td>
              ))}

              <td></td>
            </tr>

            {/* =========================================================
                CATEGORY / MORE THAN 1 PERCENTAGE
            ========================================================== */}
            <tr className="any-other-tall-row">
              <td className="any-other-label-cell">
                Category /
                <br />
                More than 1
                <br />
                percentage
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.subCategory}
                </td>
              ))}

              <td></td>
            </tr>

            {/* =========================================================
                NAME OF SHAREHOLDERS
            ========================================================== */}
            <tr className="any-other-name-row">
              <td className="any-other-label-cell">
                Name of the
                <br />
                Shareholders
                <br />
                (I)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.name}
                </td>
              ))}

              <td>Click here to go back</td>
            </tr>

            {/* =========================================================
                PAN
            ========================================================== */}
            <tr>
              <td className="any-other-label-cell">
                PAN (II)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.pan}
                </td>
              ))}

              <td>Total</td>
            </tr>

            {/* =========================================================
                NUMBER OF SHAREHOLDERS
            ========================================================== */}
            <tr>
              <td className="any-other-label-cell">
                No. of the
                <br />
                Shareholders
                <br />
                (I)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.shareholders}
                </td>
              ))}

              <td>{total.shareholders}</td>
            </tr>

            {/* =========================================================
                FULLY PAID EQUITY SHARES
            ========================================================== */}
            <tr className="any-other-tall-row">
              <td className="any-other-label-cell">
                No. of fully
                <br />
                paid up equity
                <br />
                shares held
                <br />
                (IV)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.fullyPaid}
                </td>
              ))}

              <td>{total.fullyPaid}</td>
            </tr>

            {/* =========================================================
                TOTAL SHARES
            ========================================================== */}
            <tr className="any-other-tall-row">
              <td className="any-other-label-cell">
                Total nos.
                <br />
                shares held
                <br />
                (VII) = (IV) +
                <br />
                (V) + (VI)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.totalShares}
                </td>
              ))}

              <td>{total.totalShares}</td>
            </tr>

            {/* =========================================================
                SHAREHOLDING %
            ========================================================== */}
            <tr className="any-other-extra-tall-row">
              <td className="any-other-label-cell">
                Shareholding
                <br />
                as a % of total
                <br />
                no. of shares
                <br />
                (calculated as
                <br />
                per SCRR,
                <br />
                1957) (VIII) As
                <br />
                a % of
                <br />
                (A+B+C2)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.shareholding}
                </td>
              ))}

              <td>{total.shareholding}</td>
            </tr>

            {/* =========================================================
                VOTING RIGHTS SECTION
            ========================================================== */}
            <tr>
              <td
                colSpan="5"
                className="any-other-section-row"
              >
                Number of Voting Rights held in each class of
                securities (IX)
              </td>
            </tr>

            {/* CLASS X */}
            <tr>
              <td className="any-other-label-cell">
                Class eg: X
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.votingClassX}
                </td>
              ))}

              <td>{total.votingTotal}</td>
            </tr>

            {/* TOTAL */}
            <tr>
              <td className="any-other-label-cell">
                Total
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.votingTotal}
                </td>
              ))}

              <td>{total.votingTotal}</td>
            </tr>

            {/* TOTAL VOTING % */}
            <tr>
              <td className="any-other-label-cell">
                Total as a % of
                <br />
                Total Voting
                <br />
                rights
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.votingPercentage}
                </td>
              ))}

              <td>{total.votingPercentage}</td>
            </tr>

            {/* =========================================================
                FULLY DILUTED BASIS
            ========================================================== */}
            <tr className="any-other-extra-tall-row">
              <td className="any-other-label-cell">
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
                Securities etc.)
                <br />
                (XI)=(VII+X)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.fullyDiluted}
                </td>
              ))}

              <td>{total.fullyDiluted}</td>
            </tr>

            {/* =========================================================
                DILUTED SHAREHOLDING %
            ========================================================== */}
            <tr className="any-other-extra-tall-row">
              <td className="any-other-label-cell">
                Shareholding ,
                <br />
                as a %
                <br />
                assuming full
                <br />
                conversion of
                <br />
                convertible
                <br />
                securities ( as
                <br />
                a percentage
                <br />
                of diluted
                <br />
                share capital)
                <br />
                (XII)= (VII)+(X)
                <br />
                As a % of
                <br />
                (A+B+C2)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.shareholding}
                </td>
              ))}

              <td>{total.shareholding}</td>
            </tr>

            {/* =========================================================
                LOCKED SHARES
            ========================================================== */}
            <tr>
              <td
                colSpan="5"
                className="any-other-section-row"
              >
                Number of Locked in shares (XIII)
              </td>
            </tr>

            {/* LOCKED SHARES - NO */}
            <tr>
              <td className="any-other-label-cell">
                No. (a)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.lockedShares}
                </td>
              ))}

              <td>{total.lockedShares}</td>
            </tr>

            {/* LOCKED SHARES - % */}
            <tr>
              <td className="any-other-label-cell">
                As a % of total
                <br />
                Shares held (b)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.lockedPercentage}
                </td>
              ))}

              <td>{total.lockedPercentage}</td>
            </tr>

            {/* =========================================================
                DEMATERIALIZED
            ========================================================== */}
            <tr className="any-other-tall-row">
              <td className="any-other-label-cell">
                Number of
                <br />
                equity shares
                <br />
                held in
                <br />
                dematerialized
                <br />
                form (XIV)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.dematerialized}
                </td>
              ))}

              <td>{total.dematerialized}</td>
            </tr>

            {/* =========================================================
                REASON FOR NOT PROVIDING PAN
            ========================================================== */}
            <tr>
              <td
                colSpan="5"
                className="any-other-section-row"
              >
                Reason for not providing PAN
              </td>
            </tr>

            <tr>
              <td className="any-other-label-cell">
                Reason for not
                <br />
                providing PAN
              </td>

              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            {/* =========================================================
                SUB-CATEGORIZATION
            ========================================================== */}
            <tr>
              <td
                colSpan="5"
                className="any-other-section-row"
              >
                Sub-categorization of shares
              </td>
            </tr>

            <tr>
              <td
                colSpan="5"
                className="any-other-subsection-row"
              >
                Shareholding (No. of shares) under
              </td>
            </tr>

            {/* SUB-CATEGORY I */}
            <tr>
              <td className="any-other-label-cell">
                Sub-category
                <br />
                (i)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.subCategoryI}
                </td>
              ))}

              <td>{total.subCategoryI}</td>
            </tr>

            {/* SUB-CATEGORY II */}
            <tr>
              <td className="any-other-label-cell">
                Sub-category
                <br />
                (ii)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.subCategoryII}
                </td>
              ))}

              <td>{total.subCategoryII}</td>
            </tr>

            {/* SUB-CATEGORY III */}
            <tr>
              <td className="any-other-label-cell">
                Sub-category
                <br />
                (iii)
              </td>

              {SHAREHOLDER_COLUMNS.map((column) => (
                <td key={column.srNo}>
                  {column.subCategoryIII}
                </td>
              ))}

              <td>{total.subCategoryIII}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnyOther;