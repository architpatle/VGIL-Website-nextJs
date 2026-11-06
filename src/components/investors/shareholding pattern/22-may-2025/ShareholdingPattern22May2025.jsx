import React from 'react'
import GeneralInformation from './tables/GeneralInformation'
import Declaration from './tables/Declaration'
import SummaryStatement from './tables/SummaryStatement'
import PromoterPublicShareholding from './tables/PromoterPublicShareholding'
import IndividualsHinduUndividedFamily from './tables/IndividualsHinduUndividedFamily'
import BodiesCorporate from './tables/BodiesCorporate'
import PublicShareholding from './tables/PublicShareholding'
import AlternateInvestmentFunds from './tables/AlternateInvestmentFunds'
import AnyOtherInstitutionsDomestic from './tables/AnyOtherInstitutionsDomestic'
import NonPromoterNonPublicShareholding from './tables/NonPromoterNonPublicShareholding'
import ForeignOwnershipLimits from './tables/ForeignOwnershipLimits'
import Remarks from './tables/Remarks'
import ReasonI from './tables/ReasonI'
import ReasonII from './tables/ReasonII'

const ShareholdingPattern22May2025 = () => {
    return (
        <div className="shareholding-pattern-content" >
            {/* TABLE 1 */}
            <GeneralInformation />

            {/* TABLE 2 */}
            <Declaration />

            {/* TABLE 3 */}
            <SummaryStatement />

            {/* TABLE 4 */}
            <PromoterPublicShareholding />

            {/* TABLE 5 */}
            <IndividualsHinduUndividedFamily />

            {/* TABLE 6 */}
            <BodiesCorporate />

            {/* TABLE 7 */}
            <PublicShareholding />

            {/* TABLE 8 */}
            <AlternateInvestmentFunds />

            {/* TABLE 9 */}
            <AnyOtherInstitutionsDomestic />

            {/* TABLE 10 */}
            <NonPromoterNonPublicShareholding />

            {/* TABLE 11 */}
            <ForeignOwnershipLimits />

            {/* TABLE 12 */}
            <Remarks />

            {/* TABLE 13 */}
            <ReasonI />

            {/* TABLE 14a */}
            <ReasonII />

        </div>
    )
}

export default ShareholdingPattern22May2025
