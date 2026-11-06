import React from "react";

const FOREIGN_OWNERSHIP_LIMITS_DATA = [
    {
        particular: "As on shareholding date",
        approvedLimits: "100",
        limitsUtilized: "6.41",
    },
    {
        particular: "As on the end of previous 1st quarter",
        approvedLimits: "100",
        limitsUtilized: "0",
    },
    {
        particular: "As on the end of previous 2nd quarter",
        approvedLimits: "100",
        limitsUtilized: "0",
    },
    {
        particular: "As on the end of previous 3rd quarter",
        approvedLimits: "100",
        limitsUtilized: "0",
    },
    {
        particular: "As on the end of previous 4th quarter",
        approvedLimits: "100",
        limitsUtilized: "0",
    },
];

function ForeignOwnershipLimits() {
    return (
        <div className="shareholding-table-container">
            <table className="shareholding-information-table foreign-ownership-table">
                <thead>
                    <tr>
                        <th colSpan="3">
                            Table VI - Statement showing foreign ownership limits
                        </th>
                    </tr>

                    <tr>
                        <th >Particular</th>
                        <th>Approved limits (%)</th>
                        <th>Limits utilized (%)</th>
                    </tr>
                </thead>

                <tbody>
                    {FOREIGN_OWNERSHIP_LIMITS_DATA.map((item, index) => (
                        <tr key={index}>
                            <td>{item.particular}</td>
                            <td>{item.approvedLimits}</td>
                            <td>{item.limitsUtilized}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ForeignOwnershipLimits;