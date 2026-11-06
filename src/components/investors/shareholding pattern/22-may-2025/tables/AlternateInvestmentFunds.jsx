import React from "react";

const ALTERNATE_INVESTMENT_FUNDS_DATA = [
  {
    srNo: 1,
    name: "INDIA EQUITY FUND 1",
    pan: "AABTI6970J",
    fullyPaidUp: "431000",
    partlyPaidUp: "0",
    depositoryReceipts: "0",
    totalShares: "431000",
    shareholding: "1.73",

    votingClassX: "431000",
    votingClassY: "0",
    votingTotal: "431000",
    votingPercentage: "1.73",

    convertibleSecurities: "0",
    warrants: "0",
    convertibleAndWarrants: "0",
    dilutedShareholding: "1.73",

    lockedInShares: "423000",
    lockedInPercentage: "98.14",

    dematerializedShares: "431000",

    reasonForNotProvidingPAN: "",

    subCategory1: "0",
    subCategory2: "0",
    subCategory3: "0",
  },
];

function AlternateInvestmentFunds() {
  return (
    <div className="shareholding-table-container">
      {/* Fixed table title */}
      <div className="summary-statement-title">
        Alternate Investment Funds

      </div>
      <div className="summary-statement-scroll">
        <table className="shareholding-information-table">
          <thead>
            {/* Main Header */}
            <tr >
              <th rowSpan="3" className="summary-statement-highlight-cell" >Sr. No.</th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                Name of the Shareholders (I)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                PAN (II)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                No. of fully paid up equity shares held (IV)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                No. Of Partly paid-up equity shares held (V)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                No. Of shares underlying Depository Receipts (VI)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                Total nos. shares held (VII) = (IV)+(V)+(VI)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                Shareholding as a % of total no. of shares
                (calculated as per SCRR, 1957) (VIII)
                <br />
                As a % of (A+B+C2)
              </th>

              {/* Voting Rights */}
              <th colSpan="4" className="summary-statement-highlight-cell" >
                Number of Voting Rights held in each class of securities (IX)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                No. Of Shares Underlying Outstanding convertible securities (X)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                No. of Shares Underlying Outstanding Warrants (XI)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                No. Of Shares Underlying Outstanding convertible securities
                and No. Of Warrants (Xi) (a)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                Shareholding, as a % assuming full conversion of convertible
                securities (as a percentage of diluted share capital)
                (XI) = (VII)+(X)
                <br />
                As a % of (A+B+C2)
              </th>

              {/* Locked Shares */}
              <th colSpan="2" className="summary-statement-highlight-cell" >
                Number of Locked in shares (XII)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                Number of equity shares held in dematerialized form (XIV)
              </th>

              <th rowSpan="3" className="summary-statement-highlight-cell" >
                Reason for not providing PAN
              </th>

              {/* Sub Categorization */}
              <th colSpan="3" className="summary-statement-highlight-cell" >
                Sub-categorization of shares
              </th>
            </tr>

            {/* Second Header */}
            <tr>
              <th colSpan="3" className="summary-statement-highlight-cell" >
                No of Voting (XIV) Rights
              </th>

              <th rowSpan="2" className="summary-statement-highlight-cell" >
                Total as a % of Total Voting rights
              </th>

              <th rowSpan="2" className="summary-statement-highlight-cell" >
                No. (a)
              </th>

              <th rowSpan="2" className="summary-statement-highlight-cell" >
                As a % of total Shares held (b)
              </th>

              <th colSpan="3" className="summary-statement-highlight-cell" >
                Shareholding (No. of shares) under
              </th>
            </tr>

            {/* Third Header */}
            <tr>
              <th className="summary-statement-highlight-cell" >Class eg:X</th>
              <th className="summary-statement-highlight-cell" >Class eg:Y</th>
              <th className="summary-statement-highlight-cell" > Total</th>

              <th className="summary-statement-highlight-cell" >Sub-category (i)</th>
              <th className="summary-statement-highlight-cell" >Sub-category (ii)</th>
              <th className="summary-statement-highlight-cell" >Sub-category (iii)</th>
            </tr>
          </thead>

          <tbody>
            {ALTERNATE_INVESTMENT_FUNDS_DATA.map((item) => (
              <tr key={item.srNo}>
                <td>{item.srNo}</td>

                <td>{item.name}</td>

                <td>{item.pan}</td>

                <td>{item.fullyPaidUp}</td>

                <td>{item.partlyPaidUp}</td>

                <td>{item.depositoryReceipts}</td>

                <td>{item.totalShares}</td>

                <td>{item.shareholding}</td>

                {/* Voting Rights */}
                <td>{item.votingClassX}</td>
                <td>{item.votingClassY}</td>
                <td>{item.votingTotal}</td>
                <td>{item.votingPercentage}</td>

                <td>{item.convertibleSecurities}</td>

                <td>{item.warrants}</td>

                <td>{item.convertibleAndWarrants}</td>

                <td>{item.dilutedShareholding}</td>

                {/* Locked Shares */}
                <td>{item.lockedInShares}</td>
                <td>{item.lockedInPercentage}</td>

                <td>{item.dematerializedShares}</td>

                <td>{item.reasonForNotProvidingPAN}</td>

                {/* Sub Categorization */}
                <td>{item.subCategory1}</td>
                <td>{item.subCategory2}</td>
                <td>{item.subCategory3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AlternateInvestmentFunds;