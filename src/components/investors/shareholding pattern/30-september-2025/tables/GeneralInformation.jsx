import React from "react";

function GeneralInformation() {
    return (
        <div className="shareholding-table-container">

            <table className="shareholding-information-table">

                <thead>

                    {/* TABLE TITLE */}
                    <tr>
                        <th colSpan="2">
                            General information about company
                        </th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <th className="shareholding-light-highlight">
                            Scrip code
                        </th>
                        <td>000000</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            NSE Symbol
                        </th>
                        <td>VGINFOTECH</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            MSEI Symbol
                        </th>
                        <td>NOTLISTED</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            ISIN
                        </th>
                        <td>INE0VRH01015</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            Name of the company
                        </th>
                        <td>VIRTUAL GALAXY INFOTECH LIMITED</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            Whether company is SME
                        </th>
                        <td>Yes</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            Class of Security
                        </th>
                        <td>Equity Shares</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            Type of report
                        </th>
                        <td>Half yearly</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            Quarter Ended / Half year ended/Date of Report (For Prelisting / Allotment)
                        </th>
                        <td>30-09-2025</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            Date of allotment / extinguishment (in case Capital Restructuring selected) / Listing Date
                        </th>
                        <td></td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            Shareholding pattern filed under
                        </th>
                        <td>Regulation 31 (1) (b)</td>
                    </tr>

                    <tr>
                        <th className="shareholding-light-highlight">
                            Whether the listed entity is Public Sector Undertaking (PSU)?
                        </th>
                        <td>No</td>
                    </tr>

                </tbody>

            </table>

        </div>
    );
}

export default GeneralInformation;