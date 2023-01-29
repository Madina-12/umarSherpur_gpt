import styles from "./Contact_us.module.css";
import Heading2 from '../components/Heading2'
const Contact_us = () => {
  return (
    <section className={styles.contact_us}>
      <div>
        <div className={`${styles.motivation} heading2`}>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </div>
        <div className={styles.get_started}>
          Request Early Access to Get Started
        </div>
      </div>
      <div className={styles.benefits}>
        <div>
          <Heading2 title="Improving end distrusts instantly " />
          <div className={'description'}>
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts
          </div>
        </div>
        <div>
          <Heading2 title="Become the tended active" />
          <div className={'description'}>
            Considered sympathize ten uncommonly occasional assistance
            sufficient not.
          </div>
        </div>
        <div>
          <Heading2 title="Message or am nothing" />
          <div className={'description'}>
            Led ask possible mistress relation elegance eat likewise debating.
            By message.
          </div>
        </div>
        <div>
          <Heading2 title="Really boy law county" />
          <div className={'description'}>
            Really boy law county she unable her sister. Feet you off its like
            like six.In built table.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_us;
