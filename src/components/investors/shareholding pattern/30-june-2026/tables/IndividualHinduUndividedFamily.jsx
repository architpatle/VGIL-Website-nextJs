import React from "react";

const SHAREHOLDERS = [
    {
        srNo: "1",
        name: "AVINASH NARAYANRAO SHENDE",
        pan: "ABJPS2570H",
        fullyPaid: "7480698",
        totalShares: "7480698",
        shareholding: "30.08",
        votingClassX: "7480698",
        votingTotal: "7480698",
        votingPercentage: "30.08",
        outstandingWarrants: "496716",
        totalUnderlying: "496716",
        fullyDiluted: "7977414",
        dilutedShareholding: "30.55",
        lockedInShares: "7480698",
        lockedInPercentage: "100",
        dematerializedShares: "7480698",
        shareholderType: "Promoter",
    },
    {
        srNo: "2",
        name: "SACHIN PURUSHOTTAM PANDE",
        pan: "AAMPP7720L",
        fullyPaid: "7480698",
        totalShares: "7480698",
        shareholding: "30.08",
        votingClassX: "7480698",
        votingTotal: "7480698",
        votingPercentage: "30.08",
        outstandingWarrants: "496716",
        totalUnderlying: "496716",
        fullyDiluted: "7977414",
        dilutedShareholding: "30.55",
        lockedInShares: "7480698",
        lockedInPercentage: "100",
        dematerializedShares: "7480698",
        shareholderType: "Promoter",
    },
    {
        srNo: "3",
        name: "SHILPA AVINASH SHENDE",
        pan: "AWEPS5727L",
        fullyPaid: "600120",
        totalShares: "600120",
        shareholding: "2.41",
        votingClassX: "600120",
        votingTotal: "600120",
        votingPercentage: "2.41",
        outstandingWarrants: "75000",
        totalUnderlying: "75000",
        fullyDiluted: "675120",
        dilutedShareholding: "2.59",
        lockedInShares: "600120",
        lockedInPercentage: "100",
        dematerializedShares: "600120",
        shareholderType: "Promoter Group",
    },
    {
        srNo: "4",
        name: "SAMPADA SACHIN PANDE",
        pan: "AKNPP2343Q",
        fullyPaid: "600120",
        totalShares: "600120",
        shareholding: "2.41",
        votingClassX: "600120",
        votingTotal: "600120",
        votingPercentage: "2.41",
        outstandingWarrants: "75000",
        totalUnderlying: "75000",
        fullyDiluted: "675120",
        dilutedShareholding: "2.59",
        lockedInShares: "600120",
        lockedInPercentage: "100",
        dematerializedShares: "600120",
        shareholderType: "Promoter Group",
    },
    {
        srNo: "5",
        name: "SAMEER PRAMOD SALPEKAR",
        pan: "AWGPS9397G",
        fullyPaid: "2568",
        totalShares: "2568",
        shareholding: "0.01",
        votingClassX: "2568",
        votingTotal: "2568",
        votingPercentage: "0.01",
        outstandingWarrants: "0",
        totalUnderlying: "0",
        fullyDiluted: "2568",
        dilutedShareholding: "0.01",
        lockedInShares: "0",
        lockedInPercentage: "0",
        dematerializedShares: "2568",
        shareholderType: "Promoter Group",
    },
    {
        srNo: "6",
        name: "SAMRUDDHI SACHIN PANDE",
        pan: "GPRPP2028R",
        fullyPaid: "0",
        totalShares: "0",
        shareholding: "0",
        votingClassX: "0",
        votingTotal: "0",
        votingPercentage: "0",
        outstandingWarrants: "50000",
        totalUnderlying: "50000",
        fullyDiluted: "50000",
        dilutedShareholding: "0.19",
        lockedInShares: "0",
        lockedInPercentage: "0",
        dematerializedShares: "0",
        shareholderType: "Promoter Group",
    },
    {
        srNo: "7",
        name: "TANMAY AVINASH SHENDE",
        pan: "MWIPS9847P",
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
    },
];

