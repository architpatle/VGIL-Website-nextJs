import vgLogo from '../../assets/home/ownwer-img/vg-logo-2.png';

function FeaturesSection() {
  return (
    <div className="section-features section-spacing-lg">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Features</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">The complete AI-native Feature Set</div>
        </div>
      </div>
      <div className="position-relative">
        <div className="container z-5">
          <div className="features-wrap justify-content-between">
            <div className="features-col col-left lg-mb-24" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="features-item effectFade fadeUp" style={{ padding: '20px', flex: 1, display: 'flex', alignItems: 'center' }}>
                <div className='fi-content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                  <i className="icon icon-robot-solid" style={{ fontSize: '28px', flexShrink: 0, marginTop: '3px' }}></i>
                  <div>
                    <h6 className="title fw-semibold" style={{ fontSize: '16px', marginBottom: '8px', marginTop: '0' }}>Autonomous AI Operations</h6>
                    <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      Automate routine tasks end-to-end — AI plans, executes, and reports with safety checks, logs, and smooth human handover.
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-item effectFade fadeUp" style={{ padding: '20px', flex: 1, display: 'flex', alignItems: 'center' }}>
                <div  className='fi-content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                  <i className="icon icon-clipboard-check-solid" style={{ fontSize: '28px', flexShrink: 0, marginTop: '3px' }}></i>
                  <div>
                    <h6 className="title fw-semibold" style={{ fontSize: '16px', marginBottom: '8px', marginTop: '0' }}>Quality-First Validation</h6>
                    <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      Track accuracy, latency, safety, and spend from day zero. Our evals + dashboards ensure models stay dependable and costs stay controlled.
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-item effectFade fadeUp" style={{ padding: '20px', flex: 1, display: 'flex', alignItems: 'center' }}>
                <div  className='fi-content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                  <i className="icon icon-book-solid" style={{ fontSize: '28px', flexShrink: 0, marginTop: '3px' }}></i>
                  <div>
                    <h6 className="title fw-semibold" style={{ fontSize: '16px', marginBottom: '8px', marginTop: '0' }}>Private Data Intelligence</h6>
                    <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      Unlock docs, tickets, and wikis with secure RAG — delivers fresh, cited, and explainable responses from your own knowledge base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="features-center flex-shrink d-flex align-items-center justify-content-center" style={{ background: '#ffff', padding: '40px 30px', borderRadius: '40px', border: '1px solid #27272a', minWidth: '220px' }}>
              <img src={vgLogo.src} alt="Virtual Galaxy Logo" style={{ maxWidth: '180px', width: '100%', height: 'auto' }} />
            </div>
            
            <div className="features-col col-right" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="features-item effectFade fadeUp" data-delay="0.1" style={{ padding: '20px', flex: 1, display: 'flex', alignItems: 'center' }}>
                <div  className='fi-content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                  <i className="icon icon-user-check-solid" style={{ fontSize: '28px', flexShrink: 0, marginTop: '3px' }}></i>
                  <div>
                    <h6 className="title fw-semibold" style={{ fontSize: '16px', marginBottom: '8px', marginTop: '0' }}>Intuitive AI Experience</h6>
                    <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      Interfaces, prompts, and errors built for real people — so the smartest option is also the simplest one to use.
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-item effectFade fadeUp" data-delay="0.1" style={{ padding: '20px', flex: 1, display: 'flex', alignItems: 'center' }}>
                <div  className='fi-content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                  <i className="icon icon-shield-alt-solid" style={{ fontSize: '28px', flexShrink: 0, marginTop: '3px' }}></i>
                  <div>
                    <h6 className="title fw-semibold" style={{ fontSize: '16px', marginBottom: '8px', marginTop: '0' }}>Built-in Enterprise Security</h6>
                    <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      Hardened from day one — SSO, role-based access, secret management, and full compliance baked into the architecture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="features-item effectFade fadeUp" data-delay="0.1" style={{ padding: '20px', flex: 1, display: 'flex', alignItems: 'center' }}>
                <div  className='fi-content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px', width: '100%' }}>
                  <i className="icon icon-plug-solid" style={{ fontSize: '28px', flexShrink: 0, marginTop: '3px' }}></i>
                  <div>
                    <h6 className="title fw-semibold" style={{ fontSize: '16px', marginBottom: '8px', marginTop: '0' }}>Universal Tool Connectivity</h6>
                    <p className="text-secondary" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      Connect to your current stack — CRM, helpdesk, ERP, data warehouse — via webhooks and APIs to convert data into action instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="side-line-main d-none d-lg-block wow fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mx-auto">
                <div className="side-line-wrap">
                  <div className="link-break-line left">
                    <div className="link-break-line">
                      <span className="item top"></span>
                      <span className="item bottom"></span>
                    </div>
                  </div>
                  <div className="link-break-center">
                    <span className="simu-electric left"></span>
                    <span className="simu-electric right"></span>
                  </div>
                  <div className="link-break-line right">
                    <span className="item top"></span>
                    <span className="item bottom"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Connector Lines & Sparks (visible below 990px) */}
        
      </div>
    </div>
  );
}

export default FeaturesSection;
