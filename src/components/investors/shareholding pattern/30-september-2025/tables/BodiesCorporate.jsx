import React from "react";

function BodiesCorporate() {
    return (
        <div className="shareholder-detail-wrapper">

            {/* Fixed Table Title */}
            <div className="shareholder-detail-title">
                Bodies Corporate
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

                        {/* Name of Shareholder */}
                        <tr>
                            <th>
                                Name of the Shareholders (I)
                            </th>

                            <td>
                                MINDSCOPE
                                <br />
                                ADVISORS LLP
                            </td>

                            <td>
                                Click here to go
                                <br />
                                back
                            </td>
                        </tr>

                        {/* PAN */}
                        <tr>
                            <th>PAN (II)</th>

                            <td>
                                ABYFM4330Q
                            </td>

                            <td>
                                Total
                            </td>
                        </tr>

                        {/* Fully Paid Equity Shares */}
                        <tr>
                            <th>
                                No. of fully paid up equity shares held (IV)
                            </th>

                            <td>
                                265505
                            </td>

                            <td>
                                265505
                            </td>
                        </tr>

                        {/* Total Shares */}
                        <tr>
                            <th>
                                Total nos. shares held (VII) = (IV)+(V)+ (VI)
                            </th>

                            <td>
                                265505
                            </td>

                            <td>
                                265505
                            </td>
                        </tr>

                        {/* Shareholding */}
                        <tr>
                            <th>
                                Shareholding as a % of total no. of shares
                                (calculated as per SCRR, 1957) (VIII) As a % of
                                (A+B+C2)
                            </th>

                            <td>
                                1.07
                            </td>

                            <td>
                                1.07
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
                            <th>Class eg: X</th>

                            <td>
                                265505
                            </td>

                            <td>
                                265505
                            </td>
                        </tr>

                        {/* Total */}
                        <tr>
                            <th>Total</th>

                            <td>
                                265505
                            </td>

                            <td>
                                265505
                            </td>
                        </tr>

                        {/* Voting Percentage */}
                        <tr>
                            <th>
                                Total as a % of Total Voting rights
                            </th>

                            <td>
                                1.07
                            </td>

                            <td>
                                1.07
                            </td>
                        </tr>

                        {/* Fully Diluted Shares */}
                        <tr>
                            <th>
                                Total No. of shares on fully diluted basis
                                (including warrants, ESOP, Convertible Securities etc.)
                                (XI)=(VII+X)
                            </th>

                            <td>
                                265505
                            </td>

                            <td>
                                265505
                            </td>
                        </tr>

                        {/* Diluted Shareholding */}
                        <tr>
                            <th>
                                Shareholding , as a % assuming full conversion of
                                convertible securities ( as a percentage of diluted
                                share capital) (XII)= (VII)+(X) As a % of (A+B+C2)
                            </th>

                            <td>
                                1.07
                            </td>

                            <td>
                                1.07
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
                            <th>No. (a)</th>

                            <td>
                                56505
                            </td>

                            <td>
                                56505
                            </td>
                        </tr>

                        {/* Locked Percentage */}
                        <tr>
                            <th>
                                As a % of total Shares held (b)
                            </th>

                            <td>
                                21.28
                            </td>

                            <td>
                                21.28
                            </td>
                        </tr>

                        {/* Dematerialized Shares */}
                        <tr>
                            <th>
                                Number of equity shares held in dematerialized form (XIV)
                            </th>

                            <td>
                                265505
                            </td>

                            <td>
                                265505
                            </td>
                        </tr>

                        {/* Reason for PAN Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="3">
                                Reason for not providing PAN
                            </td>
                        </tr>

                        {/* Reason for PAN */}
                        <tr>
                            <th>
                                Reason for not providing PAN
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

                        {/* Sub-category (i) */}
                        <tr>
                            <th>
                                Sub-category (i)
                            </th>

                            <td>
                                0
                            </td>

                            <td>
                                0
                            </td>
                        </tr>

                        {/* Sub-category (ii) */}
                        <tr>
                            <th>
                                Sub-category (ii)
                            </th>

                            <td>
                                0
                            </td>

                            <td>
                                0
                            </td>
                        </tr>

                        {/* Sub-category (iii) */}
                        <tr>
                            <th>
                                Sub-category (iii)
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

export default BodiesCorporate;