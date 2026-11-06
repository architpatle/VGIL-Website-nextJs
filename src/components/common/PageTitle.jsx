import React from 'react';
import Link from "next/link";
import homeBgImg from '../../assets/home/hero-bg-img.jpg'

function PageTitle({ title, breadcrumbs, bgImage }) {
  const headerStyle = bgImage ? { backgroundImage: `url(${bgImage})` } : {};
  return (
    <div className="section-hero" >
      <div className="hero-image" style={{ backgroundImage: `url("${homeBgImg.src}")` }}>
            </div>
      <div className="container">
        <div className="content-wrap text-center">
                        <div className="title text-display-2 effectFade fadeRotateX">

        <h1 className="title1 fw-semibold text-gradient-1 py-2" >{title}</h1>
        </div>
        <div className="title1 fw-semibold text-gradient-1 effectFade fadeUp" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.path ? (
                <Link href={crumb.path} className="link1" style={{ color: '#ffffff', opacity: 0.8 }}>{crumb.label}</Link>
              ) : (
                <div style={{ color: '#ffffff' }}>{crumb.label}</div>
              )}
              {index < breadcrumbs.length - 1 && <div style={{ color: '#ffffff', opacity: 0.6 }}>/</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      </div>

    </div>
  );
}

export default PageTitle;
