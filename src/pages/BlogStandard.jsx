import React from 'react';
import PageTitle from '../components/common/PageTitle';
import BlogItem from '../components/blog/BlogItem';
import BlogSidebar from '../components/blog/BlogSidebar';
import Link from "next/link";

function BlogStandard() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Blog' }
  ];

  return (
    <>
      <PageTitle title="VGIL Blog" breadcrumbs={breadcrumbs} />

      <section className="section-blog flat-spacing">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="tf-grid-layout">
                <BlogItem 
                  image="/assets/images/blog/blog-1.jpg"
                  category="Website Design"
                  title="Helve Tica Website Redesign"
                  className="article-blog style-horizontal hover-img effectFade fadeUp no-div"
                />
                <BlogItem 
                  image="/assets/images/blog/blog-2.jpg"
                  category="Website Design"
                  title="Helve Tica Website Redesign"
                  className="article-blog style-horizontal hover-img effectFade fadeUp no-div"
                />
                <BlogItem 
                  image="/assets/images/blog/blog-3.jpg"
                  category="Website Design"
                  title="Helve Tica Website Redesign"
                  className="article-blog style-horizontal hover-img effectFade fadeUp no-div"
                />
                <div className="wd-full effectFade fadeUp no-div">
                  <ul className="wg-pagination">
                    <li><Link to="#" className="pagination-item active">1</Link></li>
                    <li><Link to="#" className="pagination-item">2</Link></li>
                    <li><Link to="#" className="pagination-item">...</Link></li>
                    <li><Link to="#" className="pagination-item"><i className="icon icon-angle-right-solid"></i></Link></li>
                  </ul>
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

export default BlogStandard;
