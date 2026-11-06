import React from "react";

const PROMOTER_PUBLIC_SHAREHOLDING_DATA = [
    // ---------------- INDIAN ----------------
    {
        type: "section",
        label: "(1)",
        name: "Indian",
    },
    {
        srNo: "a",
        name: (
            <>
                Individuals /<br />
                Hindu<br />
                undivided<br />
                Family
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
        srNo: "b",
        name: (
            <>
                Central
                <br />
                Government/
                <br />
                State
                <br />
                Government(s)
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
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        srNo: "c",
        name: (
            <>
                Financial
                <br />
                Institutions/
                <br />
                Banks
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
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        srNo: "d",
        name: (
            <>
                Any Other
                <br />
                (specify)
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
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        type: "subtotal",
        name: (
            <>
                Sub-Total (A)
                <br />
                (1)
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

    // ---------------- FOREIGN ----------------
    {
        type: "section",
        label: "(2)",
        name: "Foreign",
    },
    {
        srNo: "a",
        name: (
            <>
                Individuals
                <br />
                (Non-Resident
                <br />
                Individuals/
                <br />
                Foreign
                <br />
                Individuals)
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
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        srNo: "b",
        name: "Government",
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
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        srNo: "c",
        name: "Institutions",
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
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        srNo: "d",
        name: (
            <>
                Foreign
                <br />
                Portfolio
                <br />
                Investor
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
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        srNo: "e",
        name: (
            <>
                Any Other
                <br />
                (specify)
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
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },
    {
        type: "subtotal",
        name: (
            <>
                Sub-Total (A)
                <br />
                (2)
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
        pledgedShares: "0",
        pledgedPercentage: "0",
        dematerializedShares: "0",
        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },

    // ---------------- TOTAL ----------------
    {
        type: "total",
        name: (
            <>
                Total
                <br />
                Shareholding
                <br />
                of Promoter
                <br />
                and Promoter
                <br />
                Group (A)=(A)
                <br />
                (1)+(A)(2)
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
];

function PromoterPublicShareholding() {
    return (
        <div className="shareholding-table-container summary-statement-wrapper">
            {/* Fixed table title */}
            <div className="summary-statement-title">
                Table II - Statement showing shareholding pattern of the Promoter and Promoter Group
            </div>

            <div className="summary-statement-scroll">
                <table className="shareholding-information-table summary-statement-table">
                    <thead>

                        {/* MAIN HEADER */}
                        <tr>
                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Sr.
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Category &amp;
                                <br />
                                Name of the
                                <br />
                                Shareholders
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
                                No. of fully paid
                                <br />
                                up equity
                                <br />
                                shares
                                <br />
                                held (IV)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of
                                <br />
                                Partly
                                <br />
                                paid-up
                                <br />
                                equity
                                <br />
                                shares
                                <br />
                                held (V)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
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

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Total nos.
                                <br />
                                shares
                                <br />
                                held (VII)
                                <br />
                                = (IV)+
                                <br />
                                (V)+(VI)
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
                                and No. Of
                                <br />
                                Warrants
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
                                securities (as
                                <br />
                                a percentage
                                <br />
                                of diluted
                                <br />
                                share capital)
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
                                Number of
                                <br />
                                equity shares
                                <br />
                                held in
                                <br />
                                dematerialized
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
                                Total as a %
                                <br />
                                of Total
                                <br />
                                Voting
                                <br />
                                rights
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
                                As a % of
                                <br />
                                total
                                <br />
                                Shares
                                <br />
                                held
                                <br />
                                (b)
                            </th>

                            <th
                                rowSpan="2"
                                className="summary-statement-grey-cell"
                            >
                                No.
                                <br />
                                (a)
                            </th>

                            <th
                                rowSpan="2"
                                className="summary-statement-grey-cell"
                            >
                                As a % of
                                <br />
                                total
                                <br />
                                Shares
                                <br />
                                held
                                <br />
                                (b)
                            </th>

                            <th
                                colSpan="3"
                                className="summary-statement-grey-cell"
                            >
                                Shareholding (No. of shares)
                                <br />
                                under
                            </th>
                        </tr>

                        {/* THIRD HEADER */}
                        <tr>
                            <th className="summary-statement-grey-cell">
                                Class
                                <br />
                                eg: X
                            </th>

                            <th className="summary-statement-grey-cell">
                                Class
                                <br />
                                eg:y
                            </th>

                            <th className="summary-statement-grey-cell">
                                Total
                            </th>

                            <th className="summary-statement-grey-cell">
                                Sub-
                                <br />
                                category
                                <br />
                                (i)
                            </th>

                            <th className="summary-statement-grey-cell">
                                Sub-
                                <br />
                                category
                                <br />
                                (ii)
                            </th>

                            <th className="summary-statement-grey-cell">
                                Sub-
                                <br />
                                category
                                <br />
                                (iii)
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {PROMOTER_PUBLIC_SHAREHOLDING_DATA.map((item, index) => {

                            {/* SECTION ROWS */ }
                            if (item.type === "section") {
                                return (
                                    <tr key={index}>
                                        <td
                                            colSpan="24"
                                            className="summary-statement-section-cell"
                                        >
                                            <strong>{item.label}</strong>
                                            &nbsp;&nbsp;
                                            <strong>{item.name}</strong>
                                        </td>
                                    </tr>
                                );
                            }

                            return (
                                <tr key={index}>

                                    {/* SR / CATEGORY */}
                                    <td className="summary-statement-highlight-cell" >
                                        {item.srNo}
                                    </td>

                                    <td>
                                        {item.name}
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
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PromoterPublicShareholding;