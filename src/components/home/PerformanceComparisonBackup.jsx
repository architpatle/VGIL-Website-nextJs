import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

function PerformanceComparison() {
  const withoutList = [
    "Unclear costs and limited visibility",
    "Resources not fully optimized",
    "Security and governance handled separately",
    "Disconnected tools and manual workflows",
    "Slower delivery cycles",
    "Limited coordination across teams",
    "Scattered data and inconsistent insights",
    "Key knowledge locked in silos",
    "Decisions based on incomplete information"
  ];

  const withList = [
    "Transparent, scalable infrastructure from day one",
    "Efficient resource utilization with better performance",
    "Built-in security, governance, and reliability",
    "Seamless workflows across systems and teams",
    "Faster, automated execution at scale",
    "Real-time coordination and visibility",
    "Unified data across the organization",
    "Connected systems with shared intelligence",
    "Clear, insight-driven decision making"
  ];

  return (
    <div className="section-performance-comparison section-spacing-grouped" id="performance" style={{ background: '#fcfcfc' }}>
      <div className="container">
        <div className="heading-section center mb-60">
          <div className="heading-sub fw-semibold effectFade fadeUp">Performance</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">From Disconnected Systems <br /> to Connected Growth</div>
        </div>

        <div className="row justify-content-center gap-24">
          {/* Without Virtual Galaxy */}
          <div className="col-lg-5 col-md-6" >
            <div className="performance-card-v" style={{
              // background: 'var(--body)',
              // border: '1px solid rgba(239, 68, 68, 0.15)',
              borderRadius: '24px',
              padding: '40px 30px',
              height: '100%',
              // boxShadow: '0 10px 30px rgba(239, 68, 68, 0.02)',
              backgroundColor: 'var(--neutral-100)',
  boxShadow: '0px 7.77px 16px 0px rgba(0, 0, 0, 0.0588235294), 0px 3px 3px 0px rgba(0, 0, 0, 0.1019607843), 0px -8px 0px 0px rgba(0, 0, 0, 0.0509803922) inset, 0px 4px 0px 0px rgba(255, 255, 255, 0.6) inset',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div className="d-flex align-items-center gap-12 mb-30 pb-20 border-bottom" style={{ borderColor: 'rgba(239, 68, 68, 0.1)' }}>
                <div style={{ display: 'flex', padding: '10px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)' }}>
                  <XCircle size={24} className="text-danger" />
                </div>
                <h5 className="fw-semibold mb-0" style={{ color: '#1f2937', fontSize: '20px' }}>Without Virtual Galaxy</h5>
              </div>

              <ul className="d-flex flex-column gap-15 list-unstyled mb-0" style={{ paddingLeft: 0 }}>
                {withoutList.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-12" style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.5' }}>
                    <XCircle size={16} className="text-danger mt-1" style={{ minWidth: '16px', marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* With Virtual Galaxy */}
          <div className="col-lg-5 col-md-6 ">
            <div className="performance-card-v" style={{
              // background: '#fff',
              // border: '2px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '24px',
              padding: '40px 30px',
              height: '100%',
              // boxShadow: '0 15px 35px rgba(34, 197, 94, 0.08)',
              backgroundColor: 'var(--neutral-100)',
  boxShadow: '0px 7.77px 16px 0px rgba(0, 0, 0, 0.0588235294), 0px 3px 3px 0px rgba(0, 0, 0, 0.1019607843), 0px -8px 0px 0px rgba(0, 0, 0, 0.0509803922) inset, 0px 4px 0px 0px rgba(255, 255, 255, 0.6) inset',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div className="d-flex align-items-center gap-12 mb-30 pb-20 border-bottom" style={{ borderColor: 'rgba(34, 197, 94, 0.1)' }}>
                <div style={{ display: 'flex', padding: '10px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.1)' }}>
                  <CheckCircle2 size={24} className="text-success" />
                </div>
                <h5 className="fw-semibold mb-0" style={{ color: '#111827', fontSize: '20px' }}>With Virtual Galaxy</h5>
              </div>

              <ul className="d-flex flex-column gap-15 list-unstyled mb-0" style={{ paddingLeft: 0 }}>
                {withList.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-12" style={{ fontSize: '15px', color: '#1f2937', fontWeight: '500', lineHeight: '1.5' }}>
                    <CheckCircle2 size={16} className="text-success mt-1" style={{ minWidth: '16px', marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceComparison;
