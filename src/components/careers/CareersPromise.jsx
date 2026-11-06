import React from 'react';

function CareersPromise() {
  const promises = [
    {
      title: 'Continue Learning',
      description: 'We encourage continuous growth and provide resources to sharpen your skills through dedicated training and certifications.',
      icon: 'book-open-solid',
      color: '#ff2d15'
    },
    {
      title: 'Leadership',
      description: 'Step up and lead initiatives in a supportive environment. We value and nurture leadership potential at every level.',
      icon: 'user-friends-solid',
      color: '#4f46e5'
    },
    {
      title: 'Strong Bond',
      description: 'Work with a team that feels like family. Our collaborative culture is the cornerstone of our shared success.',
      icon: 'heart-solid',
      color: '#059669'
    }
  ];

  return (
    <div className="section-promise flat-spacing" style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading-section center mb-60">
              <div className="heading-sub fw-bold mb-16 effectFade fadeUp" style={{ color: '#ff2d15', fontSize: '14px', textTransform: 'uppercase' }}>Why Virtual Galaxy?</div>
              <h2 className="heading-title effectFade fadeRotateX" style={{ fontWeight: '700' }}>Our Promise To You</h2>
              <p className="text-secondary mt-16 effectFade fadeUp">We don't just offer jobs; we offer a path to growth and innovation.</p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {promises.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="promise-card-v2 p-48 h-100" style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '32px', 
                border: '1px solid #f3f4f6',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = '#ff2d15';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.02)';
                e.currentTarget.style.borderColor = '#f3f4f6';
              }}
              >
                <div className="promise-icon mb-32" style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '20px',
                  backgroundColor: `${item.color}10`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}>
                  <i className={`icon icon-${item.icon}`} style={{ color: item.color, fontSize: '28px' }}></i>
                </div>
                <h4 className="title fw-bold mb-20" style={{ fontSize: '22px' }}>{item.title}</h4>
                <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '15px' }}>{item.description}</p>
                
                {/* Decorative background number */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '30px',
                  fontSize: '80px',
                  fontWeight: '900',
                  color: '#f9fafb',
                  zIndex: -1,
                  pointerEvents: 'none'
                }}>
                  {idx + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareersPromise;
