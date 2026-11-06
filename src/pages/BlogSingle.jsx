import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import BlogSidebar from '../components/blog/BlogSidebar';
import { RESOURCE_DATA } from '../data/resourceData';

function BlogSingle() {
  const { blogSlug } = useParams();
  
  // Find the blog item from RESOURCE_DATA
  const blogResource = RESOURCE_DATA.find(r => r.slug === 'blog');
  const blogItem = blogResource?.gridItems.find(item => item.slug === blogSlug);

  if (!blogItem) {
    return <Navigate to="/404" />;
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/resource/blog' },
    { label: blogItem.title }
  ];

  return (
    <>
      <PageTitle title="VGIL Blog" breadcrumbs={breadcrumbs} />

      <section className="section-blog flat-spacing">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="blog-single-wrap">
                {/* Header Image */}
                <div className="image effectFade fadeZoom mb-40" style={{ 
                  border: '2px solid #000', 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxHeight: '400px'
                }}>
                  <img 
                    loading="lazy" 
                    src={blogItem.image} 
                    alt={blogItem.title} 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      objectFit: 'contain',
                      padding: '20px'
                    }} 
                  />
                </div>
                
                {/* Blog Content */}
                <div className="blog-content-text">
                  <h2 className="fw-bold mb-30" style={{ color: '#ff4d00' }}>{blogItem.title}</h2>
                  <p className="text-body-1 fw-semibold mb-30" style={{ color: '#333', lineHeight: '1.6' }}>
                    {blogItem.desc}
                  </p>
                  <div className="text-body-2" style={{ whiteSpace: 'pre-line', lineHeight: '1.8', color: '#444' }}>
                    {blogItem.content}
                  </div>
                </div>

                <div className="entry-footer mt-60 pt-40" style={{ borderTop: '1px solid #eee' }}>
                  <div className="tags-links">
                    <h6 className="text-body-1">Tags:</h6>
                    <div className="list-tags">
                      <Link to="#" className="tags-item fw-semibold">Technology</Link>
                      <Link to="#" className="tags-item fw-semibold">Banking</Link>
                      <Link to="#" className="tags-item fw-semibold">Innovation</Link>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-12">
                    <h6 className="text-body-1">Share:</h6>
                    <div className="tf-social justify-content-center">
                      <a href="https://x.com/" target="_blank" rel="noreferrer" className="social-item">
                        <i className="icon icon-twitter-x"></i>
                      </a>
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-item">
                        <i className="icon icon-facebook-f"></i>
                      </a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-item">
                        <i className="icon icon-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="post-comment mt-60" id="post-comment">
                  <h4 className="heading fw-semibold">Leave a Comment</h4>
                  <form className="form-cta style-2">
                    <div className="form-content">
                      <fieldset className="">
                        <label className="fw-semibold text-body-3 mb-12">Your Name</label>
                        <input className="" type="text" placeholder="Enter your full name" required />
                      </fieldset>
                      <fieldset className="">
                        <label className="fw-semibold text-body-3 mb-12">Your Email</label>
                        <input className="" type="email" placeholder="Enter your email" required />
                      </fieldset>
                      <fieldset className="">
                        <label className="fw-semibold text-body-3 mb-12">Message</label>
                        <textarea name="text" className="rounded-0" placeholder="Write your thoughts..."></textarea>
                      </fieldset>
                    </div>
                    <div className="form-action">
                      <button type="submit" className="tf-btn">Submit Comment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogSingle;
