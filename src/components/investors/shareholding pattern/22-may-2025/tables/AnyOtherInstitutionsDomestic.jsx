import React from "react";

const ANY_OTHER_INSTITUTIONS_DOMESTIC_DATA = [
    {
        srNo: 1,
        category: "Other",
        categoryPercentage: "More than 1 percentage of shareholding",
        shareholderName: "Other",
        pan: "",
        noOfShareholders: "1",

        fullyPaidUp: "336000",
        partlyPaidUp: "0",
        depositoryReceipts: "0",
        totalShares: "336000",
        shareholding: "1.35",

        votingClassX: "336000",
        votingClassY: "0",
        votingTotal: "336000",
        votingPercentage: "1.35",

        convertibleSecurities: "0",
        warrants: "0",
        convertibleAndWarrants: "0",
        dilutedShareholding: "1.35",

        lockedInShares: "0",
        lockedInPercentage: "0",

        dematerializedShares: "336000",

        reasonForNotProvidingPAN: "",

        subCategory1: "0",
        subCategory2: "0",
        subCategory3: "0",
    },
];

function AnyOtherInstitutionsDomestic() {
    return (
        <div className="shareholding-table-container">
            {/* Fixed table title */}
            <div className="summary-statement-title">
                Any Other (specify) [Institutions (Domestic)]
            </div>

            <div className="summary-statement-scroll">
                <table className="shareholding-information-table">
                    <thead>

                        {/* MAIN HEADER */}
                        <tr>
                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Sr. No.
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Category
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Category / More than 1 percentage
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Name of the Shareholders (I)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                PAN (II)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No Of shareholders (I)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. of fully paid up equity shares held (IV)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of Partly paid-up equity shares held (V)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of shares underlying Depository Receipts (VI)
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
                                No. of Shares Underlying Outstanding Warrants (XI)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                No. Of Shares Underlying Outstanding convertible securities
                                and No. Of Warrants (Xi) (a)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Shareholding, as a % assuming full conversion of convertible
                                securities (as a percentage of diluted share capital)
                                (XI) = (VII)+(X)
                                <br />
                                As a % of (A+B+C2)
                            </th>

                            {/* LOCKED IN */}
                            <th colSpan="2" className="summary-statement-highlight-cell">
                                Number of Locked in shares (XII)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Number of equity shares held in dematerialized form (XIV)
                            </th>

                            <th rowSpan="3" className="summary-statement-highlight-cell">
                                Reason for not providing PAN
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
                                No. (a)
                            </th>

                            <th rowSpan="2" className="summary-statement-highlight-cell">
                                As a % of total Shares held (b)
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
                                Class eg:Y
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Total
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Sub-category (i)
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Sub-category (ii)
                            </th>

                            <th className="summary-statement-highlight-cell">
                                Sub-category (iii)
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {ANY_OTHER_INSTITUTIONS_DOMESTIC_DATA.map((item) => (
                            <tr key={item.srNo}>
                                <td>{item.srNo}</td>

                                <td>{item.category}</td>

                                <td>{item.categoryPercentage}</td>

                                <td>{item.shareholderName}</td>

                                <td>{item.pan}</td>

                                <td>{item.noOfShareholders}</td>

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

                                {/* CONVERTIBLE / WARRANTS */}
                                <td>{item.convertibleSecurities}</td>
                                <td>{item.warrants}</td>
                                <td>{item.convertibleAndWarrants}</td>
                                <td>{item.dilutedShareholding}</td>

                                {/* LOCKED IN */}
                                <td>{item.lockedInShares}</td>
                                <td>{item.lockedInPercentage}</td>

                                {/* DEMATERIALIZED */}
                                <td>{item.dematerializedShares}</td>

                                {/* PAN */}
                                <td>{item.reasonForNotProvidingPAN}</td>

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

export default AnyOtherInstitutionsDomestic;