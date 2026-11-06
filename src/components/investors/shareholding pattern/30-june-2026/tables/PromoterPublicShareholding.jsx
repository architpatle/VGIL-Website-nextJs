import React from "react";

const SHAREHOLDING_DATA = [
    /* =========================================================
       TABLE II — PROMOTER & PROMOTER GROUP
    ========================================================= */

    {
        type: "section",
        category: "A",
        title:
            "Table II - Statement showing shareholding pattern of the Promoter and Promoter Group",
    },

    {
        type: "subSection",
        category: "(1)",
        name: "Indian",
    },

    {
        type: "data",
        category: "(a)",
        name: "Individuals/Hindu undivided Family",
        shareholders: "5",
        fullyPaid: "16164204",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "16164204",
        shareholding: "65",
        votingClassX: "16164204",
        votingClassY: "",
        votingTotal: "16164204",
        votingPercentage: "65",
        convertibleShares: "",
        warrants: "1243432",
        esop: "",
        totalUnderlying: "1243432",
        fullyDiluted: "17407636",
    },

    {
        type: "subtotal",
        category: "Sub-Total (A)",
        name: "",
        shareholders: "5",
        fullyPaid: "16164204",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "16164204",
        shareholding: "65",
        votingClassX: "16164204",
        votingClassY: "",
        votingTotal: "16164204",
        votingPercentage: "65",
        convertibleShares: "",
        warrants: "1243432",
        esop: "",
        totalUnderlying: "1243432",
        fullyDiluted: "17407636",
    },

    {
        type: "subSection",
        category: "(2)",
        name: "Foreign",
    },

    {
        type: "total",
        category:
            "Total Shareholding of Promoter and Promoter Group (A)=(A)(1)+(A)(2)",
        name: "",
        shareholders: "5",
        fullyPaid: "16164204",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "16164204",
        shareholding: "65",
        votingClassX: "16164204",
        votingClassY: "",
        votingTotal: "16164204",
        votingPercentage: "65",
        convertibleShares: "",
        warrants: "1243432",
        esop: "",
        totalUnderlying: "1243432",
        fullyDiluted: "17407636",
    },

    /* =========================================================
       TABLE III — PUBLIC SHAREHOLDER
    ========================================================= */

    {
        type: "section",
        category: "B",
        title:
            "Table III - Statement showing shareholding pattern of the Public shareholder",
    },

    {
        type: "subSection",
        category: "(1)",
        name: "Institutions (Domestic)",
    },

    {
        type: "data",
        category: "(c)",
        name: "Alternate Investment Funds",
        shareholders: "4",
        fullyPaid: "209000",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "209000",
        shareholding: "0.84",
        votingClassX: "209000",
        votingClassY: "",
        votingTotal: "209000",
        votingPercentage: "0.84",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "209000",
    },

    {
        type: "data",
        category: "(i)",
        name: "NBFCs registered with RBI",
        shareholders: "1",
        fullyPaid: "71000",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "71000",
        shareholding: "0.29",
        votingClassX: "71000",
        votingClassY: "",
        votingTotal: "71000",
        votingPercentage: "0.29",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "71000",
    },

    {
        type: "data",
        category: "(j)",
        name: "Other Financial Institutions",
        shareholders: "1",
        fullyPaid: "13000",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "13000",
        shareholding: "0.05",
        votingClassX: "13000",
        votingClassY: "",
        votingTotal: "13000",
        votingPercentage: "0.05",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "13000",
    },

    {
        type: "subtotal",
        category: "Sub-Total (B)",
        name: "",
        shareholders: "6",
        fullyPaid: "293000",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "293000",
        shareholding: "1.18",
        votingClassX: "293000",
        votingClassY: "",
        votingTotal: "293000",
        votingPercentage: "1.18",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "293000",
    },

    {
        type: "subSection",
        category: "(2)",
        name: "Institutions (Foreign)",
    },

    {
        type: "data",
        category: "(d)",
        name: "Foreign Portfolio Investors Category I",
        shareholders: "4",
        fullyPaid: "278000",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "278000",
        shareholding: "1.12",
        votingClassX: "278000",
        votingClassY: "",
        votingTotal: "278000",
        votingPercentage: "1.12",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "278000",
    },

    {
        type: "subtotal",
        category: "Sub-Total (B)",
        name: "",
        shareholders: "4",
        fullyPaid: "278000",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "278000",
        shareholding: "1.12",
        votingClassX: "278000",
        votingClassY: "",
        votingTotal: "278000",
        votingPercentage: "1.12",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "278000",
    },

    {
        type: "subSection",
        category: "(3)",
        name: "Central Government / State Government(s)",
    },

    {
        type: "subSection",
        category: "(4)",
        name: "Non-institutions",
    },

    {
        type: "data",
        category: "(g)",
        name: "Resident Individuals holding nominal share capital up to Rs. 2 lakhs",
        shareholders: "1478",
        fullyPaid: "3518632",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "3518632",
        shareholding: "14.15",
        votingClassX: "3518632",
        votingClassY: "",
        votingTotal: "3518632",
        votingPercentage: "14.15",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "3518632",
    },

    {
        type: "data",
        category: "(h)",
        name:
            "Resident Individuals holding nominal share capital in excess of Rs. 2 lakhs",
        shareholders: "57",
        fullyPaid: "2755514",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "2755514",
        shareholding: "11.08",
        votingClassX: "2755514",
        votingClassY: "",
        votingTotal: "2755514",
        votingPercentage: "11.08",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "2755514",
    },

    {
        type: "data",
        category: "(i)",
        name: "Non Resident Indians (NRIs)",
        shareholders: "71",
        fullyPaid: "444124",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "444124",
        shareholding: "1.79",
        votingClassX: "444124",
        votingClassY: "",
        votingTotal: "444124",
        votingPercentage: "1.79",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "444124",
    },

    {
        type: "data",
        category: "(k)",
        name: "Foreign Companies",
        shareholders: "1",
        fullyPaid: "188013",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "188013",
        shareholding: "0.76",
        votingClassX: "188013",
        votingClassY: "",
        votingTotal: "188013",
        votingPercentage: "0.76",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "188013",
    },

    {
        type: "data",
        category: "(l)",
        name: "Bodies Corporate",
        shareholders: "38",
        fullyPaid: "350369",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "350369",
        shareholding: "1.41",
        votingClassX: "350369",
        votingClassY: "",
        votingTotal: "350369",
        votingPercentage: "1.41",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "350369",
    },

    {
        type: "data",
        category: "(m)",
        name: "Any Other (specify)",
        shareholders: "92",
        fullyPaid: "876779",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "876779",
        shareholding: "3.53",
        votingClassX: "876779",
        votingClassY: "",
        votingTotal: "876779",
        votingPercentage: "3.53",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "876779",
    },

    {
        type: "subtotal",
        category: "Sub-Total (B) (4)",
        name: "",
        shareholders: "1737",
        fullyPaid: "8133431",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "8133431",
        shareholding: "32.71",
        votingClassX: "8133431",
        votingClassY: "",
        votingTotal: "8133431",
        votingPercentage: "32.71",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "8133431",
    },

    {
        type: "total",
        category:
            "Total Public Shareholding (B)=(B)(1)+(B)(2)+(B)(3)+(B)(4)",
        name: "",
        shareholders: "1747",
        fullyPaid: "8704431",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "8704431",
        shareholding: "35",
        votingClassX: "8704431",
        votingClassY: "",
        votingTotal: "8704431",
        votingPercentage: "35",
        convertibleShares: "",
        warrants: "",
        esop: "",
        totalUnderlying: "",
        fullyDiluted: "8704431",
    },

    /* =========================================================
       TABLE IV — NON PROMOTER / NON PUBLIC
    ========================================================= */

    {
        type: "section",
        category: "C",
        title:
            "Table IV - Statement showing shareholding pattern of the Non Promoter- Non Public shareholder",
    },

    {
        type: "total",
        category: "Total (A+B+C2)",
        name: "",
        shareholders: "1752",
        fullyPaid: "24868635",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "24868635",
        shareholding: "100",
        votingClassX: "24868635",
        votingClassY: "",
        votingTotal: "24868635",
        votingPercentage: "100",
        convertibleShares: "",
        warrants: "1243432",
        esop: "",
        totalUnderlying: "1243432",
        fullyDiluted: "26112067",
    },

    {
        type: "total",
        category: "Total (A+B+C)",
        name: "",
        shareholders: "1752",
        fullyPaid: "24868635",
        partlyPaid: "",
        underlyingDR: "",
        totalShares: "24868635",
        shareholding: "100",
        votingClassX: "24868635",
        votingClassY: "",
        votingTotal: "24868635",
        votingPercentage: "100",
        convertibleShares: "",
        warrants: "1243432",
        esop: "",
        totalUnderlying: "1243432",
        fullyDiluted: "26112067",
    },
];


