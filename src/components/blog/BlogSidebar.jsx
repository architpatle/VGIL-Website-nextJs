import React from 'react';
import Link from "next/link";
import { RESOURCE_DATA } from '../../data/resourceData';

function BlogSidebar() {
  const blogResource = RESOURCE_DATA.find(r => r.slug === 'blog');
  const recentPosts = blogResource?.gridItems || [];

  return (
    <div className="blog-sidebar m-lg-0">
      <div className="sidebar-item effectFade fadeUp no-div">
        <h5 className="sidebar-title">Search</h5>
        <form className="form-search">
          <fieldset className="text">
            <input type="text" placeholder="Search" className="" name="search" tabIndex="0" defaultValue="" required="" />
          </fieldset>
          <button type="submit" className="link1 text-white">
            <i className="icon icon-search-solid"></i>
          </button>
        </form>
      </div>
      
      <div className="sidebar-item effectFade fadeUp no-div">
        <h5 className="sidebar-title">Recent posts</h5>
        <div className="list-relatest-post">
          {recentPosts.map((post, index) => (
            <div className="relatest-post-item" key={index}>
              <div className="image">
                <img loading="lazy" width="80" height="80" src={post.image} alt={post.title} />
              </div>
              <div className="content">
                <h6 className="title text-body-1">
                  <Link href={post.link} className="link1">{post.title}</Link>
                </h6>
                <p className="time text-body-3 text-white-64">August 23, 2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-item effectFade fadeUp no-div">
        <h5 className="sidebar-title">Category</h5>
        <div className="sidebar-categories">
          <div className="item">
            <Link href="#" className="text-body-1 link1">Enterprise Solutions</Link>
            <span className="text-body-3 text-white-64">(2)</span>
          </div>
          <div className="item">
            <Link href="#" className="text-body-1 link1">Banking Tech</Link>
            <span className="text-body-3 text-white-64">(3)</span>
          </div>
          <div className="item">
            <Link href="#" className="text-body-1 link1">Cybersecurity</Link>
            <span className="text-body-3 text-white-64">(1)</span>
          </div>
        </div>
      </div>

      <div className="sidebar-item effectFade fadeUp no-div">
        <h5 className="sidebar-title">Popular tag</h5>
        <div className="list-tags">
          <Link href="#" className="tags-item fw-semibold">ERP</Link>
          <Link href="#" className="tags-item fw-semibold">Cloud</Link>
          <Link href="#" className="tags-item fw-semibold">AI</Link>
          <Link href="#" className="tags-item fw-semibold">Banking</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogSidebar;
