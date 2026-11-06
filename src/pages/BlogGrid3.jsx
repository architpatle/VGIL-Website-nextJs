import React from 'react';
import PageTitle from '../components/common/PageTitle';
import BlogItem from '../components/blog/BlogItem';

function BlogGrid3() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Blog' }
  ];

  const blogs = [
    { image: "/assets/images/blog/blog-1.jpg", delay: "0" },
    { image: "/assets/images/blog/blog-2.jpg", delay: "0.1" },
    { image: "/assets/images/blog/blog-3.jpg", delay: "0.2" },
    { image: "/assets/images/blog/blog-4.jpg", delay: "0" },
    { image: "/assets/images/blog/blog-5.jpg", delay: "0.1" },
    { image: "/assets/images/blog/blog-6.jpg", delay: "0.2" },
  ];

  return (
    <>
      <PageTitle title="VGIL Blog" breadcrumbs={breadcrumbs} />

      <section className="section-blog flat-spacing">
        <div className="container">
          <div className="tf-grid-layout sm-col-2 xl-col-3">
            {blogs.map((blog, index) => (
              <BlogItem 
                key={index}
                image={blog.image}
                category="Website Design"
                title="Helve Tica Website Redesign"
                delay={blog.delay}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogGrid3;
