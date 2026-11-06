import React from "react";

const SHAREHOLDERS = [
    {
        srNo: "1",
        name: (
            <>
                SAMEER
                <br />
                PRAMOD
                <br />
                SALPEKAR
            </>
        ),
        pan: "AWGPS9397G",
        fullyPaid: "2568",
        totalShares: "2568",
        shareholding: "0.01",
        votingClassX: "2568",
        votingTotal: "2568",
        votingPercentage: "0.01",
        fullyDiluted: "2568",
        dilutedShareholding: "0.01",
        lockedShares: "2568",
        lockedPercentage: "100",
        dematerializedShares: "2568",
        shareholderType: "Promoter Group",
    },
    {
        srNo: "2",
        name: (
            <>
                AVINASH
                <br />
                NARAYANRAO
                <br />
                SHENDE
            </>
        ),
        pan: "ABJPS2570H",
        fullyPaid: "7480698",
        totalShares: "7480698",
        shareholding: "30.08",
        votingClassX: "7480698",
        votingTotal: "7480698",
        votingPercentage: "30.08",
        fullyDiluted: "7480698",
        dilutedShareholding: "30.08",
        lockedShares: "7445698",
        lockedPercentage: "99.53",
        dematerializedShares: "7480698",
        shareholderType: "Promoter",
    },
    {
        srNo: "3",
        name: (
            <>
                SHILPA
                <br />
                AVINASH
                <br />
                SHENDE
            </>
        ),
        pan: "AWEPS5727L",
        fullyPaid: "600120",
        totalShares: "600120",
        shareholding: "2.41",
        votingClassX: "600120",
        votingTotal: "600120",
        votingPercentage: "2.41",
        fullyDiluted: "600120",
        dilutedShareholding: "2.41",
        lockedShares: "600120",
        lockedPercentage: "100",
        dematerializedShares: "600120",
        shareholderType: "Promoter Group",
    },
    {
        srNo: "4",
        name: (
            <>
                SACHIN
                <br />
                PURUSHOTTAM
                <br />
                PANDE
            </>
        ),
        pan: "AAMPP7720L",
        fullyPaid: "7480698",
        totalShares: "7480698",
        shareholding: "30.08",
        votingClassX: "7480698",
        votingTotal: "7480698",
        votingPercentage: "30.08",
        fullyDiluted: "7480698",
        dilutedShareholding: "30.08",
        lockedShares: "7445698",
        lockedPercentage: "99.53",
        dematerializedShares: "7480698",
        shareholderType: "Promoter",
    },
    {
        srNo: "5",
        name: (
            <>
                SAMPADA
                <br />
                SACHIN
                <br />
                PANDE
            </>
        ),
        pan: "AKNPP2343Q",
        fullyPaid: "600120",
        totalShares: "600120",
        shareholding: "2.41",
        votingClassX: "600120",
        votingTotal: "600120",
        votingPercentage: "2.41",
        fullyDiluted: "600120",
        dilutedShareholding: "2.41",
        lockedShares: "600120",
        lockedPercentage: "100",
        dematerializedShares: "600120",
        shareholderType: "Promoter Group",
    },
];

function IndividualsHinduUndividedFamily() {
    return (
        <div className="shareholder-detail-wrapper">

            {/* Fixed Table Title */}
            <div className="shareholder-detail-title">
                Individuals/Hindu undivided Family
            </div>

            {/* Scrollable Table */}
            <div className="shareholder-detail-scroll">

                <table className="shareholder-detail-table">

                    <tbody>

                        {/* Sr. No. */}
                        <tr>
                            <th>Sr. No.</th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.srNo}
                                </td>
                            ))}

                            <td></td>
                        </tr>

                        {/* Name of Shareholders */}
                        <tr>
                            <th>
                                Name of the
                                <br />
                                Shareholders
                                <br />
                                (I)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.name}
                                </td>
                            ))}

                            <td>
                                Click here
                                <br />
                                to go back
                            </td>
                        </tr>

                        {/* PAN */}
                        <tr>
                            <th>PAN (II)</th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.pan}
                                </td>
                            ))}

                            <td>Total</td>
                        </tr>

                        {/* Fully Paid Equity Shares */}
                        <tr>
                            <th>
                                No. of fully
                                <br />
                                paid up equity
                                <br />
                                shares held
                                <br />
                                (IV)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.fullyPaid}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Total Shares */}
                        <tr>
                            <th>
                                Total nos.
                                <br />
                                shares held
                                <br />
                                (VII) = (IV)+
                                <br />
                                (V)+(VI)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.totalShares}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Shareholding */}
                        <tr>
                            <th>
                                Shareholding
                                <br />
                                as a % of total
                                <br />
                                no. of shares
                                <br />
                                (calculated as
                                <br />
                                per SCRR,
                                <br />
                                1957) (VIII) As
                                <br />
                                a % of
                                <br />
                                (A+B+C2)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.shareholding}
                                </td>
                            ))}

                            <td>65</td>
                        </tr>

                        {/* Voting Rights Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="7">
                                Number of Voting Rights held in each class of securities (IX)
                            </td>
                        </tr>

                        {/* Class X */}
                        <tr>
                            <th>Class eg:X</th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.votingClassX}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Total Voting Rights */}
                        <tr>
                            <th>Total</th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.votingTotal}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Voting Percentage */}
                        <tr>
                            <th>
                                Total as a % of Total Voting rights
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.votingPercentage}
                                </td>
                            ))}

                            <td>65</td>
                        </tr>

                        {/* Fully Diluted Shares */}
                        <tr>
                            <th>
                                Total No. of shares on fully diluted basis
                                (including warrants and Convertible Securities
                                etc.) (XI)=(VII+X)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.fullyDiluted}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Diluted Shareholding */}
                        <tr>
                            <th>
                                Shareholding , as a %
                                <br />
                                assuming full conversion of
                                <br />
                                convertible securities ( as a
                                <br />
                                percentage of diluted share
                                <br />
                                capital) (XII)= (VII)+(X)
                                <br />
                                As a % of (A+B+C2)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.dilutedShareholding}
                                </td>
                            ))}

                            <td>65</td>
                        </tr>

                        {/* Locked-in Shares Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="7">
                                Number of Locked in shares (XIII)
                            </td>
                        </tr>

                        {/* Locked Shares */}
                        <tr>
                            <th>No. (a)</th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.lockedShares}
                                </td>
                            ))}

                            <td>16094204</td>
                        </tr>

                        {/* Locked Percentage */}
                        <tr>
                            <th>
                                As a % of total Shares held (b)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.lockedPercentage}
                                </td>
                            ))}

                            <td>99.57</td>
                        </tr>

                        {/* Dematerialized Shares */}
                        <tr>
                            <th>
                                Number of equity shares held in
                                dematerialized form (XVIII)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.dematerializedShares}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Reason for PAN Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="7">
                                Reason for not providing PAN
                            </td>
                        </tr>

                        <tr>
                            <th>
                                Reason for not providing PAN
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}></td>
                            ))}

                            <td></td>
                        </tr>

                        {/* Shareholder Type */}
                        <tr>
                            <th>
                                Shareholder
                                <br />
                                type
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.shareholderType}
                                </td>
                            ))}

                            <td></td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </div>
    );
}

export default IndividualsHinduUndividedFamily;