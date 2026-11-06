const SHAREHOLDING_ENCUMBRANCE_DATA = [
    {
        category: "(A)",
        shareholderCategory: "Promoter & Promoter Group",
        dilutedShareholding: "66.67",

        lockedShares: "16161636",
        lockedSharesPercentage: "99.98",

        pledgedShares: "",
        pledgedSharesPercentage: "",

        nonDisposalShares: "",
        nonDisposalSharesPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "16164204",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },

    {
        category: "(B)",
        shareholderCategory: "Public",
        dilutedShareholding: "33.33",

        lockedShares: "",
        lockedSharesPercentage: "",

        pledgedShares: "",
        pledgedSharesPercentage: "",

        nonDisposalShares: "",
        nonDisposalSharesPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "8704431",

        subCategory1: "0",
        subCategory2: "0",
        subCategory3: "0",
    },

    {
        category: "(C)",
        shareholderCategory: "Non Promoter-Non Public",
        dilutedShareholding: "",

        lockedShares: "",
        lockedSharesPercentage: "",

        pledgedShares: "",
        pledgedSharesPercentage: "",

        nonDisposalShares: "",
        nonDisposalSharesPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },

    {
        category: "(C1)",
        shareholderCategory: "Shares underlying DRs",
        dilutedShareholding: "",

        lockedShares: "",
        lockedSharesPercentage: "",

        pledgedShares: "",
        pledgedSharesPercentage: "",

        nonDisposalShares: "",
        nonDisposalSharesPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },

    {
        category: "(C2)",
        shareholderCategory: "Shares held by Employee Trusts",
        dilutedShareholding: "",

        lockedShares: "",
        lockedSharesPercentage: "",

        pledgedShares: "",
        pledgedSharesPercentage: "",

        nonDisposalShares: "",
        nonDisposalSharesPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "",

        subCategory1: "",
        subCategory2: "",
        subCategory3: "",
    },

    {
        category: "",
        shareholderCategory: "Total",
        dilutedShareholding: "100",

        lockedShares: "16161636",
        lockedSharesPercentage: "64.99",

        pledgedShares: "",
        pledgedSharesPercentage: "",

        nonDisposalShares: "",
        nonDisposalSharesPercentage: "",

        otherEncumbranceShares: "",
        otherEncumbrancePercentage: "",

        totalEncumberedShares: "",
        totalEncumberedPercentage: "",

        dematerializedShares: "24868635",

        subCategory1: "0",
        subCategory2: "0",
        subCategory3: "0",
    },
];


