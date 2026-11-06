import React from 'react'
import GeneralInformation from './tables/GeneralInformation'
import Declaration from './tables/Declaration'
import ForeignOwnershipLimits from './tables/ForeignOwnershipLimits'
import SummaryStatement from './tables/SummaryStatement'
import IndividualsHinduUndividedFamily from './tables/IndividualsHinduUndividedFamily'
import AlternateInvestmentFunds from './tables/AlternateInvestmentFunds'
import BodiesCorporate from './tables/BodiesCorporate'
import AnyOther from './tables/AnyOther'

const ShareholdingPattern30September2025 = () => {
    return (
        <div className="shareholding-pattern-content" >
            {/* TABLE 1 */}
            <GeneralInformation />

            {/* TABLE 2 */}
            <Declaration />

            {/* TABLE 3 */}
            <ForeignOwnershipLimits />

            {/* TABLE 4 */}
            <SummaryStatement />

            {/* TABLE 5 */}
            {/* Pending */}

            {/* TABLE 6 */}
            {/* Pending */}

            {/* TABLE 7 */}
            {/* Pending */}

            {/* TABLE 8 */}
            <IndividualsHinduUndividedFamily />

            {/* TABLE 9 */}
            <AlternateInvestmentFunds />

            {/* TABLE 10 */}
            <BodiesCorporate />

            {/* TABLE 11 */}
            <AnyOther />

        </div>
    )
}

export default ShareholdingPattern30September2025
