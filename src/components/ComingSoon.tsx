import Link from "next/link";
import { FreesiaIcon } from "./icons";

/** Temporary body for pages that haven't been built yet. */
export default function ComingSoon() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="card"
          style={{ padding: "40px 24px", textAlign: "center", maxWidth: 640, margin: "0 auto" }}
        >
          <FreesiaIcon size={44} className="center-block" />
          <h2 className="h2" style={{ marginTop: 12, fontSize: 28 }}>
            This page is blooming soon
          </h2>
          <p className="lead" style={{ marginTop: 10 }}>
            We’re building this page next. In the meantime, have a look around the home page.
          </p>
          <Link href="/" className="btn btn-outline" style={{ marginTop: 24 }}>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
