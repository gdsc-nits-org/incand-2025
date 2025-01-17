import Image from "next/image";
import styles from "~/styles/EnticingButton.module.css";

const EnticingButton = () => {
  return (
    <div className={`${styles.container} scale-110 cursor-pointer`}>
      <div className={styles.button}>
        <div className={styles.button__content}>
          <Image
            src="/assets/HiddenQuest&Button/enticingbutton.gif"
            alt="Enticing Button"
            className="z-1 absolute h-full w-full object-cover"
            fill
          />
          <span className={`${styles.button__text} z-2 font-tusker`}>
            CLICK ME
          </span>

          <div className={styles.button__reflection_1}></div>
        </div>

        <Image
          src="/assets/HiddenQuest&Button/star2.png"
          alt="Star 1"
          className={`${styles.button__star_1} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star2.png"
          alt="Star 2"
          className={`${styles.button__star_2} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star2.png"
          alt="Star 3"
          className={`${styles.button__star_3} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star2.png"
          alt="Star 4"
          className={`${styles.button__star_4} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star2.png"
          alt="Star 5"
          className={`${styles.button__star_5} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star2.png"
          alt="Star 6"
          className={`${styles.button__star_6} ${styles.image}`}
          width={24}
          height={24}
        />
        <Image
          src="/assets/HiddenQuest&Button/star2.png"
          alt="Star 7"
          className={`${styles.button__star_7} ${styles.image}`}
          width={24}
          height={24}
        />

        <div className={styles.button__shadow}></div>
      </div>
    </div>
  );
};

export default EnticingButton;
