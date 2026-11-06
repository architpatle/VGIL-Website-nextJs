import React from "react";

const DECLARATION_DATA = [
    {
        srNo: 1,
        particular:
            "Whether the Listed Entity has issued any partly paid up shares?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
        mergeLastColumns: false,
    },
    {
        srNo: 2,
        particular:
            "Whether the Listed Entity has issued any Convertible Securities ?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
        mergeLastColumns: false,
    },
    {
        srNo: 3,
        particular:
            "Whether the Listed Entity has issued any Warrants ?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
        mergeLastColumns: false,
    },
    {
        srNo: 4,
        particular:
            "Whether Listed Entity has granted any ESOPs, which are outstanding?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
        mergeLastColumns: false,
    },
    {
        srNo: 5,
        particular:
            "Whether the Listed Entity has any shares against which depository receipts are issued?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
        mergeLastColumns: false,
    },
    {
        srNo: 6,
        particular:
            "Whether the Listed Entity has any shares in locked-in?",
        yesNo: "Yes",
        promoter: "Yes",
        publicShareholder: "Yes",
        nonPromoter: "No",
        mergeLastColumns: false,
    },
    {
        srNo: 7,
        particular:
            'Whether any shares held by promoters are encumbered under "Pledged"?',
        yesNo: "No",
        promoter: "No",
        mergeLastColumns: true,
    },
    {
        srNo: 8,
        particular:
            'Whether any shares held by promoters are encumbered under "Non-Disposal Undertaking"?',
        yesNo: "No",
        promoter: "No",
        mergeLastColumns: true,
    },
    {
        srNo: 9,
        particular:
            "Whether any shares held by promoters are encumbered, other than by way of Pledge or NDU, if any?",
        yesNo: "No",
        promoter: "No",
        mergeLastColumns: true,
    },
    {
        srNo: 10,
        particular:
            "Whether company has equity shares with differential voting rights?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
        mergeLastColumns: false,
    },
    {
        srNo: 11,
        particular:
            "Whether the listed entity has any significant beneficial owner?",
        yesNo: "No",
        promoter: "",
        mergeLastColumns: true,
    },
];

function Declaration() {
    return (
        <div className="shareholding-table-container">

            <table className="shareholding-information-table declaration-table">

                <thead>

                    {/* TABLE TITLE */}
                    <tr>
                        <th colSpan="6">
                            Declaration
                        </th>
                    </tr>

                    {/* COLUMN HEADINGS */}
                    <tr>
                        <th className="shareholding-light-highlight">
                            Sr.
                            <br />
                            No.
                        </th>

                        <th className="shareholding-light-highlight">
                            Particular
                        </th>

                        <th className="shareholding-light-highlight">
                            Yes/No
                        </th>

                        <th className="shareholding-light-highlight">
                            Promoter and
                            <br />
                            Promoter Group
                        </th>

                        <th className="shareholding-light-highlight">
                            Public
                            <br />
                            shareholder
                        </th>

                        <th className="shareholding-light-highlight">
                            Non Promoter-
                            <br />
                            Non Public
                        </th>
                    </tr>

                </thead>

                <tbody>

                    {DECLARATION_DATA.map((item) => (
                        <tr key={item.srNo}>

                            {/* Sr. No. */}
                            <td className="shareholding-light-highlight">
                                {item.srNo}
                            </td>

                            {/* Particular */}
                            <td className="shareholding-light-highlight">
                                {item.particular}
                            </td>

                            {/* Yes / No */}
                            <td>
                                {item.yesNo}
                            </td>

                            {/* Promoter */}
                            <td>
                                {item.promoter}
                            </td>

                            {item.mergeLastColumns ? (
                                /* Rows 7, 8, 9 and 11 */
                                <td colSpan="2"></td>
                            ) : (
                                <>
                                    {/* Public Shareholder */}
                                    <td>
                                        {item.publicShareholder}
                                    </td>

                                    {/* Non Promoter - Non Public */}
                                    <td>
                                        {item.nonPromoter}
                                    </td>
                                </>
                            )}

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Declaration;