const FIELD_LABELS = {
    srNo: "Sr. No.",
    name: "Name of the Shareholders (I)",
    pan: "PAN (II)",
    fullyPaid: "No. of fully paid up equity shares held (IV)",
    totalShares: "Total nos. shares held (VII) = (IV)+(V)+(VI)",
    shareholding:
        "Shareholding as a % of total no. of shares (calculated as per SCRR, 1957) (VIII) As a % of (A+B+C2)",
    votingClassX: "Class eg:X",
    votingTotal: "Total",
    votingPercentage: "Total as a % of Total Voting rights",
    outstandingWarrants:
        "No. of Shares Underlying Outstanding Warrants (XB)",
    totalUnderlying:
        "No. of Shares Underlying Outstanding convertible securities, No. of Warrants and ESOP etc. (X) = (XA+XB+XC)",
    fullyDiluted:
        "Total No. of shares on fully diluted basis (including warrants and Convertible Securities etc.) (XI)=(VII+X)",
    dilutedShareholding:
        "Shareholding as a % assuming full conversion of convertible securities ( as a percentage of diluted share capital) (XII) = (VII)+(X) As a % of (A+B+C2)",
    lockedInShares: "No. (a)",
    lockedInPercentage: "As a % of total Shares held (b)",
    dematerializedShares:
        "Number of equity shares held in dematerialized form (XVIII)",
    shareholderType: "Shareholder type",
};

function IndividualHinduUndividedFamily() {
    const renderRow = (label, field) => (
        <tr key={field}>
            <td className="individual-shareholder-label">{label}</td>

            {SHAREHOLDERS.map((shareholder) => (
                <td key={shareholder.srNo}>
                    {shareholder[field]}
                </td>
            ))}
        </tr>
    );

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
                        {/* Basic information */}
                        {renderRow(FIELD_LABELS.srNo, "srNo")}

                        {renderRow(FIELD_LABELS.name, "name")}

                        {renderRow(FIELD_LABELS.pan, "pan")}

                        {renderRow(
                            FIELD_LABELS.fullyPaid,
                            "fullyPaid"
                        )}

                        {renderRow(
                            FIELD_LABELS.totalShares,
                            "totalShares"
                        )}

                        {renderRow(
                            FIELD_LABELS.shareholding,
                            "shareholding"
                        )}

                        {/* Voting rights section */}
                        <tr className="individual-shareholder-section-row">
                            <td colSpan="8">
                                Number of Voting Rights held in each class of securities (IX)
                            </td>
                        </tr>

                        {renderRow(FIELD_LABELS.votingClassX, "votingClassX")}

                        {renderRow(FIELD_LABELS.votingTotal, "votingTotal")}

                        {renderRow(
                            FIELD_LABELS.votingPercentage,
                            "votingPercentage"
                        )}

                        {/* Outstanding securities */}
                        {renderRow(
                            FIELD_LABELS.outstandingWarrants,
                            "outstandingWarrants"
                        )}

                        {renderRow(
                            FIELD_LABELS.totalUnderlying,
                            "totalUnderlying"
                        )}

                        {renderRow(
                            FIELD_LABELS.fullyDiluted,
                            "fullyDiluted"
                        )}

                        {renderRow(
                            FIELD_LABELS.dilutedShareholding,
                            "dilutedShareholding"
                        )}

                        {/* Locked-in shares section */}
                        <tr className="individual-shareholder-section-row">
                            <td colSpan="8">
                                Number of Locked in shares (XIII)
                            </td>
                        </tr>

                        {renderRow(
                            FIELD_LABELS.lockedInShares,
                            "lockedInShares"
                        )}

                        {renderRow(
                            FIELD_LABELS.lockedInPercentage,
                            "lockedInPercentage"
                        )}

                        {/* Dematerialized shares */}
                        {renderRow(
                            FIELD_LABELS.dematerializedShares,
                            "dematerializedShares"
                        )}

                        {/* PAN section */}
                        <tr className="individual-shareholder-section-row">
                            <td colSpan="8">
                                Reason for not providing PAN
                            </td>
                        </tr>

                        <tr>
                            <td className="individual-shareholder-label">
                                Reason for not providing PAN
                            </td>

                            {SHAREHOLDERS.map((shareholder) => (
                                <td key={shareholder.srNo}></td>
                            ))}
                        </tr>

                        {/* Shareholder type */}
                        {renderRow(
                            FIELD_LABELS.shareholderType,
                            "shareholderType"
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default IndividualHinduUndividedFamily;