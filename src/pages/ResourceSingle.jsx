"use client";

import React from 'react';
import Link from "next/link";
import PageTitle from '../components/common/PageTitle';
import ContactSection from '../components/home/ContactSection';
import { RESOURCE_DATA } from '../data/resourceData';
import VideoSection from '../components/common/VideoSection';
import resourceBgImg from '../assets/home/hero-bg-img.jpg';
import InstagramFeed from '../components/common/InstagramFeed';
import favicon from '../assets/Blogs-img/favicon.png';


function ResourceSingle({ slug }) {
  const resourceData = RESOURCE_DATA.find(r => r.slug === slug);

  if (!resourceData) {
    return null;
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Resource', path: '#' },
    { label: resourceData.title }
  ];

  return (
    <>
      <PageTitle title={resourceData.title} breadcrumbs={breadcrumbs} />
      {slug === 'video' ? (
        <VideoSection />
      ) : (
        <div className="section-spacing-lg" >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <div className="heading-section mb-12">
                  <div className="text-body-1 text-neutral-600 effectFade fadeUp" data-delay="0.1">
                    {resourceData.desc}
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized News/Blog/Press Layouts */}
            {slug === 'media' ? (<InstagramFeed />) : slug === 'news' || slug === 'blog' ? (
              <div className="news-grid mt-4">
                {resourceData.gridItems.map((item, index) => (
                  <div className="news-grid-item h-100 effectFade fadeUp" data-delay={0.1 + (index * 0.05)} key={index}>
                    {slug === 'news' ? (
                      <div className="news-poster-card h-100">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fb-post-mockup"
                        >
                          {/* Image */}
                          <div className="fb-post-content">
                            <div className="fb-image-container">

                              <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  transition: 'transform 0.5s ease'
                                }}
                                className="fb-post-img"
                              />

                              {/* Guest Favourite badge */}
                              {/* <div className="fb-post-badge">
                                  <span>Guest Favourite</span>
                                  </div> */}

                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="fb-post-footer">

                            {/* Title + View */}
                            <div className="news-poster-header">
                              <h4 className="news-poster-title">
                                {item.title}
                              </h4>

                              <div className="fb-post-icon">
                                View
                              </div>
                            </div>

                            {/* Description */}
                            <div className="fb-footer-text">
                              Virtual Galaxy Infotech Limited
                            </div>

                            {/* Bottom information */}
                            <div className="fb-post-top">
                              <div className="fb-post-profile">

                                <div className="fb-profile-img">
                                  <img
                                    src={favicon.src}
                                    alt={resourceData.title}
                                  />
                                </div>

                                <div className="fb-profile-info">
                                  <div className="fb-profile-name">
                                    News
                                  </div>

                                  <div className="fb-post-meta">
                                    About {index + 1} week{index !== 0 ? 's' : ''} ago
                                  </div>
                                </div>

                              </div>
                            </div>

                          </div>
                        </a>
                      </div>
                    ) : (
                      /* Blog Poster Card */
                      <div className="blog-poster-card">
                        <Link href={item.link} className="blog-post-box">
                          <div className="blog-post-image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="blog-post-content-bottom">
                            <h4 className="blog-post-title">{item.title}</h4>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : slug === 'press' ? (
              /* Press Coverage Categorized List */
              <div className="press-coverage-container mt-4">
                {resourceData.categories.map((category, catIndex) => (
                  <div className="press-category mb-60" key={catIndex}>
                    <h3 className="press-category-title mb-30">{category.name}</h3>
                    <div className="press-list">
                      {category.items.map((item, itemIndex) => (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="press-item-link mb-16 effectFade fadeUp"
                          key={itemIndex}
                        >
                          <span className="press-item-title">{item.title}</span>
                          <div className="press-item-action">
                            <span className="press-action-text">
                              {category.name === 'Video Coverage' ? 'Watch Video' : 'Read Article'}
                            </span>
                            <i className={category.name === 'Video Coverage' ? 'icon icon-play-solid' : 'icon icon-arrow-right-solid'}></i>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Default Grid Section */
              resourceData.gridItems && resourceData.gridItems.length > 0 && (
                <div className="row justify-content-center mt-24">
                  {resourceData.gridItems.map((item, index) => (
                    <div className="col-md-6 col-lg-3 mb-24 effectFade fadeUp" data-delay={0.1 + (index * 0.1)} key={index}>
                      <a href={item.link} className="investor-card">
                        <div className="text-body-1 fw-semibold text-dark">{item.title}</div>
                      </a>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      )}

      <style>{`
        .news-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 60px 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  /* Makes grid items stretch to equal row height */
  align-items: stretch;
}

.news-grid-item {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.news-poster-card,
.blog-poster-card {
  width: 100%;
  height: 100%;
}

.fb-post-mockup,
.blog-post-box {
  height: 100%;
}

.news-poster-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.fb-post-mockup {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.fb-post-footer {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.fb-post-top {
  margin-top: auto;
}

        .news-poster-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.news-poster-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
}

        .news-poster-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
}
        .news-poster-title {
  margin: 0;
  color: #222;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
      .fb-post-mockup {
  display: block;
  text-decoration: none;
  color: inherit;
  background: #fff;
}
        .fb-post-mockup:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 30px rgba(0,0,0,0.1);
          border-color: #ff4d00;
        }
   .fb-post-top {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid #eee;
}
        .fb-post-profile {
  display: flex;
  align-items: center;
}
       .fb-profile-img {
  display: none;
}
         .fb-profile-img img{
         width: 44px;
         height: 44px;
         border-radius: 50%;}


      .fb-profile-info {
  display: flex;
  align-items: center;
  width: 100%;
}
        .fb-profile-name {
  padding-right: 13px;
  margin-right: 13px;
  border-right: 1px solid #ddd;

  color: #555;
  font-size: 11px;
  font-weight: 500;
}
       .fb-post-meta {
  color: #888;
  font-size: 12px;
  font-weight: 500;
}
       .fb-post-icon {
  flex-shrink: 0;
  color: #222;
  font-size: 13px;
  font-weight: 600;
}
        // .fb-post-icon i {
        //   font-weight: bold;
        //       z-index: 1000 !important;
        // }
    .fb-post-content {
  width: 100%;
  margin: 0;
  padding: 0;
}
       .fb-image-container {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.fb-post-img {
  display: block;
  width: 100% !important;
  height: 240px !important;
  object-fit: cover;
  margin: 0;
  border-radius: 10px;
}
       .fb-post-mockup:hover .fb-post-img {
  transform: scale(1.04);
}
        .fb-image-overlay {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #1877f2;
          color: #fff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          z-index: 2;
          box-shadow: 0 4px 10px rgba(24, 119, 242, 0.3);
        }
        .fb-post-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 7px 13px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  color: #222;
  font-size: 11px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
        .fb-post-mockup:hover .fb-post-badge {
          opacity: 1;
          background: #1877f2;
          transform: translateX(-50%) translateY(-5px);
        }
       .fb-post-footer {
  padding: 16px 18px 14px;
}
       .fb-footer-text {
  margin-top: 7px;
  color: #777;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 700;
}



@media (max-width: 992px) {
  .fb-image-container {
    height: 230px;
  }
}

@media (max-width: 600px) {
  .fb-image-container {
    height: 240px;
  }
}



        /* Blog Poster Card Styles */
        .blog-poster-card {
  width: 100%;
  height: 100%;
}

.blog-post-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blog-post-content-bottom {
  flex: 1;
}
        .blog-poster-card {
          height: 100%;
        }
        .blog-post-box {
          display: block;
          background: #fff;
        
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          text-decoration: none;
          box-shadow: 10px 24px 15px rgba(247, 194, 159, 0.44);
        }
        .blog-post-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: #ff4d00;
        }
        .blog-post-image {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
        
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .blog-post-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
          padding: 10px;
        }
        .blog-post-box:hover .blog-post-image img {
          transform: scale(1.05);
        }
        .blog-post-content-bottom {
          padding: 20px;
          background: #fff;
        }
        .blog-post-title {
          font-size: 18px;
          line-height: 1.4;
          color: #111827;
          font-weight: 700;
          margin: 0;
          transition: color 0.3s ease;
        }
        .blog-post-box:hover .blog-post-title {
          color: #ff4d00;
        }

        /* Press Coverage Styles */
        .press-category-title {
          font-size: 24px;
          color: #111827;
          font-weight: 700;
          border-left: 4px solid #ff4d00;
          padding-left: 15px;
        }
        .press-item-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 25px;
          background: #fff;
          border: 1.5px solid #ff4d00;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(255, 77, 0, 0.05);
        }
        .press-item-link:hover {
          background: #fffcfb;
          transform: translateX(10px);
          box-shadow: 0 10px 25px rgba(255, 77, 0, 0.1);
        }
        .press-item-title {
          font-size: 16px;
          color: #374151;
          font-weight: 600;
          line-height: 1.4;
          transition: color 0.3s ease;
        }
        .press-item-link:hover .press-item-title {
          color: #ff4d00;
        }
        .press-item-action {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: fit-content;
        }
        .press-action-text {
          font-size: 14px;
          color: #ff4d00;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
        }
        .press-item-link:hover .press-action-text {
          opacity: 1;
          transform: translateX(0);
        }
        .press-item-link i {
          color: #ff4d00;
          font-size: 16px;
          transition: transform 0.3s ease;
        }
        .press-item-link:hover i {
          transform: translateX(5px);
        }

        @media (max-width: 991px) {
          .news-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .news-poster-card {
            padding: 0;
          }
          .news-poster-header {
            min-height: unset;
            padding-bottom: 10px;
          }
        }
      `}</style>

      {/* <div>
        <ContactSection />
      </div> */}
    </>
  );
}

export default ResourceSingle;
