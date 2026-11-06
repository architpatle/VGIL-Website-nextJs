const SUMMARY_STATEMENT_DATA = [
    {
        category: "(A)",
        shareholderCategory: "Promoter & Promoter Group",
        shareholders: "5",
        fullyPaid: "16164204",
        partlyPaid: "",
        depositoryReceipts: "",
        totalShares: "16164204",
        shareholding: "65",
        votingClassX: "16164204",
        votingClassY: "",
        votingTotal: "16164204",
        votingPercentage: "65",
        convertibleSecurities: "",
        warrants: "1243432",
        esop: "",
        outstandingSecurities: "1243432",
        fullyDiluted: "17407636",
    },

    {
        category: "(B)",
        shareholderCategory: "Public",
        shareholders: "1747",
        fullyPaid: "8704431",
        partlyPaid: "",
        depositoryReceipts: "",
        totalShares: "8704431",
        shareholding: "35",
        votingClassX: "8704431",
        votingClassY: "",
        votingTotal: "8704431",
        votingPercentage: "35",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        outstandingSecurities: "",
        fullyDiluted: "8704431",
    },

    {
        category: "(C)",
        shareholderCategory: "Non Promoter-Non Public",
        shareholders: "",
        fullyPaid: "",
        partlyPaid: "",
        depositoryReceipts: "",
        totalShares: "",
        shareholding: "",
        votingClassX: "",
        votingClassY: "",
        votingTotal: "",
        votingPercentage: "",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        outstandingSecurities: "",
        fullyDiluted: "",
    },

    {
        category: "(C1)",
        shareholderCategory: "Shares underlying DRs",
        shareholders: "",
        fullyPaid: "",
        partlyPaid: "",
        depositoryReceipts: "",
        totalShares: "",
        shareholding: "",
        votingClassX: "",
        votingClassY: "",
        votingTotal: "",
        votingPercentage: "",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        outstandingSecurities: "",
        fullyDiluted: "",
    },

    {
        category: "(C2)",
        shareholderCategory: "Shares held by Employee Trusts",
        shareholders: "",
        fullyPaid: "",
        partlyPaid: "",
        depositoryReceipts: "",
        totalShares: "",
        shareholding: "",
        votingClassX: "",
        votingClassY: "",
        votingTotal: "",
        votingPercentage: "",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        outstandingSecurities: "",
        fullyDiluted: "",
    },

    {
        category: "",
        shareholderCategory: "Total",
        shareholders: "1752",
        fullyPaid: "24868635",
        partlyPaid: "",
        depositoryReceipts: "",
        totalShares: "24868635",
        shareholding: "100",
        votingClassX: "24868635",
        votingClassY: "",
        votingTotal: "24868635",
        votingPercentage: "100",
        convertibleSecurities: "",
        warrants: "1243432",
        esop: "",
        outstandingSecurities: "1243432",
        fullyDiluted: "26112067",
    },
];


function SummaryStatement() {
  return (
    <div className="shareholding-table-container summary-statement-wrapper">

      {/* FIXED TABLE TITLE */}
      <div className="summary-statement-title">
        Table I - Summary Statement holding of specified securities
      </div>

      {/* SCROLLABLE TABLE AREA */}
      <div className="summary-statement-scroll">

        <table className="shareholding-information-table summary-statement-table">

          <thead>

            <tr>
              <th rowSpan="3">
                Category
                <br />
                (I)
              </th>

              <th rowSpan="3">
                Category of
                <br />
                shareholder
                <br />
                (II)
              </th>

              <th rowSpan="3">
                Nos. Of
                <br />
                shareholders
                <br />
                (III)
              </th>

              <th rowSpan="3">
                No. of fully paid
                <br />
                up equity shares
                <br />
                held (IV)
              </th>

              <th rowSpan="3">
                No. Of Partly
                <br />
                paid-up equity
                <br />
                shares held
                <br />
                (V)
              </th>

              <th rowSpan="3">
                No. Of shares
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
                shares held (VII)
                <br />
                = (IV) + (V) + (VI)
              </th>

              <th rowSpan="3">
                Shareholding as a
                <br />
                % of total no. of
                <br />
                shares
                <br />
                (calculated as per
                <br />
                SCRR, 1957) (VIII)
                <br />
                As a % of
                <br />
                (A+B+C2)
              </th>

              <th colSpan="4">
                Number of Voting Rights held in each class
                of securities (IX)
              </th>

              {/* <th rowSpan="3">
                Total as a % of
                <br />
                (A+B+C)
              </th> */}

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
                No. Of
                <br />
                Outstanding
                <br />
                ESOP
                <br />
                Granted
                <br />
                (XC)
              </th>

              <th rowSpan="3">
                No. of Shares
                <br />
                Underlying
                <br />
                Outstanding
                <br />
                convertible
                <br />
                securities,
                <br />
                No. of Warrants
                <br />
                and ESOP etc.
                <br />
                (X) =
                <br />
                (XA+XB+XC)
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
                Securities etc.)
                <br />
                (XI) =
                <br />
                (VII+X)
              </th>

            </tr>

            <tr>
              <th colSpan="3">
                No of Voting (XIV) Rights
              </th>
              <th rowSpan="3">
                Total as a % of
                <br />
                (A+B+C)
              </th>
            </tr>

            

            <tr>
              <th>
                Class
                <br />
                eg:X
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

            {SUMMARY_STATEMENT_DATA.map((item, index) => (
              <tr key={index}>

                <td>{item.category}</td>
                <td>{item.shareholderCategory}</td>
                <td>{item.shareholders}</td>
                <td>{item.fullyPaid}</td>
                <td>{item.partlyPaid}</td>
                <td>{item.depositoryReceipts}</td>
                <td>{item.totalShares}</td>
                <td>{item.shareholding}</td>
                <td>{item.votingClassX}</td>
                <td>{item.votingClassY}</td>
                <td>{item.votingTotal}</td>
                <td>{item.votingPercentage}</td>
                <td>{item.convertibleSecurities}</td>
                <td>{item.warrants}</td>
                <td>{item.esop}</td>
                <td>{item.outstandingSecurities}</td>
                <td>{item.fullyDiluted}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}


export default SummaryStatement;