function PromoterPublicShareholding() {
    return (
        <div className="summary-statement-wrapper promoter-public-wrapper">

            {/* =====================================================
          FIXED TITLE
      ====================================================== */}

            <div className="summary-statement-title">
                Table II - Statement showing shareholding pattern of the Promoter and
                Promoter Group
            </div>


            {/* =====================================================
          SCROLLABLE TABLE
      ====================================================== */}

            <div className="summary-statement-scroll">

                <table className="summary-statement-table promoter-public-table">

                    {/* =================================================
              TABLE HEADER
          ================================================== */}

                    <thead>

                        {/* ================= FIRST HEADER ROW ================= */}

                        <tr>

                            <th rowSpan="3">
                                Sr. No.
                            </th>

                            <th rowSpan="3">
                                Category &amp;
                                <br />
                                Name of
                                <br />
                                the
                                <br />
                                Shareholders (I)
                            </th>

                            <th rowSpan="3">
                                Nos. Of
                                <br />
                                shareholders
                                <br />
                                (III)
                            </th>

                            <th rowSpan="3">
                                No. of
                                <br />
                                fully paid
                                <br />
                                up equity
                                <br />
                                shares
                                <br />
                                held (IV)
                            </th>

                            <th rowSpan="3">
                                No. Of
                                <br />
                                Partly
                                <br />
                                paid-up
                                <br />
                                equity
                                <br />
                                shares
                                <br />
                                held
                                <br />
                                (V)
                            </th>

                            <th rowSpan="3">
                                No. Of
                                <br />
                                shares
                                <br />
                                underlying
                                <br />
                                Depository
                                <br />
                                Receipts
                                <br />
                                (VI)
                            </th>

                            <th rowSpan="3">
                                Total nos.
                                <br />
                                of shares
                                <br />
                                held
                                <br />
                                (VII) =
                                <br />
                                (IV)+
                                <br />
                                (V)+(VI)
                            </th>

                            <th rowSpan="3">
                                Shareholding
                                <br />
                                as a % of
                                <br />
                                total no.
                                <br />
                                of shares
                                <br />
                                (calculated
                                <br />
                                as per SCRR,
                                <br />
                                1957) (VIII)
                                <br />
                                As a % of
                                <br />
                                (A+B+C2)
                            </th>

                            {/* VOTING RIGHTS GROUP */}

                            <th colSpan="4">
                                Number of Voting Rights held in each class of securities (IX)
                            </th>

                            

                            <th rowSpan="3">
                                No. Of
                                <br />
                                Shares
                                <br />
                                Underlying
                                <br />
                                convertible
                                <br />
                                securities
                                <br />
                                (XA)
                            </th>

                            <th rowSpan="3">
                                No. of
                                <br />
                                Shares
                                <br />
                                Underlying
                                <br />
                                Outstanding
                                <br />
                                Warrants
                                <br />
                                (XB)
                            </th>

                            <th rowSpan="3">
                                No. Of
                                <br />
                                Shares
                                <br />
                                Underlying
                                <br />
                                Outstanding
                                <br />
                                ESOP
                                <br />
                                Granted
                                <br />
                                (XC)
                            </th>

                            <th rowSpan="3">
                                No. Of
                                <br />
                                Shares
                                <br />
                                Underlying
                                <br />
                                Outstanding
                                <br />
                                convertible
                                <br />
                                securities,
                                <br />
                                Warrants
                                <br />
                                and ESOP
                                <br />
                                etc. (X)
                                <br />
                                =(XA+XB+XC)
                            </th>

                            <th rowSpan="3">
                                Total No.
                                <br />
                                of shares
                                <br />
                                on fully
                                <br />
                                diluted
                                <br />
                                basis
                                <br />
                                (including
                                <br />
                                warrants,
                                <br />
                                ESOP,
                                <br />
                                Convertible
                                <br />
                                Securities
                                <br />
                                etc.) (XI)
                                <br />
                                =(VII+X)
                            </th>

                        </tr>


                        {/* ================= SECOND HEADER ROW ================= */}

                        <tr>

                            <th colSpan="3">
                                No of Voting (XIV) Rightsff
                            </th>

                            <th rowSpan="3">
                                Total as a %
                                <br />
                                of Total
                                <br />
                                Voting rights
                            </th>

                        </tr>


                        {/* ================= THIRD HEADER ROW ================= */}

                        <tr>

                            <th>
                                Class eg:
                                <br />
                                X
                            </th>

                            <th>
                                Class
                                <br />
                                eg:Y
                            </th>

                            <th>
                                Total
                            </th>

                        </tr>

                    </thead>


                    {/* =====================================================
              TABLE BODY
          ====================================================== */}

                    <tbody>

                        {SHAREHOLDING_DATA.map((row, index) => {

                            /* =================================================
                               SECTION ROW
                            ================================================== */

                            if (row.type === "section") {
                                return (
                                    <tr key={index} className="table-section-row">

                                        <td>
                                            {row.category}
                                        </td>

                                        <td colSpan="16">
                                            {row.title}
                                        </td>

                                    </tr>
                                );
                            }


                            /* =================================================
                               SUB SECTION ROW
                            ================================================== */

                            if (row.type === "subSection") {
                                return (
                                    <tr key={index} className="table-subsection-row">

                                        <td>
                                            {row.category}
                                        </td>

                                        <td colSpan="16">
                                            {row.name}
                                        </td>

                                    </tr>
                                );
                            }


                            /* =================================================
                               NORMAL / SUBTOTAL / TOTAL ROW
                            ================================================== */

                            return (
                                <tr
                                    key={index}
                                    className={`table-data-row ${row.type === "subtotal"
                                            ? "table-subtotal-row"
                                            : row.type === "total"
                                                ? "table-total-row"
                                                : ""
                                        }`}
                                >

                                    {/* 1 — Category */}
                                    <td>
                                        {row.category}
                                    </td>


                                    {/* 2 — Shareholder name */}
                                    <td>
                                        {row.name}
                                    </td>


                                    {/* 3 — Number of shareholders */}
                                    <td>
                                        {row.shareholders}
                                    </td>


                                    {/* 4 — Fully paid */}
                                    <td>
                                        {row.fullyPaid}
                                    </td>


                                    {/* 5 — Partly paid */}
                                    <td>
                                        {row.partlyPaid}
                                    </td>


                                    {/* 6 — Underlying DR */}
                                    <td>
                                        {row.underlyingDR}
                                    </td>


                                    {/* 7 — Total shares */}
                                    <td>
                                        {row.totalShares}
                                    </td>


                                    {/* 8 — Shareholding */}
                                    <td>
                                        {row.shareholding}
                                    </td>


                                    {/* 9 — Voting Class X */}
                                    <td>
                                        {row.votingClassX}
                                    </td>


                                    {/* 10 — Voting Class Y */}
                                    <td>
                                        {row.votingClassY}
                                    </td>


                                    {/* 11 — Voting Total */}
                                    <td>
                                        {row.votingTotal}
                                    </td>


                                    {/* 12 — Voting percentage */}
                                    <td>
                                        {row.votingPercentage}
                                    </td>


                                    {/* 13 — Convertible securities */}
                                    <td>
                                        {row.convertibleShares}
                                    </td>


                                    {/* 14 — Warrants */}
                                    <td>
                                        {row.warrants}
                                    </td>


                                    {/* 15 — ESOP */}
                                    <td>
                                        {row.esop}
                                    </td>


                                    {/* 16 — Total underlying */}
                                    <td>
                                        {row.totalUnderlying}
                                    </td>


                                    {/* 17 — Fully diluted */}
                                    <td>
                                        {row.fullyDiluted}
                                    </td>

                                </tr>
                            );
                        })}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default PromoterPublicShareholding;