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

                            <td>2</td>

                            <td></td>
                        </tr>

                        {/* Category */}
                        <tr>
                            <th>Category</th>

                            <td>HUF</td>

                            <td>
                                Clearing
                                <br />
                                Members
                            </td>

                            <td></td>
                        </tr>

                        {/* Category / More than 1 percentage */}
                        <tr>
                            <th>
                                Category / More than 1 percentage
                            </th>

                            <td>Category</td>

                            <td>Category</td>

                            <td></td>
                        </tr>

                        {/* Name of Shareholders */}
                        <tr>
                            <th>
                                Name of the Shareholders (I)
                            </th>

                            <td></td>

                            <td></td>

                            <td>
                                Click here to
                                <br />
                                go back
                            </td>
                        </tr>

                        {/* PAN */}
                        <tr>
                            <th>PAN (II)</th>

                            <td></td>

                            <td></td>

                            <td>Total</td>
                        </tr>

                        {/* Number of Shareholders */}
                        <tr>
                            <th>
                                No. of the Shareholders (I)
                            </th>

                            <td>97</td>

                            <td>10</td>

                            <td>107</td>
                        </tr>

                        {/* Fully Paid Equity Shares */}
                        <tr>
                            <th>
                                No. of fully paid up equity shares held (IV)
                            </th>

                            <td>389274</td>

                            <td>65000</td>

                            <td>454274</td>
                        </tr>

                        {/* Total Shares */}
                        <tr>
                            <th>
                                Total nos. shares held (VII) = (IV)+(V)+(VI)
                            </th>

                            <td>389274</td>

                            <td>65000</td>

                            <td>454274</td>
                        </tr>

                        {/* Shareholding */}
                        <tr>
                            <th>
                                Shareholding as a % of total no. of shares
                                (calculated as per SCRR, 1957) (VIII) As a %
                                of (A+B+C2)
                            </th>

                            <td>1.57</td>

                            <td>0.26</td>

                            <td>1.83</td>
                        </tr>

                        {/* Voting Rights Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="4">
                                Number of Voting Rights held in each class of securities (IX)
                            </td>
                        </tr>

                        {/* Class X */}
                        <tr>
                            <th>Class eg: X</th>

                            <td>389274</td>

                            <td>65000</td>

                            <td>454274</td>
                        </tr>

                        {/* Total */}
                        <tr>
                            <th>Total</th>

                            <td>389274</td>

                            <td>65000</td>

                            <td>454274</td>
                        </tr>

                        {/* Voting Percentage */}
                        <tr>
                            <th>
                                Total as a % of Total Voting rights
                            </th>

                            <td>1.57</td>

                            <td>0.26</td>

                            <td>1.83</td>
                        </tr>

                        {/* Fully Diluted Shares */}
                        <tr>
                            <th>
                                Total No. of shares on fully diluted basis
                                (including warrants, ESOP, Convertible Securities
                                etc.) (XI)=(VII+X)
                            </th>

                            <td>389274</td>

                            <td>65000</td>

                            <td>454274</td>
                        </tr>

                        {/* Diluted Shareholding */}
                        <tr>
                            <th>
                                Shareholding , as a % assuming full conversion
                                of convertible securities ( as a percentage of
                                diluted share capital) (XII)= (VII)+(X) As a %
                                of (A+B+C2)
                            </th>

                            <td>1.57</td>

                            <td>0.26</td>

                            <td>1.83</td>
                        </tr>

                        {/* Locked-in Shares Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="4">
                                Number of Locked in shares (XIII)
                            </td>
                        </tr>

                        {/* Locked Shares */}
                        <tr>
                            <th>No. (a)</th>

                            <td>183274</td>

                            <td>0</td>

                            <td>183274</td>
                        </tr>

                        {/* Locked Percentage */}
                        <tr>
                            <th>
                                As a % of total Shares held (b)
                            </th>

                            <td>47.08</td>

                            <td>0</td>

                            <td>40.34</td>
                        </tr>

                        {/* Dematerialized Shares */}
                        <tr>
                            <th>
                                Number of equity shares held in dematerialized form (XIV)
                            </th>

                            <td>389274</td>

                            <td>65000</td>

                            <td>454274</td>
                        </tr>

                        {/* Reason for PAN Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="4">
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

                            <td></td>
                        </tr>

                        {/* Sub-categorization Section */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="4">
                                Sub-categorization of shares
                            </td>
                        </tr>

                        {/* Shareholding Under */}
                        <tr className="shareholder-detail-section-row">
                            <td colSpan="4">
                                Shareholding (No. of shares) under
                            </td>
                        </tr>

                        {/* Sub-category (i) */}
                        <tr>
                            <th>
                                Sub-category (i)
                            </th>

                            <td>0</td>

                            <td>0</td>

                            <td>0</td>
                        </tr>

                        {/* Sub-category (ii) */}
                        <tr>
                            <th>
                                Sub-category (ii)
                            </th>

                            <td>0</td>

                            <td>0</td>

                            <td>0</td>
                        </tr>

                        {/* Sub-category (iii) */}
                        <tr>
                            <th>
                                Sub-category (iii)
                            </th>

                            <td>0</td>

                            <td>0</td>

                            <td>0</td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </div>
    );
}

export default AnyOther;