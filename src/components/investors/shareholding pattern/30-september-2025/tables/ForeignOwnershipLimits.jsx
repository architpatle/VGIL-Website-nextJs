import React from "react";

const FOREIGN_OWNERSHIP_LIMITS_DATA = [
    {
        particular: "As on shareholding date",
        approvedLimits: "0",
        limitsUtilized: "3.93",
    },
    {
        particular: "As on the end of previous 1st quarter",
        approvedLimits: "0",
        limitsUtilized: "4.52",
    },
    {
        particular: "As on the end of previous 2nd quarter",
        approvedLimits: "0",
        limitsUtilized: "0.72",
    },
    {
        particular: "As on the end of previous 3rd quarter",
        approvedLimits: "0",
        limitsUtilized: "0.72",
    },
    {
        particular: "As on the end of previous 4th quarter",
        approvedLimits: "0",
        limitsUtilized: "0.62",
    },
];

function ForeignOwnershipLimits() {
    return (
        <div className="shareholding-table-container">

            <table className="shareholding-information-table foreign-ownership-table">

                <thead>

                    {/* TABLE TITLE */}
                    <tr>
                        <th colSpan="3">
                            Table VI - Statement showing foreign ownership limits
                        </th>
                    </tr>

                    {/* COLUMN HEADINGS */}
                    <tr>
                        <th className="shareholding-light-highlight">
                            Particular
                        </th>

                        <th className="shareholding-light-highlight">
                            Approved limits (%)
                        </th>

                        <th className="shareholding-light-highlight">
                            Limits utilized (%)
                        </th>
                    </tr>

                </thead>

                <tbody>

                    {FOREIGN_OWNERSHIP_LIMITS_DATA.map((item, index) => (
                        <tr key={index}>

                            <td className="shareholding-light-highlight">
                                {item.particular}
                            </td>

                            <td className="shareholding-light-highlight">
                                {item.approvedLimits}
                            </td>

                            <td className="shareholding-light-highlight">
                                {item.limitsUtilized}
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default ForeignOwnershipLimits;