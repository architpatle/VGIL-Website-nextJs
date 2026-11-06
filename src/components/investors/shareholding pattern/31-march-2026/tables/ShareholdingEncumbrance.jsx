import React from "react";

const SHAREHOLDING_ENCUMBRANCE_DATA = [
    {
        category: "(A)",
        shareholderCategory: "Promoter & Promoter Group",

        shareholding: "65",

        lockedShares: "16164204",
        lockedPercentage: "100",

        pledgedShares: "",
        pledgedPercentage: "",

        nonDisposalShares: "",
        nonDisposalPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "16164204",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },

    {
        category: "(B)",
        shareholderCategory: "Public",

        shareholding: "35",

        lockedShares: "2204431",
        lockedPercentage: "25.33",

        pledgedShares: "",
        pledgedPercentage: "",

        nonDisposalShares: "",
        nonDisposalPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "8704431",

        subCategory1: "0",
        subCategory2: "0",
        subCategory3: "0",
    },

    {
        category: "(C)",
        shareholderCategory: "Non Promoter-Non Public",

        shareholding: "",

        lockedShares: "",
        lockedPercentage: "",

        pledgedShares: "",
        pledgedPercentage: "",

        nonDisposalShares: "",
        nonDisposalPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },

    {
        category: "(C1)",
        shareholderCategory: "Shares underlying DRs",

        shareholding: "",

        lockedShares: "",
        lockedPercentage: "",

        pledgedShares: "",
        pledgedPercentage: "",

        nonDisposalShares: "",
        nonDisposalPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },

    {
        category: "(C2)",
        shareholderCategory: "Shares held by Employee Trusts",

        shareholding: "",

        lockedShares: "",
        lockedPercentage: "",

        pledgedShares: "",
        pledgedPercentage: "",

        nonDisposalShares: "",
        nonDisposalPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },

    {
        category: "",
        shareholderCategory: "Total",

        shareholding: "100",

        lockedShares: "18368635",
        lockedPercentage: "73.86",

        pledgedShares: "",
        pledgedPercentage: "",

        nonDisposalShares: "",
        nonDisposalPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "24868635",

        subCategory1: "0",
        subCategory2: "0",
        subCategory3: "0",
    },
];

function ShareholdingEncumbrance() {
    return (
        <div className="summary-statement-wrapper shareholding-encumbrance-wrapper">
            {/* Fixed title */}
            <div className="summary-statement-title">
                Table I - Summary Statement holding of specified securities
            </div>

            {/* Scrollable table */}
            <div className="summary-statement-scroll">
                <table className="summary-statement-table shareholding-encumbrance-table">
                    <thead>
                        {/* =========================
                HEADER ROW 1
            ========================= */}
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
                                Shareholding
                                <br />
                                , as a %
                                <br />
                                assuming full
                                <br />
                                conversion
                                <br />
                                of
                                <br />
                                convertible
                                <br />
                                securities (
                                <br />
                                as a
                                <br />
                                percentage
                                <br />
                                of diluted
                                <br />
                                share capital)
                                <br />
                                (XII) = (VII)
                                <br />
                                + (X) As a %
                                <br />
                                of (A+B+C2)
                            </th>

                            <th colSpan="2">
                                Number of Locked
                                <br />
                                in shares (XIII)
                            </th>

                            <th colSpan="2">
                                Number of
                                <br />
                                Shares
                                <br />
                                pledged
                                <br />
                                (XIV)
                            </th>

                            <th colSpan="2">
                                Non-
                                <br />
                                Disposal
                                <br />
                                Undertaking
                                <br />
                                (XV)
                            </th>

                            <th colSpan="2">
                                Other
                                <br />
                                encumbrances,
                                <br />
                                if any (XVI)
                            </th>

                            <th colSpan="2">
                                Total
                                <br />
                                Number of
                                <br />
                                Shares
                                <br />
                                encumbered
                                <br />
                                (XVII) =
                                <br />
                                (XIV+XV+XVI)
                            </th>

                            <th rowSpan="3">
                                Number of
                                <br />
                                equity shares
                                <br />
                                held in
                                <br />
                                dematerialized
                                <br />
                                form (XVIII)
                            </th>

                            <th colSpan="3">
                                Sub-categorization of shares
                            </th>
                        </tr>

                        {/* =========================
                HEADER ROW 2
            ========================= */}
                        <tr>
                            <th rowSpan="2">
                                No. (a)
                            </th>

                            <th rowSpan="2">
                                As a % of
                                <br />
                                total Shares
                                <br />
                                held (b)
                            </th>

                            <th rowSpan="2">
                                No. (a)
                            </th>

                            <th rowSpan="2">
                                As a % of
                                <br />
                                total Shares
                                <br />
                                held (b)
                            </th>

                            <th rowSpan="2">
                                No. (a)
                            </th>

                            <th rowSpan="2">
                                As a % of
                                <br />
                                total Shares
                                <br />
                                held (b)
                            </th>

                            <th rowSpan="2">
                                No. (a)
                            </th>

                            <th rowSpan="2">
                                As a % of
                                <br />
                                total Shares
                                <br />
                                held (b)
                            </th>

                            <th rowSpan="2">
                                No. (a)
                            </th>

                            <th rowSpan="2">
                                As a % of
                                <br />
                                total Shares
                                <br />
                                held (b)
                            </th>

                            <th rowSpan="2">
                                Sub-
                                <br />
                                category
                                <br />
                                (i)
                            </th>

                            <th rowSpan="2">
                                Sub-
                                <br />
                                category
                                <br />
                                (ii)
                            </th>

                            <th rowSpan="2">
                                Sub-
                                <br />
                                category
                                <br />
                                (iii)
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {SHAREHOLDING_ENCUMBRANCE_DATA.map((row, index) => (
                            <tr key={index}>
                                <td>{row.category}</td>

                                <td>{row.shareholderCategory}</td>

                                <td>{row.shareholding}</td>

                                <td>{row.lockedShares}</td>

                                <td>{row.lockedPercentage}</td>

                                <td>{row.pledgedShares}</td>

                                <td>{row.pledgedPercentage}</td>

                                <td>{row.nonDisposalShares}</td>

                                <td>{row.nonDisposalPercentage}</td>

                                <td>{row.otherEncumbranceShares}</td>

                                <td>{row.otherEncumbrancePercentage}</td>

                                <td>{row.totalEncumberedShares}</td>

                                <td>{row.totalEncumberedPercentage}</td>

                                <td>{row.dematerializedShares}</td>

                                <td>{row.subCategory1}</td>

                                <td>{row.subCategory2}</td>

                                <td>{row.subCategory3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShareholdingEncumbrance;