import styles from "./Button.module.css";

const Button = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.button}>
        <div className={styles.button__content}>
          <span className={`${styles.button__text} font-neue-haas-grotesk`}>
            BUTTON
          </span>
          <div className={styles.button__reflection_1}></div>
          <div className={styles.button__reflection_2}></div>
        </div>
        <img
          src="/star1.png"
          alt=""
          className={`${styles.button__star_1} ${styles.image}`}
        />
        <img
          src="/star1.png"
          alt=""
          className={`${styles.button__star_2} ${styles.image}`}
        />
        <img
          src="/star1.png"
          alt=""
          className={`${styles.button__star_3} ${styles.image}`}
        />
        <img
          src="/star1.png"
          alt=""
          className={`${styles.button__star_4} ${styles.image}`}
        />
        <img
          src="/star1.png"
          alt=""
          className={`${styles.button__star_5} ${styles.image}`}
        />
        <img
          src="/star1.png"
          alt=""
          className={`${styles.button__star_6} ${styles.image}`}
        />
        <img
          src="/star1.png"
          alt=""
          className={`${styles.button__star_7} ${styles.image}`}
        />
        <div className={styles.button__shadow}></div>
      </a>
    </div>
  );
};

export default Button;
