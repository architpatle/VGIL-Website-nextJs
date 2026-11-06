import React from "react";

const CATEGORY_DATA = {
    category1: "HUF",
    category2: "Clearing Members",
    category3: "LLP",
    category4: "LLP",

    categoryMoreThanOne: "More than 1 percentage of shareholding",

    shareholders: {
        category1: "82",
        category2: "4",
        category3: "6",
        category4: "1",
        total: "92",
    },

    fullyPaid: {
        category1: "316274",
        category2: "66000",
        category3: "494505",
        category4: "366505",
        total: "876779",
    },

    totalShares: {
        category1: "316274",
        category2: "66000",
        category3: "494505",
        category4: "366505",
        total: "876779",
    },

    shareholding: {
        category1: "1.27",
        category2: "0.27",
        category3: "1.99",
        category4: "1.47",
        total: "3.53",
    },

    votingClassX: {
        category1: "316274",
        category2: "66000",
        category3: "494505",
        category4: "366505",
        total: "876779",
    },

    votingTotal: {
        category1: "316274",
        category2: "66000",
        category3: "494505",
        category4: "366505",
        total: "876779",
    },

    votingPercentage: {
        category1: "1.27",
        category2: "0.27",
        category3: "1.99",
        category4: "1.47",
        total: "3.53",
    },

    fullyDiluted: {
        category1: "316274",
        category2: "66000",
        category3: "494505",
        category4: "366505",
        total: "876779",
    },

    dilutedShareholding: {
        category1: "1.21",
        category2: "0.25",
        category3: "1.89",
        category4: "1.4",
        total: "3.35",
    },

    dematerializedShares: {
        category1: "316274",
        category2: "66000",
        category3: "494505",
        category4: "366505",
        total: "876779",
    },

    subCategory1: {
        category1: "0",
        category2: "0",
        category3: "0",
        category4: "0",
        total: "0",
    },

    subCategory2: {
        category1: "0",
        category2: "0",
        category3: "0",
        category4: "0",
        total: "0",
    },

    subCategory3: {
        category1: "0",
        category2: "0",
        category3: "0",
        category4: "0",
        total: "0",
    },
};

