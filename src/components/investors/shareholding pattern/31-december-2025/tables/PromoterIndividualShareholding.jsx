import React from "react";

const SHAREHOLDERS = [
    {
        srNo: 1,
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
        fullyPaidShares: "2568",
        totalShares: "2568",
        shareholding: "0.01",
        votingRights: "2568",
        votingTotal: "2568",
        votingPercentage: "0.01",
        dilutedShares: "2568",
        dilutedShareholding: "0.01",
        lockedShares: "2568",
        lockedPercentage: "100",
        dematerializedShares: "2568",
        shareholderType: "Promoter Group",
    },
    {
        srNo: 2,
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
        fullyPaidShares: "7480698",
        totalShares: "7480698",
        shareholding: "30.08",
        votingRights: "7480698",
        votingTotal: "7480698",
        votingPercentage: "30.08",
        dilutedShares: "7480698",
        dilutedShareholding: "30.08",
        lockedShares: "7445698",
        lockedPercentage: "99.53",
        dematerializedShares: "7480698",
        shareholderType: "Promoter",
    },
    {
        srNo: 3,
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
        fullyPaidShares: "600120",
        totalShares: "600120",
        shareholding: "2.41",
        votingRights: "600120",
        votingTotal: "600120",
        votingPercentage: "2.41",
        dilutedShares: "600120",
        dilutedShareholding: "2.41",
        lockedShares: "600120",
        lockedPercentage: "100",
        dematerializedShares: "600120",
        shareholderType: "Promoter Group",
    },
    {
        srNo: 4,
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
        fullyPaidShares: "7480698",
        totalShares: "7480698",
        shareholding: "30.08",
        votingRights: "7480698",
        votingTotal: "7480698",
        votingPercentage: "30.08",
        dilutedShares: "7480698",
        dilutedShareholding: "30.08",
        lockedShares: "7445698",
        lockedPercentage: "99.53",
        dematerializedShares: "7480698",
        shareholderType: "Promoter",
    },
    {
        srNo: 5,
        name: (
            <>
                SAMPADA
                <br />
                SACHIN PANDE
            </>
        ),
        pan: "AKNPP2343Q",
        fullyPaidShares: "600120",
        totalShares: "600120",
        shareholding: "2.41",
        votingRights: "600120",
        votingTotal: "600120",
        votingPercentage: "2.41",
        dilutedShares: "600120",
        dilutedShareholding: "2.41",
        lockedShares: "600120",
        lockedPercentage: "100",
        dematerializedShares: "600120",
        shareholderType: "Promoter Group",
    },
];

function PromoterIndividualShareholding() {
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
                                Click here to
                                <br />
                                go back
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
                                    {shareholder.fullyPaidShares}
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
                                (V)+ (VI)
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
                                    {shareholder.votingRights}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Total Voting */}
                        <tr>
                            <th>Total</th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.votingTotal}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Total Voting Percentage */}
                        <tr>
                            <th>
                                Total as a % of
                                <br />
                                Total Voting
                                <br />
                                rights
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
                                Total No. of
                                <br />
                                shares on fully
                                <br />
                                diluted basis
                                <br />
                                (including
                                <br />
                                warrants and
                                <br />
                                Convertible
                                <br />
                                Securities etc.)
                                <br />
                                (XI)=(VII+X)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.dilutedShares}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Diluted Shareholding */}
                        <tr>
                            <th>
                                Shareholding ,
                                <br />
                                as a %
                                <br />
                                assuming full
                                <br />
                                conversion of
                                <br />
                                convertible
                                <br />
                                securities ( as
                                <br />
                                a percentage
                                <br />
                                of diluted
                                <br />
                                share capital)
                                <br />
                                (XII)= (VII)+(X)
                                <br />
                                As a % of
                                <br />
                                (A+B+C2)
                            </th>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.dilutedShareholding}
                                </td>
                            ))}

                            <td>65</td>
                        </tr>

                        {/* Locked Shares Section */}
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
                                As a % of total
                                <br />
                                Shares held (b)
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

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}>
                                    {shareholder.dematerializedShares}
                                </td>
                            ))}

                            <td>16164204</td>
                        </tr>

                        {/* Reason Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="7">
                                Reason for not providing PAN
                            </td>
                        </tr>

                        {/* Reason */}
                        <tr>
                            <th>
                                Reason for not
                                <br />
                                providing PAN
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

export default PromoterIndividualShareholding;