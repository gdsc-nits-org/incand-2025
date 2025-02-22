import Image from "next/image";
import styles from "~/styles/FooterButton.module.css";

const FooterButton = () => {
  return (
    <div className={`${styles.container} scale-[1.2] mobile3:scale-100`}>
      <a
        href="https://drive.google.com/file/d/1exqdHIuQ4lG6tFmHhySKvvUe5bsTQj-5/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className={styles.button}
      >
        <div className={styles.button__content}>
          <span className={`${styles.button__text} font-neue-haas-grotesk`}>
            BROCHURE
          </span>

          <div className={styles.button__reflection_1}></div>
        </div>

        <Image
          src="/assets/HiddenQuest&Button/star1.png"
          alt="Star 1"
          className={`${styles.button__star_1} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star1.png"
          alt="Star 2"
          className={`${styles.button__star_2} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star1.png"
          alt="Star 3"
          className={`${styles.button__star_3} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star1.png"
          alt="Star 4"
          className={`${styles.button__star_4} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star1.png"
          alt="Star 5"
          className={`${styles.button__star_5} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star1.png"
          alt="Star 6"
          className={`${styles.button__star_6} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star1.png"
          alt="Star 7"
          className={`${styles.button__star_7} ${styles.image}`}
          width={24}
          height={24}
        />

        <div className={styles.button__shadow}></div>
      </a>
    </div>
  );
};

export default FooterButton;
