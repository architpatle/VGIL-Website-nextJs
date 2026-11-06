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
    },
    {
        srNo: 2,
        particular:
            "Whether the Listed Entity has issued any Convertible Securities?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
    },
    {
        srNo: 3,
        particular:
            "Whether the Listed Entity has issued any Warrants ?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
    },
    {
        srNo: 4,
        particular:
            "Whether the Listed Entity has any shares against which depository receipts are issued?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
    },
    {
        srNo: 5,
        particular:
            "Whether the Listed Entity has any shares in locked-in?",
        yesNo: "Yes",
        promoter: "Yes",
        publicShareholder: "Yes",
        nonPromoter: "No",
    },
    {
        srNo: 6,
        particular:
            "Whether any shares held by promoters are pledge or otherwise encumbered?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "",
        nonPromoter: "",
        greyPublicCells: true,
    },
    {
        srNo: 7,
        particular:
            "Whether the Listed Entity has issued any differential Voting Rights?",
        yesNo: "No",
        promoter: "No",
        publicShareholder: "No",
        nonPromoter: "No",
    },
    {
        srNo: 8,
        particular:
            "Whether the listed entity has any significant beneficial owner?",
        yesNo: "No",
        promoter: "",
        publicShareholder: "",
        nonPromoter: "",
        greyPromoterCells: true,
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
                        <th className="general-information-label-cell">
                            Sr.
                            <br />
                            No.
                        </th>

                        <th className="general-information-label-cell">
                            Particular
                        </th>

                        <th className="general-information-label-cell">
                            Yes/No
                        </th>

                        <th className="general-information-label-cell">
                            Promoter and
                            <br />
                            Promoter Group
                        </th>

                        <th className="general-information-label-cell">
                            Public
                            <br />
                            shareholder
                        </th>

                        <th className="general-information-label-cell">
                            Non Promoter-
                            <br />
                            Non Public
                        </th>
                    </tr>

                </thead>

                <tbody>

                    {DECLARATION_DATA.map((item) => (
                        <tr key={item.srNo}>

                            <td className="general-information-label-cell">
                                {item.srNo}
                            </td>

                            <td className="general-information-label-cell">
                                {item.particular}
                            </td>

                            <td>
                                {item.yesNo}
                            </td>

                            <td
                                className={
                                    item.greyPromoterCells
                                        ? "declaration-grey-cell"
                                        : ""
                                }
                            >
                                {item.promoter}
                            </td>

                            <td
                                className={
                                    item.greyPublicCells || item.greyPromoterCells
                                        ? "declaration-grey-cell"
                                        : ""
                                }
                            >
                                {item.publicShareholder}
                            </td>

                            <td
                                className={
                                    item.greyPublicCells || item.greyPromoterCells
                                        ? "declaration-grey-cell"
                                        : ""
                                }
                            >
                                {item.nonPromoter}
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Declaration;