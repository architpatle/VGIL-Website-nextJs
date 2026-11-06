import React from "react";

const SUMMARY_STATEMENT_DATA = [
    {
        category: "A",
        shareholderCategory: (
            <>
                Promoter &<br />
                Promoter<br />
                Group
            </>
        ),
        shareholders: "5",
        fullyPaid: "16094204",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "16094204",
        shareholding: "64.72",
        votingClassX: "16094204",
        votingClassY: "0",
        votingTotal: "16094204",
        votingPercentage: "64.72",
        convertibleSecurities: "0",
        warrants: "0",
        underlyingSecurities: "0",
        dilutedShareholding: "64.72",
        lockedShares: "16094204",
        lockedPercentage: "100",
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "16094204",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        category: "B",
        shareholderCategory: "Public",
        shareholders: "3278",
        fullyPaid: "8774431",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "8774431",
        shareholding: "35.28",
        votingClassX: "8774431",
        votingClassY: "0",
        votingTotal: "8774431",
        votingPercentage: "35.28",
        convertibleSecurities: "0",
        warrants: "0",
        underlyingSecurities: "0",
        dilutedShareholding: "35.28",
        lockedShares: "4044431",
        lockedPercentage: "46.09",
        pledgedShares: "",
        pledgedPercentage: "",
        dematerializedShares: "8774431",
        subCategory1: "0",
        subCategory2: "0",
        subCategory3: "0",
    },
    {
        category: "C",
        shareholderCategory: (
            <>
                Non
                <br />
                Promoter-
                <br />
                Non Public
            </>
        ),
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "",
        votingClassX: "0",
        votingClassY: "0",
        votingTotal: "0",
        votingPercentage: "",
        convertibleSecurities: "0",
        warrants: "0",
        underlyingSecurities: "0",
        dilutedShareholding: "",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        category: "C1",
        shareholderCategory: (
            <>
                Shares
                <br />
                underlying
                <br />
                DRs
            </>
        ),
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "",
        shareholding: "",
        votingClassX: "0",
        votingClassY: "0",
        votingTotal: "0",
        votingPercentage: "",
        convertibleSecurities: "0",
        warrants: "0",
        underlyingSecurities: "0",
        dilutedShareholding: "",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        category: "C2",
        shareholderCategory: (
            <>
                Shares held
                <br />
                by
                <br />
                Employee
                <br />
                Trusts
            </>
        ),
        shareholders: "0",
        fullyPaid: "0",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",
        votingClassX: "0",
        votingClassY: "0",
        votingTotal: "0",
        votingPercentage: "0",
        convertibleSecurities: "0",
        warrants: "0",
        underlyingSecurities: "0",
        dilutedShareholding: "0",
        lockedShares: "0",
        lockedPercentage: "0",
        pledgedShares: "",
        pledgedPercentage: "",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        category: "",
        shareholderCategory: "Total",
        shareholders: "3283",
        fullyPaid: "24868635",
        partlyPaid: "0",
        depositoryReceipts: "0",
        totalShares: "24868635",
        shareholding: "100",
        votingClassX: "24868635",
        votingClassY: "0",
        votingTotal: "24868635",
        votingPercentage: "100",
        convertibleSecurities: "0",
        warrants: "0",
        underlyingSecurities: "0",
        dilutedShareholding: "100",
        lockedShares: "20138635",
        lockedPercentage: "80.98",
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "24868635",
        subCategory1: "0",
        subCategory2: "0",
        subCategory3: "0",
    },
];