function ShareholdingEncumbrance() {
    return (
        <div className="shareholding-table-container summary-statement-wrapper">

            {/* =====================================================
          FIXED TABLE TITLE
      ====================================================== */}

            <div className="summary-statement-title">
                Table I - Summary Statement holding of specified securities
            </div>


            {/* =====================================================
          SCROLLABLE TABLE
      ====================================================== */}

            <div className="summary-statement-scroll">

                <table className="shareholding-information-table summary-statement-table">

                    <thead>

                        {/* =================================================
                FIRST HEADER ROW
            ================================================== */}

                        <tr>

                            {/* COLUMN 1 */}
                            <th rowSpan="2">
                                Category
                                <br />
                                (I)
                            </th>


                            {/* COLUMN 2 */}
                            <th rowSpan="2">
                                Category of
                                <br />
                                shareholder
                                <br />
                                (II)
                            </th>


                            {/* COLUMN 3 */}
                            <th rowSpan="2">
                                Shareholding
                                <br />
                                , as a %
                                <br />
                                assuming full
                                <br />
                                conversion of
                                <br />
                                convertible
                                <br />
                                securities (
                                <br />
                                as a
                                <br />
                                percentage
                                <br />
                                of diluted
                                <br />
                                share capital)
                                <br />
                                (XII) = (VII)+
                                <br />
                                (X) As a % of
                                <br />
                                (A+B+C2)
                            </th>


                            {/* COLUMNS 4-5 */}
                            <th colSpan="2">
                                Number of Locked
                                <br />
                                in shares (XII)
                            </th>


                            {/* COLUMNS 6-7 */}
                            <th colSpan="2">
                                Number of
                                <br />
                                Shares
                                <br />
                                pledged
                                <br />
                                (XIV)
                            </th>


                            {/* COLUMNS 8-9 */}
                            <th colSpan="2">
                                Non-
                                <br />
                                Disposal
                                <br />
                                Undertaking
                                <br />
                                (XV)
                            </th>


                            {/* COLUMNS 10-11 */}
                            <th colSpan="2">
                                Other
                                <br />
                                encumbrances,
                                <br />
                                if any (XVI)
                            </th>


                            {/* COLUMNS 12-13 */}
                            <th colSpan="2">
                                Total
                                <br />
                                Number of
                                <br />
                                Shares
                                <br />
                                encumbered
                                <br />
                                (XVII) =
                                <br />
                                (XIV+XV+XVI)
                            </th>


                            {/* COLUMN 14 */}
                            <th rowSpan="2">
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


                            {/* COLUMNS 15-17 */}
                            <th colSpan="3">
                                Sub-categorization of shares
                            </th>

                        </tr>


                        {/* =================================================
                SECOND HEADER ROW
            ================================================== */}

                        <tr>

                            {/* LOCKED SHARES */}

                            <th>
                                No. (a)
                            </th>

                            <th>
                                As a
                                <br />
                                % of
                                <br />
                                total
                                <br />
                                Shares
                                <br />
                                held
                                <br />
                                (b)
                            </th>


                            {/* PLEDGED SHARES */}

                            <th>
                                No.
                                <br />
                                (a)
                            </th>

                            <th>
                                As a
                                <br />
                                % of
                                <br />
                                total
                                <br />
                                Shares
                                <br />
                                held
                                <br />
                                (b)
                            </th>


                            {/* NON-DISPOSAL UNDERTAKING */}

                            <th>
                                No.
                                <br />
                                (a)
                            </th>

                            <th>
                                As a
                                <br />
                                % of
                                <br />
                                total
                                <br />
                                Shares
                                <br />
                                held
                                <br />
                                (b)
                            </th>


                            {/* OTHER ENCUMBRANCES */}

                            <th>
                                No.
                                <br />
                                (a)
                            </th>

                            <th>
                                As a % of
                                <br />
                                total
                                <br />
                                Shares
                                <br />
                                held (b)
                            </th>


                            {/* TOTAL ENCUMBERED */}

                            <th>
                                No.
                                <br />
                                (a)
                            </th>

                            <th>
                                As a %
                                <br />
                                of total
                                <br />
                                Shares
                                <br />
                                held
                                <br />
                                (b)
                            </th>


                            {/* SUB-CATEGORIES */}

                            <th>
                                Sub-
                                <br />
                                category
                                <br />
                                (i)
                            </th>

                            <th>
                                Sub-
                                <br />
                                category
                                <br />
                                (ii)
                            </th>

                            <th>
                                Sub-
                                <br />
                                category
                                <br />
                                (iii)
                            </th>

                        </tr>

                    </thead>


                    {/* =====================================================
              TABLE BODY
          ====================================================== */}

                    <tbody>

                        {SHAREHOLDING_ENCUMBRANCE_DATA.map((item, index) => (
                            <tr key={index}>

                                {/* 1 */}
                                <td>
                                    {item.category}
                                </td>


                                {/* 2 */}
                                <td>
                                    {item.shareholderCategory}
                                </td>


                                {/* 3 */}
                                <td>
                                    {item.dilutedShareholding}
                                </td>


                                {/* 4 */}
                                <td>
                                    {item.lockedShares}
                                </td>


                                {/* 5 */}
                                <td>
                                    {item.lockedSharesPercentage}
                                </td>


                                {/* 6 */}
                                <td>
                                    {item.pledgedShares}
                                </td>


                                {/* 7 */}
                                <td>
                                    {item.pledgedSharesPercentage}
                                </td>


                                {/* 8 */}
                                <td>
                                    {item.nonDisposalShares}
                                </td>


                                {/* 9 */}
                                <td>
                                    {item.nonDisposalSharesPercentage}
                                </td>


                                {/* 10 */}
                                <td>
                                    {item.otherEncumbranceShares}
                                </td>


                                {/* 11 */}
                                <td>
                                    {item.otherEncumbrancePercentage}
                                </td>


                                {/* 12 */}
                                <td>
                                    {item.totalEncumberedShares}
                                </td>


                                {/* 13 */}
                                <td>
                                    {item.totalEncumberedPercentage}
                                </td>


                                {/* 14 */}
                                <td>
                                    {item.dematerializedShares}
                                </td>


                                {/* 15 */}
                                <td>
                                    {item.subCategory1}
                                </td>


                                {/* 16 */}
                                <td>
                                    {item.subCategory2}
                                </td>


                                {/* 17 */}
                                <td>
                                    {item.subCategory3}
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}


export default ShareholdingEncumbrance;