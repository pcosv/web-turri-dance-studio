import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";
import { FreesiaIcon, PointeShoeIcon, RibbonIcon } from "@/components/icons";
import styles from "./page.module.css";

const pillars = [
  {
    title: "Dance",
    Icon: PointeShoeIcon,
    short: "Joyful technique, taught with patience.",
    long: "Solid, joyful technique taught with patience, for every age and level.",
  },
  {
    title: "Connect",
    Icon: RibbonIcon,
    short: "A community that cheers each other on.",
    long: "A friendly community of children, parents and adults who cheer each other on.",
  },
  {
    title: "Bloom",
    Icon: FreesiaIcon,
    short: "Confidence that grows beyond the studio.",
    long: "Confidence, posture and self-expression that grow far beyond the studio.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        <BackgroundVideo
          src="/video/hero.mp4"
          poster="/images/hero-poster.jpg"
          className={styles.heroVideo}
        />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <p className={styles.heroScript}>More than dance,</p>
            <h1 className={styles.heroTitle}>
              a space to <em>bloom.</em>
            </h1>
            <p className={styles.heroLead}>
              Ballet for children and adults in a warm, light-filled London studio.
            </p>
            <p className={styles.heroAsk} id="who-is-dancing">
              WHO IS DANCING?
            </p>
            <div className={styles.heroChoices} role="group" aria-labelledby="who-is-dancing">
              <Link href="/kids-classes" className={`${styles.choice} ${styles.choiceKids}`}>
                <span className={styles.choiceTitle}>Kids →</span>
                <span className={styles.choiceMeta}>WALKING – 16</span>
              </Link>
              <Link href="/adult-classes" className={`${styles.choice} ${styles.choiceAdults}`}>
                <span className={styles.choiceTitle}>Adults →</span>
                <span className={styles.choiceMeta}>16 AND OVER</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Welcome ---------- */}
      <section className={`section ${styles.welcomeSection}`}>
        <div className={`container ${styles.welcome}`}>
          <div className={styles.welcomeIntro}>
            <FreesiaIcon size={44} className={styles.welcomeIcon} />
            <p className="script">welcome to Turri</p>
            <h2 className={`h2 ${styles.welcomeTitle}`}>A warm studio for every dancer</h2>
            <p className="lead">
              Turri Dance Studio is a light-filled space in Walthamstow where little ones,
              kids and adults learn to dance with patience and joy. [One line about the
              founder and why she opened the studio.]
            </p>
            <Link href="/about" className={`text-link ${styles.storyLink}`}>
              Our story →
            </Link>
          </div>
          <ul className={styles.pillars}>
            {pillars.map(({ title, Icon, short, long }) => (
              <li key={title} className={styles.pillar}>
                <span className="icon-bubble">
                  <Icon size={30} />
                </span>
                <div>
                  <p className={styles.pillarTitle}>{title}</p>
                  <p className={styles.pillarText}>
                    <span className={styles.short}>{short}</span>
                    <span className={styles.long}>{long}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
