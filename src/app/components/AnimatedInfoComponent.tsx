'use client';
import React from "react";
import styles from '@styles/consolestyles.module.css';

const AnimatedInfoConsole = () => {
  return (
    <>
      <div className="column-6"  id={styles.screen}>
        <span className={styles.promptWrapper}>
          [yagzanmanju@work ~]$ whois yagzan
          <div className={styles.promptWrapper}>
            <span id="promptWork" className={styles.typing}>
              Hello!
            </span>
          </div>
        </span>
      </div>
      <div className="column-6"  id={styles.screen}>
        <span className={styles.promptWrapper}>
          [yagzanmanju@home ~]$ whois yagzan
          <div className={styles.promptWrapper}>
            <span id="promptHome" className={styles.typing}>
              Hiiiii...!
            </span>
          </div>
        </span>
      </div>
    </>
  );
};
export default AnimatedInfoConsole;
