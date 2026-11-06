
import React from 'react';
import Link from "next/link";

function BlogItem({
  image,
  category,
  title,
  link = "/blog-single",
  className = "article-blog hover-img effectFade fadeUp no-div",
  delay
}) {
  return (
    <div className={className} data-delay={delay}>
      <Link href={link} className="blog-image img-style">
        <img
          loading="lazy"
          width="426"
          height="307"
          src={image}
          alt="Image"
        />
      </Link>

      <div className="blog-content">
        <div className="infor">
          <p className="infor_sub text-secondary">{category}</p>

          <h6 className="fw-semibold">
            <Link href={link} className="link1 infor_name">
              {title}
            </Link>
          </h6>
        </div>

        <Link href={link} className="tf-btn-2">
          Read more
          <i className="icon icon-arrow-top-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
