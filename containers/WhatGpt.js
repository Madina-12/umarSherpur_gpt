import styles from "./WhatGpt.module.css";
import Heading from "../components/Heading";
const WhatGpt = () => {
  return (
    <section className={styles.what_gpt}  id='what_gpt'  >
      <div className={styles.define}>
        <Heading title="What is GPT-3" />
        <div className={`${styles.description} description`}>
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous   At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </div>
      </div>
      <div className={styles.possibilities_explore}>
        <div className={`${styles.possibilities} heading2`}>The possibilities are beyond your imagination</div>
        <div className={styles.explore}>Explore The Library</div>
      </div>
      <div className={styles.services}>
        <div>
          <Heading title="Chatbots" />
          <div className={`${styles.description} description`}>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.{" "}
          </div>
        </div>
        <div>
          <Heading title="Knowledgebase" />
          <div className={`${styles.description} description`}>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on 
          </div>
        </div>
        <div>
          <Heading title="Education" />
          <div className={`${styles.description} description`}>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on 
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatGpt;
