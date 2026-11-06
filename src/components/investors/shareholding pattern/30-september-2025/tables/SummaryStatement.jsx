import React from "react";

const SUMMARY_STATEMENT_DATA = [
    {
        category: "(A)",
        shareholderCategory: "Promoter & Promoter Group",
        shareholders: "5",
        fullyPaid: "16164204",
        partlyPaid: "",
        drShares: "",
        totalShares: "16164204",
        shareholding: "65",
        votingX: "16164204",
        votingY: "",
        votingTotal: "16164204",
        votingPercentage: "65",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        underlyingTotal: "",
        fullyDiluted: "16164204",
    },
    {
        category: "(B)",
        shareholderCategory: "Public",
        shareholders: "1728",
        fullyPaid: "8704431",
        partlyPaid: "",
        drShares: "",
        totalShares: "8704431",
        shareholding: "35",
        votingX: "8704431",
        votingY: "",
        votingTotal: "8704431",
        votingPercentage: "35",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        underlyingTotal: "",
        fullyDiluted: "8704431",
    },
    {
        category: "(C)",
        shareholderCategory: "Non Promoter-Non Public",
        shareholders: "",
        fullyPaid: "",
        partlyPaid: "",
        drShares: "",
        totalShares: "",
        shareholding: "",
        votingX: "",
        votingY: "",
        votingTotal: "",
        votingPercentage: "",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        underlyingTotal: "",
        fullyDiluted: "",
    },
    {
        category: "(C1)",
        shareholderCategory: "Shares underlying DRs",
        shareholders: "",
        fullyPaid: "",
        partlyPaid: "",
        drShares: "",
        totalShares: "",
        shareholding: "",
        votingX: "",
        votingY: "",
        votingTotal: "",
        votingPercentage: "",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        underlyingTotal: "",
        fullyDiluted: "",
    },
    {
        category: "(C2)",
        shareholderCategory: "Shares held by Employee Trusts",
        shareholders: "",
        fullyPaid: "",
        partlyPaid: "",
        drShares: "",
        totalShares: "",
        shareholding: "",
        votingX: "",
        votingY: "",
        votingTotal: "",
        votingPercentage: "",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        underlyingTotal: "",
        fullyDiluted: "",
    },
    {
        category: "",
        shareholderCategory: "Total",
        shareholders: "1733",
        fullyPaid: "24868635",
        partlyPaid: "",
        drShares: "",
        totalShares: "24868635",
        shareholding: "100",
        votingX: "24868635",
        votingY: "",
        votingTotal: "24868635",
        votingPercentage: "100",
        convertibleSecurities: "",
        warrants: "",
        esop: "",
        underlyingTotal: "",
        fullyDiluted: "24868635",
    },
];

function SummaryStatement() {
    return (
        <div className="summary-statement-wrapper">

            {/* Fixed Table Title */}
            <div className="summary-statement-title">
                Table I - Summary Statement holding of specified securities
            </div>

            {/* Scrollable Table */}
            <div className="summary-statement-scroll">

                <table className="summary-statement-table">

                    <thead>

                        {/* MAIN HEADER */}
                        <tr>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                Category
                                <br />
                                (I)
                            </th>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                Category
                                <br />
                                of
                                <br />
                                shareholder
                                <br />
                                (II)
                            </th>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                Nos. Of
                                <br />
                                shareholders
                                <br />
                                (III)
                            </th>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                No. of
                                <br />
                                fully paid
                                <br />
                                up equity
                                <br />
                                shares
                                <br />
                                held (IV)
                            </th>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                No.
                                <br />
                                Of
                                <br />
                                Partly
                                <br />
                                paid-
                                <br />
                                up
                                <br />
                                equity
                                <br />
                                shares
                                <br />
                                held
                                <br />
                                (V)
                            </th>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
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

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                Total nos.
                                <br />
                                shares
                                <br />
                                held (VII)
                                <br />
                                = (IV)+
                                <br />
                                (V)+ (VI)
                            </th>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
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

                            {/* Voting Rights */}
                            <th
                                colSpan="4"
                                className="shareholding-light-highlight"
                            >
                                Number of Voting Rights held in each
                                <br />
                                class of securities (IX)
                            </th>



                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                No. Of
                                <br />
                                Shares
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

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                No. of
                                <br />
                                Shares
                                <br />
                                Underlying
                                <br />
                                Outstanding
                                <br />
                                Warrants
                                <br />
                                (XB)
                            </th>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
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

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                No. of
                                <br />
                                Shares
                                <br />
                                Underlying
                                <br />
                                Outstanding
                                <br />
                                convertible
                                <br />
                                securities,
                                <br />
                                No. of
                                <br />
                                Warrants
                                <br />
                                and ESOP
                                <br />
                                etc. (X) =
                                <br />
                                (XA+XB+XC)
                            </th>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                Total No.
                                <br />
                                of shares
                                <br />
                                on fully
                                <br />
                                diluted
                                <br />
                                basis
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

                        {/* VOTING RIGHTS SUB-HEADERS */}
                        <tr>
                            <th colSpan="3" className="shareholding-light-highlight">
                                No of Voting (XIV) Rights
                            </th>

                            <th
                                rowSpan="3"
                                className="shareholding-light-highlight"
                            >
                                Total as
                                <br />
                                a % of
                                <br />
                                (A+B+C)
                            </th>

                        </tr>

                        <tr>

                            <th className="shareholding-light-highlight">
                                Class
                                <br />
                                eg:X
                            </th>

                            <th className="shareholding-light-highlight">
                                Class
                                <br />
                                eg:Y
                            </th>

                            <th className="shareholding-light-highlight">
                                Total
                            </th>

    

                        </tr>

                    </thead>

                    <tbody>

                        {SUMMARY_STATEMENT_DATA.map((item, index) => (
                            <tr key={index}>

                                <td className="shareholding-light-highlight">
                                    {item.category}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.shareholderCategory}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.shareholders}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.fullyPaid}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.partlyPaid}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.drShares}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.totalShares}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.shareholding}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.votingX}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.votingY}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.votingTotal}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.votingPercentage}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.convertibleSecurities}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.warrants}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.esop}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.underlyingTotal}
                                </td>

                                <td className="shareholding-light-highlight">
                                    {item.fullyDiluted}
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </div>
    );
}

export default SummaryStatement;