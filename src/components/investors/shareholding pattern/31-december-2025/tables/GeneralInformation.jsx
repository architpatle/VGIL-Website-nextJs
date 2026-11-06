import React from "react";

const GENERAL_INFORMATION = [
    {
        label: "Scrip code",
        value: "000000",
    },
    {
        label: "NSE Symbol",
        value: "VGINFOTECH",
    },
    {
        label: "MSEI Symbol",
        value: "NOTLISTED",
    },
    {
        label: "ISIN",
        value: "INE0VRH01015",
    },
    {
        label: "Name of the company",
        value: "Virtual Galaxy Infotech Limited",
    },
    {
        label: "Whether company is SME",
        value: "Yes",
    },
    {
        label: "Class of Security",
        value: "Equity Shares",
    },
    {
        label: "Type of report",
        value: "Quarterly",
    },
    {
        label:
            "Quarter Ended / Half year ended/Date of Report (For Prelisting / Allotment)",
        value: "31-12-2025",
    },
    {
        label:
            "Date of allotment / extinguishment (in case Capital Restructuring selected) / Listing Date",
        value: "",
    },
    {
        label: "Shareholding pattern filed under",
        value: "Regulation 31 (1) (b)",
    },
    {
        label:
            "Whether the listed entity is Public Sector Undertaking (PSU)?",
        value: "No",
    },
];

function GeneralInformation() {
    return (
        <div className="general-information-wrapper">
            <div className="general-information-title">
                General information about company
            </div>

            <div className="general-information-table-wrapper">
                <table className="general-information-table">
                    <tbody>
                        {GENERAL_INFORMATION.map((item, index) => (
                            <tr key={index}>
                                <td className="general-information-label">
                                    {item.label}
                                </td>

                                <td className="general-information-value">
                                    {item.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GeneralInformation;