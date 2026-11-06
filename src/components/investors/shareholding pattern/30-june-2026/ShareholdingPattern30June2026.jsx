import GeneralInformation from "./tables/GeneralInformation";
import Declaration from "./tables/Declaration";
import ForeignOwnershipLimits from "./tables/ForeignOwnershipLimits";
import SummaryStatement from "./tables/SummaryStatement";
import ShareholdingEncumbrance from "./tables/ShareholdingEncumbrance";
import PromoterPublicShareholding from "./tables/PromoterPublicShareholding";
import ShareholdingEncumbrance2 from "./tables/ShareholdingEncumbrance2";
import IndividualHinduUndividedFamily from "./tables/IndividualHinduUndividedFamily";
import IndividualHinduUndividedFamily8 from "./tables/IndividualHinduUndividedFamily8";
import AnyOther from "./tables/AnyOther";

function ShareholdingPattern30June2026() {
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
            <IndividualHinduUndividedFamily />

            {/* TABLE 9 */}
            <IndividualHinduUndividedFamily8 />

            {/* TABLE 10 */}
            <AnyOther />
        </div>
    );
}


export default ShareholdingPattern30June2026;