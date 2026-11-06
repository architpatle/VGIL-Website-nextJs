import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import partner1 from '../../assets/Government Projects/gmc_nagpur.png';
import partner2 from '../../assets/Government Projects/high_court.png';
import partner3 from '../../assets/Government Projects/igmc_nagpur.png';
import partner4 from '../../assets/Government Projects/macp_bank.png';
import partner5 from '../../assets/Government Projects/maharashtra-co-bank.png';
import partner6 from '../../assets/Government Projects/maharashtra-labour-bank.png';
import partner7 from '../../assets/Government Projects/maharashtra.png';
import partner8 from '../../assets/Government Projects/msamb.png';
import partner9 from '../../assets/Government Projects/mumbai_apmc.png';
import partner10 from '../../assets/Government Projects/nach.png';
import partner11 from '../../assets/Government Projects/nmmc.png';
import partner12 from '../../assets/inter-banking-projects/arusha_saccos.png';
import partner13 from '../../assets/inter-banking-projects/dcb_bank.png';
import partner14 from '../../assets/inter-banking-projects/maiic_bank.png';
import partner15 from '../../assets/inter-banking-projects/nyombo_saccos.png';
import partner16 from '../../assets/inter-banking-projects/trasaccos.png';
import partner17 from '../../assets/inter-banking-projects/wazalendo_saccos.png';
import partner18 from '../../assets/inter-banking-projects/wazo_hill_saccos_ltd.png';
import partner19 from '../../assets/National-bank/apex_bank.png';
import partner20 from '../../assets/National-bank/auranabad-dcc.png';
import partner21 from '../../assets/National-bank/bdcc_bank.png';
import partner22 from '../../assets/National-bank/bhandara_bank.png';
import partner23 from '../../assets/National-bank/bhandara_urban_co_bank.png';
import partner24 from '../../assets/National-bank/gdcc_bank.png';
import partner25 from '../../assets/National-bank/jalna-logo.png';
import partner26 from '../../assets/National-bank/mahalaxmi_bank.png';
import partner27 from '../../assets/National-bank/nagar_sahakari_bank.png';
import partner28 from '../../assets/National-bank/osmanbad_dcc_bank.png';
import partner29 from '../../assets/National-bank/pusad_urban_bank.png';
import partner30 from '../../assets/National-bank/sadhana_sahkari_bank.png';
import partner31 from '../../assets/National-bank/sanmitra_mahil_agri_sahakari_bank.png';
import partner32 from '../../assets/National-bank/wardha_dcc_bank_Ltd.png';
import partner33 from '../../assets/National-bank/yavatmal_dcc_bank.png';


function PartnerSection() {
  const logoStyle = {
    height: '130px',
    width: '100%',
    objectFit: 'contain',
    margin: '0 auto',
    maxWidth: '180px',
    display: 'block'
  };

  return (
    <div className="section-partner section-spacing-sm" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="partner-wrap d-flex flex-wrap" style={{ alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
              <p className="text-secondary text fw-semibold mb-0" style={{ minWidth: '150px', textAlign: 'center', flex: '1 1 100%' }}>
                Trusted by 100+ top-tier brands
              </p>


              <style dangerouslySetInnerHTML={{
                __html: `
                .partner-wrap .swiper-wrapper {
                  transition-timing-function: linear !important;
                }
                .partner-wrap .swiper {
                  width: 100%;
                }
                @media (max-width: 767px) {
                  .partner-wrap .swiper {
                    max-width: 290px;
                    margin: 0 auto;
                  }
                  .partner-wrap img {
                    height: 80px !important;
                  }
                  .section-partner {
                    padding-top: 10px !important;
                    padding-bottom: 10px !important;
                  }
                }
              `}} />
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={6}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={4000}
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 20 },
                  640: { slidesPerView: 3, spaceBetween: 30 },
                  1024: { slidesPerView: 6, spaceBetween: 40 },
                }}
              >
                {[
                  partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8,
                  partner9, partner10, partner11, partner12, partner13, partner14, partner15,
                  partner16, partner17, partner18, partner19, partner20, partner21, partner22,
                  partner23, partner24, partner25, partner26,
                  partner27, partner28, partner29, partner30,
                  partner31, partner32, partner33
                ].map((logo, index) => (
                  <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logo} alt={`partner-${index}`} style={logoStyle} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;