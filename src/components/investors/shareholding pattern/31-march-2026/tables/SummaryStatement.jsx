import React from "react";

const SUMMARY_DATA = [
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
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "16164204",
    },
    {
        category: "(B)",
        shareholderCategory: "Public",
        shareholders: "1613",
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
        totalUnderlying: "",
        fullyDiluted: "8704431",
    },
    {
        category: "(C)",
        shareholderCategory: "Non Promoter- Non Public",
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
        totalUnderlying: "",
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
        totalUnderlying: "",
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
        totalUnderlying: "",
        fullyDiluted: "",
    },
    {
        category: "",
        shareholderCategory: "Total",
        shareholders: "1618",
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
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "24868635",
    },
];

function SummaryStatement() {
    return (
        <div className="summary-statement-wrapper">
            {/* Fixed table title */}
            <div className="summary-statement-title">
                Table I - Summary Statement holding of specified securities
            </div>

            {/* Scrollable table area */}
            <div className="summary-statement-scroll">
                <table className="summary-statement-table">
                    <thead>
                        <tr>
                            <th rowSpan="3">
                                Category
                                <br />
                                (I)
                            </th>

                            <th rowSpan="3">
                                Category
                                <br />
                                of
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

                            <th rowSpan="3">
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
                                shares
                                <br />
                                held (VII)
                                <br />
                                = (IV) +
                                <br />
                                (V) + (VI)
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

                            <th rowSpan="3">
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

                            <th rowSpan="3">
                                No. Of
                                <br />
                                Shares
                                <br />
                                Underlying
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
                                securities,
                                <br />
                                No. of
                                <br />
                                Warrants
                                <br />
                                and ESOP
                                <br />
                                etc. (X)
                                <br />
                                = (XA+XB+XC)
                            </th>

                            <th rowSpan="3">
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
                                etc.) (XI)
                                <br />
                                = (VII+X)
                            </th>
                        </tr>

                        <tr>
                            <th colSpan="3">
                                No of Voting (XIV) Rights
                            </th>
                            <th rowSpan="2">
                                Total as a % of (A+B+C)
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

                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {SUMMARY_DATA.map((row, index) => (
                            <tr key={index}>
                                <td>{row.category}</td>
                                <td>{row.shareholderCategory}</td>
                                <td>{row.shareholders}</td>
                                <td>{row.fullyPaid}</td>
                                <td>{row.partlyPaid}</td>
                                <td>{row.depositoryReceipts}</td>
                                <td>{row.totalShares}</td>
                                <td>{row.shareholding}</td>
                                <td>{row.votingClassX}</td>
                                <td>{row.votingClassY}</td>
                                <td>{row.votingTotal}</td>
                                <td>{row.votingPercentage}</td>
                                <td>{row.convertibleSecurities}</td>
                                <td>{row.warrants}</td>
                                <td>{row.esop}</td>
                                <td>{row.totalUnderlying}</td>
                                <td>{row.fullyDiluted}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SummaryStatement;