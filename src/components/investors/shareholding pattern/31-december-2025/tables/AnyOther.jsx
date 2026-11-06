import React from "react";

function AnyOther() {
    return (
        <div className="shareholder-detail-wrapper">

            {/* Fixed Table Title */}
            <div className="shareholder-detail-title">
                Any Other (specify)
            </div>

            {/* Scrollable Table */}
            <div className="shareholder-detail-scroll">

                <table className="shareholder-detail-table">

                    <tbody>

                        {/* Sr. No. */}
                        <tr>
                            <th>Sr. No.</th>

                            <td>1</td>

                            <td></td>
                        </tr>

                        {/* Category */}
                        <tr>
                            <th>
                                Category
                            </th>

                            <td>
                                HUF
                            </td>

                            <td></td>
                        </tr>

                        {/* Category / More than 1 percentage */}
                        <tr>
                            <th>
                                Category /
                                <br />
                                More than 1
                                <br />
                                percentage
                            </th>

                            <td>
                                Category
                            </td>

                            <td></td>
                        </tr>

                        {/* Name of Shareholders */}
                        <tr>
                            <th>
                                Name of the
                                <br />
                                Shareholders
                                <br />
                                (I)
                            </th>

                            <td></td>

                            <td>
                                Click here to go back
                            </td>
                        </tr>

                        {/* PAN */}
                        <tr>
                            <th>PAN (II)</th>

                            <td></td>

                            <td>
                                Total
                            </td>
                        </tr>

                        {/* Number of Shareholders */}
                        <tr>
                            <th>
                                No. of the
                                <br />
                                Shareholders
                                <br />
                                (I)
                            </th>

                            <td>
                                95
                            </td>

                            <td>
                                95
                            </td>
                        </tr>

                        {/* Fully Paid Equity Shares */}
                        <tr>
                            <th>
                                No. of fully
                                <br />
                                paid up equity
                                <br />
                                shares held
                                <br />
                                (IV)
                            </th>

                            <td>
                                410274
                            </td>

                            <td>
                                410274
                            </td>
                        </tr>

                        {/* Total Shares */}
                        <tr>
                            <th>
                                Total nos.
                                <br />
                                shares held
                                <br />
                                (VII) = (IV)+
                                <br />
                                (V)+ (VI)
                            </th>

                            <td>
                                410274
                            </td>

                            <td>
                                410274
                            </td>
                        </tr>

                        {/* Shareholding % */}
                        <tr>
                            <th>
                                Shareholding
                                <br />
                                as a % of total
                                <br />
                                no. of shares
                                <br />
                                (calculated as
                                <br />
                                per SCRR,
                                <br />
                                1957) (VIII) As
                                <br />
                                a % of
                                <br />
                                (A+B+C2)
                            </th>

                            <td>
                                1.65
                            </td>

                            <td>
                                1.65
                            </td>
                        </tr>

                        {/* Voting Rights Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="3">
                                Number of Voting Rights held in each class of securities (IX)
                            </td>
                        </tr>

                        {/* Class X */}
                        <tr>
                            <th>
                                Class eg: X
                            </th>

                            <td>
                                410274
                            </td>

                            <td>
                                410274
                            </td>
                        </tr>

                        {/* Total Voting Rights */}
                        <tr>
                            <th>
                                Total
                            </th>

                            <td>
                                410274
                            </td>

                            <td>
                                410274
                            </td>
                        </tr>

                        {/* Total Voting Rights % */}
                        <tr>
                            <th>
                                Total as a % of
                                <br />
                                Total Voting
                                <br />
                                rights
                            </th>

                            <td>
                                1.65
                            </td>

                            <td>
                                1.65
                            </td>
                        </tr>

                        {/* Fully Diluted Shares */}
                        <tr>
                            <th>
                                Total No. of
                                <br />
                                shares on fully
                                <br />
                                diluted basis
                                <br />
                                (including
                                <br />
                                warrants,
                                <br />
                                ESOP,
                                <br />
                                Convertible
                                <br />
                                Securities etc.)
                                <br />
                                (XI)=(VII+X)
                            </th>

                            <td>
                                410274
                            </td>

                            <td>
                                410274
                            </td>
                        </tr>

                        {/* Full Conversion Shareholding */}
                        <tr>
                            <th>
                                Shareholding ,
                                <br />
                                as a %
                                <br />
                                assuming full
                                <br />
                                conversion of
                                <br />
                                convertible
                                <br />
                                securities ( as
                                <br />
                                a percentage
                                <br />
                                of diluted
                                <br />
                                share capital)
                                <br />
                                (XII)= (VII)+(X)
                                <br />
                                As a % of
                                <br />
                                (A+B+C2)
                            </th>

                            <td>
                                1.65
                            </td>

                            <td>
                                1.65
                            </td>
                        </tr>

                        {/* Locked-in Shares Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="3">
                                Number of Locked in shares (XIII)
                            </td>
                        </tr>

                        {/* Locked Shares */}
                        <tr>
                            <th>
                                No. (a)
                            </th>

                            <td>
                                183274
                            </td>

                            <td>
                                183274
                            </td>
                        </tr>

                        {/* Locked Shares % */}
                        <tr>
                            <th>
                                As a % of total
                                <br />
                                Shares held (b)
                            </th>

                            <td>
                                44.67
                            </td>

                            <td>
                                44.67
                            </td>
                        </tr>

                        {/* Dematerialized Shares */}
                        <tr>
                            <th>
                                Number of
                                <br />
                                equity shares
                                <br />
                                held in
                                <br />
                                dematerialized
                                <br />
                                form (XIV)
                            </th>

                            <td>
                                410274
                            </td>

                            <td>
                                410274
                            </td>
                        </tr>

                        {/* PAN Reason Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="3">
                                Reason for not providing PAN
                            </td>
                        </tr>

                        {/* Reason for PAN */}
                        <tr>
                            <th>
                                Reason for not
                                <br />
                                providing PAN
                            </th>

                            <td></td>

                            <td></td>
                        </tr>

                        {/* Sub-categorization Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="3">
                                Sub-categorization of shares
                            </td>
                        </tr>

                        {/* Shareholding Under */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="3">
                                Shareholding (No. of shares) under
                            </td>
                        </tr>

                        {/* Sub-category I */}
                        <tr>
                            <th>
                                Sub-category
                                <br />
                                (i)
                            </th>

                            <td>
                                0
                            </td>

                            <td>
                                0
                            </td>
                        </tr>

                        {/* Sub-category II */}
                        <tr>
                            <th>
                                Sub-category
                                <br />
                                (ii)
                            </th>

                            <td>
                                0
                            </td>

                            <td>
                                0
                            </td>
                        </tr>

                        {/* Sub-category III */}
                        <tr>
                            <th>
                                Sub-category
                                <br />
                                (iii)
                            </th>

                            <td>
                                0
                            </td>

                            <td>
                                0
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </div>
    );
}

export default AnyOther;