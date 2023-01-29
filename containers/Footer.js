import styles from './Footer.module.css'
const Footer = () => {
  return (
    <section className={styles.footer}  id='footer' >
        <div>
            <div className={`${styles.heading} heading1`}>
                Do you want to step in to the future before others
            </div>
            <button className={`${styles.button} btn`}>
                Request Early Access
            </button>
        </div>
        <div className={styles.other_info}>
            <div className={styles.logo_address}>
                <div className={styles.logo}>GPT-3</div>
                <li className={styles.address}>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</li>
            </div>
            <div className={styles.links}>
                <div className={styles.heading2}>Links</div>
                <ul>
                    <li><a href=''>Overons</a></li>
                    <li><a href=''>Social Media</a></li>
                    <li><a href=''>Counters</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </div>
            <div className={styles.company}>
                <div className={styles.heading2}>Company</div>
                <ul>
                    <li><a href=''>Terms & Conditions</a></li>
                    <li><a href=''>Privacy Policy</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </div>
            <div className={styles.get_in_touch}>
                <div className={styles.heading2}>Get in touch</div>
                <ul>
                    <li><a href=''>Crechterwoord K12 182 DK Alknjkcb</a></li>
                    <li><a href=''>085-132567</a></li>
                    <li><a href=''>info@payme.net</a></li>
                </ul>
            </div>
        </div>
        <div className={styles.copyright}>© 2021 GPT-3. All rights reserved.</div>
    </section>
  )
}

export default Footer