function AnyOther() {
    return (
        <div className="summary-statement-wrapper any-other-wrapper">
            {/* Fixed title */}
            <div className="summary-statement-title">
                Any Other (specify)
            </div>

            {/* Scrollable table */}
            <div className="summary-statement-scroll">
                <table className="summary-statement-table any-other-table">
                    <tbody>
                        {/* =========================
                CATEGORY INFORMATION
            ========================= */}

                        <tr>
                            <td>Sr. No.</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Category</td>
                            <td>{CATEGORY_DATA.category1}</td>
                            <td>{CATEGORY_DATA.category2}</td>
                            <td>{CATEGORY_DATA.category3}</td>
                            <td>{CATEGORY_DATA.category4}</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Category / More than 1 percentage</td>
                            <td>Category</td>
                            <td>Category</td>
                            <td>Category</td>
                            <td>{CATEGORY_DATA.categoryMoreThanOne}</td>
                            <td></td>
                        </tr>

                        {/* =========================
                SHAREHOLDER INFORMATION
            ========================= */}

                        <tr>
                            <td>Name of the Shareholders (I)</td>

                            <td></td>

                            <td></td>

                            <td></td>

                            <td>
                                MINDSCOPE ADVISORS LLP
                            </td>

                            <td>
                                Click here to go back
                            </td>
                        </tr>

                        <tr>
                            <td>PAN (II)</td>

                            <td></td>

                            <td></td>

                            <td></td>

                            <td>
                                ABYFM4330Q
                            </td>

                            <td>
                                Total
                            </td>
                        </tr>

                        <tr>
                            <td>No. of Shareholders (I)</td>

                            <td>{CATEGORY_DATA.shareholders.category1}</td>

                            <td>{CATEGORY_DATA.shareholders.category2}</td>

                            <td>{CATEGORY_DATA.shareholders.category3}</td>

                            <td>{CATEGORY_DATA.shareholders.category4}</td>

                            <td>{CATEGORY_DATA.shareholders.total}</td>
                        </tr>

                        <tr>
                            <td>No. of fully paid up equity shares held (IV)</td>

                            <td>{CATEGORY_DATA.fullyPaid.category1}</td>

                            <td>{CATEGORY_DATA.fullyPaid.category2}</td>

                            <td>{CATEGORY_DATA.fullyPaid.category3}</td>

                            <td>{CATEGORY_DATA.fullyPaid.category4}</td>

                            <td>{CATEGORY_DATA.fullyPaid.total}</td>
                        </tr>

                        <tr>
                            <td>
                                Total nos. shares held (VII) = (IV)+(V)+(VI)
                            </td>

                            <td>{CATEGORY_DATA.totalShares.category1}</td>

                            <td>{CATEGORY_DATA.totalShares.category2}</td>

                            <td>{CATEGORY_DATA.totalShares.category3}</td>

                            <td>{CATEGORY_DATA.totalShares.category4}</td>

                            <td>{CATEGORY_DATA.totalShares.total}</td>
                        </tr>

                        <tr>
                            <td>
                                Shareholding as a % of total no. of shares
                                (calculated as per SCRR, 1957) (VIII) As a % of
                                (A+B+C2)
                            </td>

                            <td>{CATEGORY_DATA.shareholding.category1}</td>

                            <td>{CATEGORY_DATA.shareholding.category2}</td>

                            <td>{CATEGORY_DATA.shareholding.category3}</td>

                            <td>{CATEGORY_DATA.shareholding.category4}</td>

                            <td>{CATEGORY_DATA.shareholding.total}</td>
                        </tr>

                        {/* =========================
                VOTING RIGHTS
            ========================= */}

                        <tr className="any-other-section-row">
                            <td colSpan="6">
                                Number of Voting Rights held in each class of securities (IX)
                            </td>
                        </tr>

                        <tr>
                            <td>Class eg: X</td>

                            <td>{CATEGORY_DATA.votingClassX.category1}</td>

                            <td>{CATEGORY_DATA.votingClassX.category2}</td>

                            <td>{CATEGORY_DATA.votingClassX.category3}</td>

                            <td>{CATEGORY_DATA.votingClassX.category4}</td>

                            <td>{CATEGORY_DATA.votingClassX.total}</td>
                        </tr>

                        <tr>
                            <td>Total</td>

                            <td>{CATEGORY_DATA.votingTotal.category1}</td>

                            <td>{CATEGORY_DATA.votingTotal.category2}</td>

                            <td>{CATEGORY_DATA.votingTotal.category3}</td>

                            <td>{CATEGORY_DATA.votingTotal.category4}</td>

                            <td>{CATEGORY_DATA.votingTotal.total}</td>
                        </tr>

                        <tr>
                            <td>Total as a % of Total Voting rights</td>

                            <td>{CATEGORY_DATA.votingPercentage.category1}</td>

                            <td>{CATEGORY_DATA.votingPercentage.category2}</td>

                            <td>{CATEGORY_DATA.votingPercentage.category3}</td>

                            <td>{CATEGORY_DATA.votingPercentage.category4}</td>

                            <td>{CATEGORY_DATA.votingPercentage.total}</td>
                        </tr>

                        {/* =========================
                FULLY DILUTED
            ========================= */}

                        <tr>
                            <td>
                                Total No. of shares on fully diluted basis
                                (including warrants, ESOP, Convertible Securities
                                etc.) (XI)=(VII+X)
                            </td>

                            <td>{CATEGORY_DATA.fullyDiluted.category1}</td>

                            <td>{CATEGORY_DATA.fullyDiluted.category2}</td>

                            <td>{CATEGORY_DATA.fullyDiluted.category3}</td>

                            <td>{CATEGORY_DATA.fullyDiluted.category4}</td>

                            <td>{CATEGORY_DATA.fullyDiluted.total}</td>
                        </tr>

                        <tr>
                            <td>
                                Shareholding , as a % assuming full conversion of
                                convertible securities ( as a percentage of diluted
                                share capital) (XII)=(VII)+(X) As a % of (A+B+C2)
                            </td>

                            <td>
                                {CATEGORY_DATA.dilutedShareholding.category1}
                            </td>

                            <td>
                                {CATEGORY_DATA.dilutedShareholding.category2}
                            </td>

                            <td>
                                {CATEGORY_DATA.dilutedShareholding.category3}
                            </td>

                            <td>
                                {CATEGORY_DATA.dilutedShareholding.category4}
                            </td>

                            <td>
                                {CATEGORY_DATA.dilutedShareholding.total}
                            </td>
                        </tr>

                        {/* =========================
                DEMATERIALIZED SHARES
            ========================= */}

                        <tr>
                            <td>
                                Number of equity shares held in dematerialized form (XIV)
                            </td>

                            <td>
                                {CATEGORY_DATA.dematerializedShares.category1}
                            </td>

                            <td>
                                {CATEGORY_DATA.dematerializedShares.category2}
                            </td>

                            <td>
                                {CATEGORY_DATA.dematerializedShares.category3}
                            </td>

                            <td>
                                {CATEGORY_DATA.dematerializedShares.category4}
                            </td>

                            <td>
                                {CATEGORY_DATA.dematerializedShares.total}
                            </td>
                        </tr>

                        {/* =========================
                PAN
            ========================= */}

                        <tr className="any-other-section-row">
                            <td colSpan="6">
                                Reason for not providing PAN
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Reason for not providing PAN
                            </td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        {/* =========================
                SUB-CATEGORIZATION
            ========================= */}

                        <tr className="any-other-section-row">
                            <td colSpan="6">
                                Sub-categorization of shares
                            </td>
                        </tr>

                        <tr className="any-other-section-row">
                            <td colSpan="6">
                                Shareholding (No. of shares) under
                            </td>
                        </tr>

                        <tr>
                            <td>Sub-category (i)</td>

                            <td>{CATEGORY_DATA.subCategory1.category1}</td>

                            <td>{CATEGORY_DATA.subCategory1.category2}</td>

                            <td>{CATEGORY_DATA.subCategory1.category3}</td>

                            <td>{CATEGORY_DATA.subCategory1.category4}</td>

                            <td>{CATEGORY_DATA.subCategory1.total}</td>
                        </tr>

                        <tr>
                            <td>Sub-category (ii)</td>

                            <td>{CATEGORY_DATA.subCategory2.category1}</td>

                            <td>{CATEGORY_DATA.subCategory2.category2}</td>

                            <td>{CATEGORY_DATA.subCategory2.category3}</td>

                            <td>{CATEGORY_DATA.subCategory2.category4}</td>

                            <td>{CATEGORY_DATA.subCategory2.total}</td>
                        </tr>

                        <tr>
                            <td>Sub-category (iii)</td>

                            <td>{CATEGORY_DATA.subCategory3.category1}</td>

                            <td>{CATEGORY_DATA.subCategory3.category2}</td>

                            <td>{CATEGORY_DATA.subCategory3.category3}</td>

                            <td>{CATEGORY_DATA.subCategory3.category4}</td>

                            <td>{CATEGORY_DATA.subCategory3.total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AnyOther;