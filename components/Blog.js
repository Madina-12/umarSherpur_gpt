import React from "react";
import styles from './Blog.module.css'
import Image from "next/image";
const Blog = ({blog_pic, date, description, article_link}) => {
  return (
    <section className={styles.blog}>
      <div className={styles.blog_pic}>
        <Image
          src={blog_pic}
          fill
          sizes="(max-width:768px) 100vw , 30vw"
          alt=''
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.blog_content}>
        <div className={styles.date}>{date}</div>
        <div className={styles.description}>{description}</div>
        <a href={article_link} className={styles.read_article}>Read Full Article</a>
      </div>
    </section>
  );
};

export default Blog;
