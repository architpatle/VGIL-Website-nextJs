import React from "react";

const NON_PROMOTER_NON_PUBLIC_DATA = [
    {
        srNo: "1",
        category:
            "Custodian/DR Holder",
        shareholders: "0",
        fullyPaidUp: "0",
        partlyPaidUp: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",

        votingClassX: "0",
        votingClassY: "0",
        votingTotal: "0",
        votingPercentage: "0",

        convertibleSecurities: "0",
        warrants: "0",
        convertibleAndWarrants: "0",
        dilutedShareholding: "0",

        lockedInShares: "0",
        lockedInPercentage: "0",

        pledgedShares: "",
        pledgedPercentage: "",

        dematerializedShares: "0",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        srNo: "2",
        category:
            "Employee Benefit Trust / Employee Welfare Trust under SEBI (Share Based Employee Benefits and Sweat Equity) Regulations, 2021",
        shareholders: "0",
        fullyPaidUp: "0",
        partlyPaidUp: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",

        votingClassX: "0",
        votingClassY: "0",
        votingTotal: "0",
        votingPercentage: "0",

        convertibleSecurities: "0",
        warrants: "0",
        convertibleAndWarrants: "0",
        dilutedShareholding: "0",

        lockedInShares: "0",
        lockedInPercentage: "0",

        pledgedShares: "",
        pledgedPercentage: "",

        dematerializedShares: "0",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        srNo: "",
        category:
            "Total Non-Promoter-Non Public Shareholding (C)= (C)(1)+(C)(2)",
        shareholders: "0",
        fullyPaidUp: "0",
        partlyPaidUp: "0",
        depositoryReceipts: "0",
        totalShares: "0",
        shareholding: "0",

        votingClassX: "0",
        votingClassY: "0",
        votingTotal: "0",
        votingPercentage: "0",

        convertibleSecurities: "0",
        warrants: "0",
        convertibleAndWarrants: "0",
        dilutedShareholding: "0",

        lockedInShares: "0",
        lockedInPercentage: "0",

        pledgedShares: "",
        pledgedPercentage: "",

        dematerializedShares: "0",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
];

function NonPromoterNonPublicShareholding() {
    return (
        <div className="shareholding-table-container">

            {/* Fixed table title */}
            <div className="summary-statement-title">
                Table IV - Statement showing shareholding pattern of the Non
                Promoter- Non Public shareholder
            </div>

            <div className="summary-statement-scroll">
                <table className="shareholding-information-table">
                    <thead>

                        {/* MAIN HEADER */}
                        <tr>
                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Sr.
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Category &amp;
                                <br />
                                Name of the Shareholders
                                <br />
                                (I)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Nos. Of
                                <br />
                                shareholders
                                <br />
                                (III)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. of fully paid up equity shares held
                                <br />
                                (IV)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of Partly paid-up equity shares held
                                <br />
                                (V)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of shares underlying Depository Receipts
                                <br />
                                (VI)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Total nos. shares held (VII) = (IV)+(V)+(VI)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Shareholding as a % of total no. of shares
                                (calculated as per SCRR, 1957) (VIII)
                                <br />
                                As a % of (A+B+C2)
                            </th>

                            {/* VOTING RIGHTS */}
                            <th colSpan="4" className="summary-statement-highlight-cell">
                                Number of Voting Rights held in each class of securities (IX)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of Shares Underlying Outstanding convertible securities
                                (X)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. of Shares Underlying Outstanding Warrants
                                (XI)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of Shares Underlying Outstanding convertible securities
                                and No. Of Warrants (Xi) (a)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Shareholding, as a % assuming full conversion of convertible
                                securities ( as a percentage of diluted share capital)
                                (XI) = (VII)+(X)
                                <br />
                                As a % of (A+B+C2)
                            </th>

                            {/* LOCKED IN */}
                            <th colSpan="2" className="summary-statement-highlight-cell">
                                Number of Locked in shares (XII)
                            </th>

                            {/* PLEDGED */}
                            <th colSpan="2" className="summary-statement-highlight-cell">
                                Number of Shares pledged or otherwise encumbered (XIII)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Number of equity shares held in dematerialized form (XIV)
                            </th>

                            {/* SUB-CATEGORIZATION */}
                            <th colSpan="3" className="summary-statement-highlight-cell">
                                Sub-categorization of shares
                            </th>
                        </tr>

                        {/* SECOND HEADER */}
                        <tr>
                            <th colSpan="3" className="summary-statement-highlight-cell">
                                No of Voting (XIV) Rights
                            </th>

                            <th rowSpan="2" className="summary-statement-highlight-cell">
                                Total as a % of Total Voting rights
                            </th>

                            <th rowSpan="2" className="summary-statement-highlight-cell">
                                No.
                                <br />
                                (a)
                            </th>

                            <th rowSpan="2" className="summary-statement-highlight-cell">
                                As a % of total Shares held
                                <br />
                                (b)
                            </th>

                            <th rowSpan="2" className="summary-statement-highlight-cell">
                                No.
                                <br />
                                (a)
                            </th>

                            <th rowSpan="2" className="summary-statement-highlight-cell">
                                As a % of total Shares held
                                <br />
                                (b)
                            </th>

                            <th colSpan="3" className="summary-statement-highlight-cell">
                                Shareholding (No. of shares) under
                            </th>
                        </tr>

                        {/* THIRD HEADER */}
                        <tr>
                            <th className="summary-statement-highlight-cell">
                                Class eg:X
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Class eg:y
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Total
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Sub-category
                                <br />
                                (i)
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Sub-category
                                <br />
                                (ii)
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Sub-category
                                <br />
                                (iii)
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {NON_PROMOTER_NON_PUBLIC_DATA.map((item, index) => (
                            <tr key={index}>
                                <td>{item.srNo}</td>

                                <td>{item.category}</td>

                                <td>{item.shareholders}</td>

                                <td>{item.fullyPaidUp}</td>

                                <td>{item.partlyPaidUp}</td>

                                <td>{item.depositoryReceipts}</td>

                                <td>{item.totalShares}</td>

                                <td>{item.shareholding}</td>

                                {/* VOTING RIGHTS */}
                                <td>{item.votingClassX}</td>
                                <td>{item.votingClassY}</td>
                                <td>{item.votingTotal}</td>
                                <td>{item.votingPercentage}</td>

                                {/* CONVERTIBLE SECURITIES */}
                                <td>{item.convertibleSecurities}</td>

                                {/* WARRANTS */}
                                <td>{item.warrants}</td>

                                {/* CONVERTIBLE + WARRANTS */}
                                <td>{item.convertibleAndWarrants}</td>

                                {/* DILUTED SHAREHOLDING */}
                                <td>{item.dilutedShareholding}</td>

                                {/* LOCKED-IN */}
                                <td>{item.lockedInShares}</td>
                                <td>{item.lockedInPercentage}</td>

                                {/* PLEDGED / ENCUMBERED */}
                                <td>{item.pledgedShares}</td>
                                <td>{item.pledgedPercentage}</td>

                                {/* DEMATERIALIZED */}
                                <td>{item.dematerializedShares}</td>

                                {/* SUB-CATEGORIZATION */}
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

export default NonPromoterNonPublicShareholding;