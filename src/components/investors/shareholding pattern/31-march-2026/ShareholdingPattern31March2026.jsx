import React from 'react'
import GeneralInformation from './tables/GeneralInformation'
import Declaration from './tables/Declaration'
import ForeignOwnershipLimits from './tables/ForeignOwnershipLimits'
import SummaryStatement from './tables/SummaryStatement'
import ShareholdingEncumbrance from './tables/ShareholdingEncumbrance'
import PromoterPublicShareholding from './tables/PromoterPublicShareholding'
import ShareholdingEncumbrance2 from './tables/ShareholdingEncumbrance2'
import IndividualsHinduUndividedFamily from './tables/IndividualsHinduUndividedFamily'
import AnyOther from './tables/AnyOther'

const ShareholdingPattern31March2026 = () => {
    return (
        <div className="shareholding-pattern-content">
            {/* TABLE 1 */}
            <GeneralInformation />

            {/* TABLE 2 */}
            <Declaration />

            {/* TABLE 3 */}
            <ForeignOwnershipLimits />

            {/* TABLE 4 */}
            <SummaryStatement />

            {/* TABLE 5 */}
            <ShareholdingEncumbrance />

            {/* TABLE 6 */}
            <PromoterPublicShareholding />

            {/* TABLE 7 */}
            <ShareholdingEncumbrance2 />

            {/* TABLE 8 */}
            <IndividualsHinduUndividedFamily />

            {/* TABLE 9 */}
            <AnyOther />
        </div>
    )
}

export default ShareholdingPattern31March2026
