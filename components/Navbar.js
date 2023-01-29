import styles from "./Navbar.module.css";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const menuHandler = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  const [menu, setMenu] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>GPT-3</div>
      <ul className={styles.topics}>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#what_gpt">What is GPT?</a>
        </li>
        <li>
          <a href="#vr_ai">Open AI</a>
        </li>
        <li>
          <a href="#blogs">Case Studies</a>
        </li>
        <li>
          <a href="#footer">Library</a>
        </li>
      </ul>
      <div className={styles.registration}>
        <div className={styles.sign_in}>Sign in</div>
        <button className={styles.sign_up}>Sign up</button>
      </div>


      <div className={styles.mobile_menu} onClick={menuHandler}>
        <div className={styles.menu}>{menu ? <RxCross1 />:<RiMenu3Fill /> }</div>
        {menu && (
          <ul className={styles.topics_mobile}>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#what_gpt">What is GPT?</a>
            </li>
            <li>
              <a href="#vr_ai">Open AI</a>
            </li>
            <li>
              <a href="#blogs">Case Studies</a>
            </li>
            <li>
              <a href="#footer">Library</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
