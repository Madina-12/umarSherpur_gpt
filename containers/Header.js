import Image from "next/image";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <section  id='header' >
      <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={`${styles.heading} heading1`}>
          Let’s Build Something amazing with GPT-3 OpenAI
        </div>
        <div className={`${styles.description} description`}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </div>
        <div className={styles.email_button}>
          <input type="text" placeholder="Enter Email Address" name="" id="" className={styles.email} />
          <button className={`${styles.button} btn`}>Get Started</button>
        </div>
        <div className={styles.people}>
          <div className={styles.people_image}><Image src="/assets/people.png" fill alt="" sizes="(max-width:768px) 70vw , 20vw" style={{objectFit:'contain'}} /></div>
          <div className={styles.people_count}>1,600 people requested access a visit in last 24 hours</div>
        </div>
      </div>
      <div className={styles.ai_image}><Image src="/assets/ai.png" fill alt="ai" sizes="(max-width:768px) 100vw, 50vw" style={{objectFit:'contain'}}  priority='false' /></div>
    </div>
    <div className={styles.brands}>
      <div><Image src="/assets/google.png" fill alt="" sizes="(max-width:768px) 20vw , 10vw" style={{objectFit:'contain'}} priority /></div>
      <div><Image src="/assets/slack.png" fill alt="" sizes="(max-width:768px) 20vw , 10vw" style={{objectFit:'contain'}} priority /></div>
      <div><Image src="/assets/atlassian.png" fill alt="" sizes="(max-width:768px) 20vw , 10vw" style={{objectFit:'contain'}} priority /></div>
      <div><Image src="/assets/dropbox.png" fill alt="" sizes="(max-width:768px) 20vw , 10vw" style={{objectFit:'contain'}} priority /></div>
      <div><Image src="/assets/shopify.png" fill alt="" sizes="(max-width:768px) 20vw , 10vw" style={{objectFit:'contain'}} priority /></div>
    </div>
    </section>
  );
};

export default Header;

