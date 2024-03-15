import React from "react";
import styles from "@styles/quotestyles.module.css";
const QuoteComponent = (props :any) => {
  return (
    <div className={styles.quoteContainer}>
      <div className={[styles.quoteBlock ,styles.quote].join(' ')}>
        <div className={styles.citation}>&quot;{props.citation}&quot;</div>
        <div className={styles.author}>- {props.author} -</div>
      </div>
    </div>
  );
};
export default QuoteComponent;
