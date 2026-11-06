import React from "react";

const GENERAL_INFORMATION_DATA = [
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
        value: "Pre-listing",
    },
    {
        label:
            "Quarter Ended / Half year ended/Date of Report (For Prelisting / Allotment)",
        value: "16-May-2025",
    },
    {
        label:
            "Date of allotment / extinguishment (in case Capital Restructuring selected) / Listing Date",
        value: "19-May-2025",
    },
    {
        label: "Shareholding pattern filed under",
        value: "Regulation 31 (1) (a)",
    },
    {
        label:
            "Whether the listed entity is Public Sector Undertaking (PSU)?",
        value: "No",
    },
];

function GeneralInformation() {
    return (
        <div className="shareholding-table-container">

            <table className="shareholding-information-table">

                <thead>
                    <tr>
                        <th colSpan="2">
                            General Information About Company
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {GENERAL_INFORMATION_DATA.map((item, index) => (
                        <tr key={index}>

                            <td className="shareholding-light-highlight">
                                {item.label}
                            </td>

                            <td>
                                {item.value}
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default GeneralInformation;