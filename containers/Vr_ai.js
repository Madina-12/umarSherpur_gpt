import styles from "./Vr_ai.module.css";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/Ai";

import Image from "next/image";
const Vr_ai = () => {
  return (
    <section id='vr_ai' >
      <div className={styles.vr_ai}>
        <div className={styles.pic}>
          <div className={styles.vr_ai_pic}>
            <Image
              src="/assets/vr_ai.png"
              fill
              sizes="(max-width:768px) 100vw , 40vw"
              alt="vr_ai"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={`${styles.icon} ${styles.message_icon}`}>
            <BiMessageDetail />
          </div>
          <div className={`${styles.icon} ${styles.apps_icon}`}>
            <AiOutlineAppstore /> &nbsp;My&nbsp;Apps
          </div>
        </div>
        <div className={styles.motivation}>
          <div className={`${styles.get_started1} description`}>
            Request Early Access to Get Started
          </div>
          <div className={`${styles.heading} heading2`}>
            The possibilities are beyond your imagination
          </div>
          <div className={`${styles.description} description`}>
            Ya for travelling assistance indulgence unpleasing. Not thoughts all
            exercise blessing. Indulgence way everything joy alteration
            boisterous the attachment. Party we years to order allow asked of.
          </div>
          <div className={styles.get_started2}>
            Request Early Access to Get Started
          </div>
        </div>
      </div>
      <div className={styles.register}>
        <div>
          <div className={styles.request_early_access}>
            Request Early Access to Get Started
          </div>
          <div className={styles.register_today}>
            Register today & start exploring the endless possiblities.
          </div>
        </div>
        <button className={`${styles.get_started_btn} btn`}>Get Started</button>
      </div>
    </section>
  );
};

export default Vr_ai;