function SummaryStatement() {
    return (
        <div className="shareholding-table-container summary-statement-wrapper">
            {/* Fixed table title */}
            <div className="summary-statement-title">
                Table I - Summary Statement holding of specified securities
            </div>

            <div className="summary-statement-scroll">
                <table className="shareholding-information-table summary-statement-table">
                    <thead>

                        {/* MAIN HEADER */}
                        <tr>
                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Category (I)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Category of
                                <br />
                                shareholder
                                <br />
                                (II)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Nos. Of
                                <br />
                                shareholders
                                <br />
                                (III)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. of fully paid
                                <br />
                                up equity shares
                                <br />
                                held (IV)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of Partly paid-up
                                <br />
                                equity shares held
                                <br />
                                (V)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
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

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Total nos.
                                <br />
                                shares held (VII)
                                <br />
                                = (IV)+(V)+(VI)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
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

                            {/* VOTING RIGHTS */}
                            <th colSpan="4" className="summary-statement-highlight-cell">
                                Number of Voting Rights held in each
                                <br />
                                class of securities (IX)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
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
                                (X)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
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
                                (XI)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of Shares
                                <br />
                                Underlying
                                <br />
                                Outstanding
                                <br />
                                convertible securities
                                <br />
                                and No. Of Warrants
                                <br />
                                (Xi) (a)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Shareholding
                                <br />
                                , as a %
                                <br />
                                assuming full
                                <br />
                                conversion of
                                <br />
                                convertible
                                <br />
                                securities (as a
                                <br />
                                percentage of
                                <br />
                                diluted share
                                <br />
                                capital)
                                <br />
                                (XI)=(VII)+(X)
                                <br />
                                As a % of
                                <br />
                                (A+B+C2)
                            </th>

                            {/* LOCKED SHARES */}
                            <th colSpan="2" className="summary-statement-highlight-cell">
                                Number of Locked
                                <br />
                                in shares (XII)
                            </th>

                            {/* PLEDGED SHARES */}
                            <th colSpan="2" className="summary-statement-highlight-cell">
                                Number of Shares
                                <br />
                                pledged or otherwise
                                <br />
                                encumbered
                                <br />
                                (XIII)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Number of equity shares
                                <br />
                                held in dematerialized
                                <br />
                                form (XIV)
                            </th>

                            {/* SUB-CATEGORIZATION */}
                            <th colSpan="3" className="summary-statement-highlight-cell">
                                Sub-categorization of shares
                            </th>
                        </tr>

                        {/* SECOND HEADER */}
                        <tr>
                            <th
                                colSpan="3"
                                className="summary-statement-grey-cell"
                            >
                                No of Voting (XIV) Rights
                            </th>

                            <th
                                rowSpan="2"
                                className="summary-statement-grey-cell"
                            >
                                Total as a % of
                                <br />
                                (A+B+C)
                            </th>

                            <th
                                rowSpan="2"
                                className="summary-statement-grey-cell"
                            >
                                No. (a)
                            </th>

                            <th
                                rowSpan="2"
                                className="summary-statement-grey-cell"
                            >
                                As a % of total
                                <br />
                                Shares held
                                <br />
                                (b)
                            </th>

                            <th
                                rowSpan="2"
                                className="summary-statement-grey-cell"
                            >
                                No. (a)
                            </th>

                            <th
                                rowSpan="2"
                                className="summary-statement-grey-cell"
                            >
                                As a % of total
                                <br />
                                Shares held
                                <br />
                                (b)
                            </th>

                            <th
                                colSpan="3"
                                className="summary-statement-grey-cell"
                            >
                                Shareholding (No. of shares) under
                            </th>
                        </tr>

                        {/* THIRD HEADER */}
                        <tr>
                            <th className="summary-statement-grey-cell">
                                Class eg: X
                            </th>

                            <th className="summary-statement-grey-cell">
                                Class eg:y
                            </th>

                            <th className="summary-statement-grey-cell">
                                Total
                            </th>

                            <th className="summary-statement-grey-cell">
                                Sub-category (i)
                            </th>

                            <th className="summary-statement-grey-cell">
                                Sub-category (ii)
                            </th>

                            <th className="summary-statement-grey-cell">
                                Sub-category (iii)
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {SUMMARY_STATEMENT_DATA.map((item, index) => (
                            <tr key={index}>

                                {/* LABEL / HIGHLIGHTED CELLS */}
                                <td className="general-information-label-cell summary-statement-highlight-cell">
                                    {item.category}
                                </td>

                                <td className="general-information-label-cell summary-statement-highlight-cell">
                                    {item.shareholderCategory}
                                </td>

                                {/* NORMAL WHITE CELLS */}
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

                                <td>{item.underlyingSecurities}</td>

                                <td>{item.dilutedShareholding}</td>

                                <td>{item.lockedShares}</td>

                                <td>{item.lockedPercentage}</td>

                                <td>{item.pledgedShares}</td>

                                <td>{item.pledgedPercentage}</td>

                                <td>{item.dematerializedShares}</td>

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

export default SummaryStatement;