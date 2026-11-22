import Link from "next/link";
import { SparkleIcon } from "./icons";
import styles from "./PageHero.module.css";

type Props = {
  script: string;
  title: string;
  lead?: string;
  crumb: string;
};

/** Soft-gradient page header used at the top of every inner page. */
export default function PageHero({ script, title, lead, crumb }: Props) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <SparkleIcon size={20} className={styles.sparkle} />
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <Link href="/">Home</Link> / <span aria-current="page">{crumb}</span>
        </nav>
        <p className="script">{script}</p>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={`lead ${styles.lead}`}>{lead}</p>}
      </div>
    </section>
  );
}
