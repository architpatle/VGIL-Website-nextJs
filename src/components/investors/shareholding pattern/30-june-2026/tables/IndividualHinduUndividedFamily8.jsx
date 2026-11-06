import React from "react";

const SHAREHOLDER = {
    srNo: "8",
    name: "SIDDHANTI AVINASH SHENDE",
    pan: "MWIPS9848C",

    fullyPaid: "0",
    totalShares: "0",
    shareholding: "0",

    votingClassX: "0",
    votingTotal: "0",
    votingPercentage: "0",

    outstandingWarrants: "25000",
    totalUnderlying: "25000",
    fullyDiluted: "25000",

    dilutedShareholding: "0.1",

    lockedInShares: "0",
    lockedInPercentage: "0",

    dematerializedShares: "0",

    shareholderType: "Promoter Group",
};

const TOTAL = {
    fullyPaid: "16164204",
    totalShares: "16164204",
    shareholding: "65",

    votingClassX: "16164204",
    votingTotal: "16164204",
    votingPercentage: "65",

    outstandingWarrants: "1243432",
    totalUnderlying: "1243432",
    fullyDiluted: "17407636",

    dilutedShareholding: "66.67",

    lockedInShares: "16161636",
    lockedInPercentage: "99.98",

    dematerializedShares: "16164204",
};

function IndividualHinduUndividedFamily8() {
    return (
        <div className="summary-statement-wrapper individual-shareholder-wrapper">
            {/* Fixed title */}
            <div className="summary-statement-title">
                Individuals/Hindu undivided Family
            </div>

            {/* Scrollable table */}
            <div className="summary-statement-scroll">
                <table className="summary-statement-table individual-shareholder-table">
                    <tbody>
                        {/* =========================
                BASIC INFORMATION
            ========================= */}

                        <tr>
                            <td className="individual-shareholder-label">
                                Sr. No.
                            </td>

                            <td>{SHAREHOLDER.srNo}</td>

                            <td></td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Name of the Shareholders (I)
                            </td>

                            <td>{SHAREHOLDER.name}</td>

                            <td>Click here to go back</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                PAN (II)
                            </td>

                            <td>{SHAREHOLDER.pan}</td>

                            <td>Total</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                No. of fully paid up equity shares held (IV)
                            </td>

                            <td>{SHAREHOLDER.fullyPaid}</td>

                            <td>{TOTAL.fullyPaid}</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Total nos. shares held (VII) = (IV)+(V)+(VI)
                            </td>

                            <td>{SHAREHOLDER.totalShares}</td>

                            <td>{TOTAL.totalShares}</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Shareholding as a % of total no. of shares (calculated as per
                                SCRR, 1957) (VIII) As a % of (A+B+C2)
                            </td>

                            <td>{SHAREHOLDER.shareholding}</td>

                            <td>{TOTAL.shareholding}</td>
                        </tr>

                        {/* =========================
                VOTING RIGHTS
            ========================= */}

                        <tr className="individual-shareholder-section-row">
                            <td colSpan="3">
                                Number of Voting Rights held in each class of securities (IX)
                            </td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Class eg:X
                            </td>

                            <td>{SHAREHOLDER.votingClassX}</td>

                            <td>{TOTAL.votingClassX}</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Total
                            </td>

                            <td>{SHAREHOLDER.votingTotal}</td>

                            <td>{TOTAL.votingTotal}</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Total as a % of Total Voting rights
                            </td>

                            <td>{SHAREHOLDER.votingPercentage}</td>

                            <td>{TOTAL.votingPercentage}</td>
                        </tr>

                        {/* =========================
                OUTSTANDING SECURITIES
            ========================= */}

                        <tr>
                            <td className="individual-shareholder-label">
                                No. of Shares Underlying Outstanding Warrants (XB)
                            </td>

                            <td>{SHAREHOLDER.outstandingWarrants}</td>

                            <td>{TOTAL.outstandingWarrants}</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                No. of Shares Underlying Outstanding convertible securities,
                                No. of Warrants and ESOP etc. (X) = (XA+XB+XC)
                            </td>

                            <td>{SHAREHOLDER.totalUnderlying}</td>

                            <td>{TOTAL.totalUnderlying}</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Total No. of shares on fully diluted basis (including warrants
                                and Convertible Securities etc.) (XI)=(VII+X)
                            </td>

                            <td>{SHAREHOLDER.fullyDiluted}</td>

                            <td>{TOTAL.fullyDiluted}</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Shareholding , as a % assuming full conversion of convertible
                                securities ( as a percentage of diluted share capital) (XII) =
                                (VII)+(X) As a % of (A+B+C2)
                            </td>

                            <td>{SHAREHOLDER.dilutedShareholding}</td>

                            <td>{TOTAL.dilutedShareholding}</td>
                        </tr>

                        {/* =========================
                LOCKED-IN SHARES
            ========================= */}

                        <tr className="individual-shareholder-section-row">
                            <td colSpan="3">
                                Number of Locked in shares (XIII)
                            </td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                No. (a)
                            </td>

                            <td>{SHAREHOLDER.lockedInShares}</td>

                            <td>{TOTAL.lockedInShares}</td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                As a % of total Shares held (b)
                            </td>

                            <td>{SHAREHOLDER.lockedInPercentage}</td>

                            <td>{TOTAL.lockedInPercentage}</td>
                        </tr>

                        {/* =========================
                DEMATERIALIZED SHARES
            ========================= */}

                        <tr>
                            <td className="individual-shareholder-label">
                                Number of equity shares held in dematerialized form (XVIII)
                            </td>

                            <td>{SHAREHOLDER.dematerializedShares}</td>

                            <td>{TOTAL.dematerializedShares}</td>
                        </tr>

                        {/* =========================
                PAN
            ========================= */}

                        <tr className="individual-shareholder-section-row">
                            <td colSpan="3">
                                Reason for not providing PAN
                            </td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Reason for not providing PAN
                            </td>

                            <td></td>

                            <td></td>
                        </tr>

                        {/* =========================
                SHAREHOLDER TYPE
            ========================= */}

                        <tr>
                            <td className="individual-shareholder-label">
                                Shareholder type
                            </td>

                            <td>{SHAREHOLDER.shareholderType}</td>

                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default IndividualHinduUndividedFamily8;