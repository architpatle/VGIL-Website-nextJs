import React from 'react';

const videos = [
  {
    id: 'bMA-9u12OuY',
    title: 'AI Surveillance System Explained | SecureView AI by Virtual Galaxy | IT Services | VGIL',
  },
  {
    id: 'ynZrnC2pWpg',
    title: 'Meet Virtual AI | The Smart Command Center Powering eBanker Solutions | IT Services | VGIL',
  },
  {
    id: 'UUHr3u0HGck',
    title: "From Legacy to Leap: Virtual Galaxy's Powerful Growth Story 2025-26 | IT Services | VGIL",
  },
  {
    id: 'lJTgu31B2CM',
    title: 'Meet Vaani - AI That Talks Like Humans | IT Services | VGIL',
  },
  {
    id: 'Puy13UvwxgQ',
    title: 'Proudly Public! Virtual Galaxy Infotech Ltd Debuts on NSE',
  },
  {
    id: 'jaoOBodOPeE',
    title: "Behind the Scenes: Our MD Mr. Avinash Shende Shares Insights with Profit Mart's Avinash Gorakshakar",
  },
  {
    id: 'dnlDZ18_M6g',
    title: 'Corporate Presentation Video | VGIL Company Profile Video',
  },
  {
    id: '9CpOwwyQYJY',
    title: 'E-Banker Core Banking Solution | Core Banking Solution for Financial Institutes - Free Demo',
  }
];

function VideoSection() {
  return (
    <section className="section-video flat-spacing" style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
      <div className="container">
        <div className="heading-section center mb-64 text-center">
          <h2 className="heading-title" style={{ color: '#ff4d00', fontWeight: '700', fontSize: '40px' }}>Videos</h2>
        </div>

        <div className="video-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px 30px',
        }}>
          {videos.map((video, index) => (
            <div key={index} className="video-card effectFade fadeUp">
              <a 
                href={`https://www.youtube.com/watch?v=${video.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-thumb-link"
                style={{
                  display: 'block',
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  aspectRatio: '16/9',
                  backgroundColor: '#000'
                }}
              >
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                  alt={video.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="thumb-img"
                />
                
                {/* Play Button SVG */}
                <div className="play-btn-overlay" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '70px',
                  height: '70px',
                  background: 'rgba(255, 77, 0, 0.95)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(255, 77, 0, 0.4)',
                  transition: 'all 0.3s ease',
                  zIndex: 2
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="white" />
                  </svg>
                </div>

                {/* Watch on YouTube Label */}
                <div className="yt-badge" style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(4px)',
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 2,
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <span style={{ color: '#ff0000', fontSize: '14px' }}>▶</span>
                  Watch on YouTube
                </div>

                {/* Dark Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4))',
                  zIndex: 1
                }} />
              </a>
              
              <div style={{ padding: '20px 5px' }}>
                <h6 style={{ 
                  fontSize: '17px', 
                  lineHeight: '1.5', 
                  color: '#111827',
                  fontWeight: '700',
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  transition: 'color 0.3s ease'
                }} className="video-title-text">
                  {video.title}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .video-card:hover .thumb-img {
          transform: scale(1.08);
        }
        .video-card:hover .play-btn-overlay {
          background: #ff4d00;
          transform: translate(-50%, -50%) scale(1.15);
          box-shadow: 0 0 40px rgba(255, 77, 0, 0.6);
        }
        .video-card:hover .video-title-text {
          color: #ff4d00;
        }
        @media (max-width: 991px) {
          .video-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default VideoSection;
