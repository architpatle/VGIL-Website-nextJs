import React from 'react'
import GeneralInformation from './tables/GeneralInformation'
import Declaration from './tables/Declaration'
import ForeignOwnershipLimits from './tables/ForeignOwnershipLimits'
import PromoterIndividualShareholding from './tables/PromoterIndividualShareholding'
import AlternateInvestmentFunds from './tables/AlternateInvestmentFunds'
import BodiesCorporate from './tables/BodiesCorporate'
import AnyOther from './tables/AnyOther'

const ShareholdingPattern31December2025 = () => {
    return (
        <div className="shareholding-pattern-content">
            {/* TABLE 1 */}
            <GeneralInformation />

            {/* TABLE 2 */}
            <Declaration />

            {/* TABLE 3 */}
            <ForeignOwnershipLimits />

            {/* TABLE 4 */}
            {/* pending */}

            {/* TABLE 5 */}
            {/* pending */}

            {/* TABLE 6 */}
            {/* pending */}

            {/* TABLE 7 */}
            {/* pending */}

            {/* TABLE 8 */}
            <PromoterIndividualShareholding />

            {/* TABLE 9 */}
            <AlternateInvestmentFunds />

            {/* TABLE 10 */}
            <BodiesCorporate />

            {/* TABLE 11 */}
            <AnyOther />

        </div>
    )
}

export default ShareholdingPattern31December2025
