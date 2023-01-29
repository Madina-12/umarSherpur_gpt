import styles from "./Blogs.module.css";
import Blog from "../components/Blog";
import Image from "next/image";
const Blogs = () => {
  return (
    <section className={styles.blogs}  id='blogs'  >
      <div className={`${styles.heading} heading1`}>
        A lot is happening, <br />
        We are blogging about it.
      </div>
      <div className={styles.all_blogs}>
        <div className={styles.blog1}>
          <div className={styles.blog1_pic}>
            <Image src='/assets/blog01.png' fill alt="" sizes="(max-width:768px) 100vw , 40vw" style={{ objectFit: "cover" }} priority="false" />
          </div>
          <div className={styles.blog1_content}>
            <div className={styles.date}>Sep 26, 2021</div>
            <div className={styles.description}>GPT-3 and Open  AI is the future. Let us exlore how it is?</div>
            <a href='' className={styles.read_article}>
              Read Full Article
            </a>
          </div>
        </div>
        <div className={styles.small_blogs}>
          <Blog
            date="Sep 26, 2021"
            blog_pic="/assets/blog02.png"
            description="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            article_link=""
          />
          <Blog
            date="Sep 26, 2021"
            blog_pic="/assets/blog03.png"
            description="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            article_link=""
          />
          <Blog
            date="Sep 26, 2021"
            blog_pic="/assets/blog04.png"
            description="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            article_link=""
          />
          <Blog
            date="Sep 26, 2021"
            blog_pic="/assets/blog05.png"
            description="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            article_link=""
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
