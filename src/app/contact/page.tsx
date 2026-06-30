import React from "react";
import styles from "@/styles/contact.module.css";

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M6.6 2.8h.02c.7-.1 1.4.3 1.7 1l1.1 2.7c.2.6.1 1.2-.3 1.6l-1 1c-.1.1-.2.3-.1.5 1 2.1 2.7 3.8 4.8 4.8.2.1.4 0 .5-.1l1-1c.5-.4 1.1-.5 1.6-.3l2.7 1.1c.7.3 1.1 1 1 1.7v.02c-.2 1.6-1.6 2.8-3.2 2.8C10 22.4 1.6 14 1.6 3.9c0-1.6 1.2-3 2.9-3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M12 2.25c-5.38 0-9.75 4.37-9.75 9.75S6.62 21.75 12 21.75 21.75 17.38 21.75 12 17.38 2.25 12 2.25Zm0 1.5c4.55 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25-8.25-3.7-8.25-8.25S7.45 3.75 12 3.75Zm-.75 3.5a.75.75 0 0 1 1.5 0v4.43l3.06 1.77a.75.75 0 1 1-.75 1.3l-3.44-1.98a.75.75 0 0 1-.37-.65V7.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M12 2.25c-4.28 0-7.75 3.42-7.75 7.64 0 5.49 7.06 11.5 7.36 11.75a.75.75 0 0 0 .98 0c.3-.25 7.36-6.26 7.36-11.75 0-4.22-3.47-7.64-7.75-7.64Zm0 10.4a2.86 2.86 0 1 1 0-5.72 2.86 2.86 0 0 1 0 5.72Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DirectionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        d="M21.71 11.29 12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l9 9a1 1 0 0 0 1.42 0l9-9a1 1 0 0 0 0-1.42ZM14 14.5V12h-4v3H8v-4a1 1 0 0 1 1-1h5V7.5l3.5 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <section className={styles.section} aria-label="Contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h1 className={styles.h1}>Get in touch</h1>
            <p className={styles.lead}>
              For business enquiries, fill out the form and our team will contact you shortly. You can
              also call our support desk during office hours.
            </p>

            <div className={styles.block}>
              <h2 className={styles.h2}>Request a Call Back</h2>
              <p className={styles.p}>
                Share your details and preferred topic. A senior advisor will reach out with the right
                guidance for your certification and compliance requirements.
              </p>

              <div className={styles.infoList} role="list">
                <div className={styles.infoRow} role="listitem">
                  <span className={styles.infoIcon} aria-hidden="true">
                    <PhoneIcon />
                  </span>
                  <div className={styles.infoText}>
                    <div className={styles.infoTitle}>Toll Free / Support</div>
                    <div className={styles.infoValue}>
                      <a className={styles.link} href="tel:+919266877738">
                        +91-9266877738
                      </a>{" "}
                      <span className={styles.sep} aria-hidden="true">
                        |
                      </span>{" "}
                      <a className={styles.link} href="tel:+918880013897">
                        +91-88000013897
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.infoRow} role="listitem">
                  <span className={styles.infoIcon} aria-hidden="true">
                    <ClockIcon />
                  </span>
                  <div className={styles.infoText}>
                    <div className={styles.infoTitle}>Office Hours</div>
                    <div className={styles.infoValue}>
                      09:30 AM – 06:00 PM (Mon – Sat)
                      <br />
                      Sunday - Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card} aria-label="Send message">
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Send Message</h2>
              <div className={styles.cardSubtitle}>I would like to discuss:</div>
            </div>

            <form className={styles.form} action="#" method="post">
              <div className={styles.row2}>
                <input className={styles.input} type="text" name="name" placeholder="Your Name *" required />
                <input className={styles.input} type="email" name="email" placeholder="Your Email *" required />
              </div>

              <div className={styles.row2}>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  placeholder="Phone Number *"
                  required
                />
                <input className={styles.input} type="text" name="city" placeholder="Your City *" required />
              </div>

              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Enter Your Message *"
                rows={5}
                required
              />

              <button className={styles.submit} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className={styles.mapSection} aria-label="Our Location">
          <div className={styles.mapHeader}>
            <div className={styles.mapHeading}>
              <span className={styles.mapEyebrow}>Visit Us</span>
              <h2 className={styles.mapTitle}>Find Our Office on the Map</h2>
              <p className={styles.mapSubtitle}>
                Drop by our corporate office or get instant directions on Google Maps with a single click.
              </p>
            </div>
            <a
              className={styles.directionBtn}
              href="https://www.google.com/maps/dir/?api=1&destination=Supertech+Astralis,+Sector+94,+Noida&destination_place_id=ChIJeb1fl87lDDkRaPrHnN-kDuE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DirectionIcon />
              <span>Get Directions</span>
            </a> 
          </div>

          <div className={styles.mapGrid}>
            <div className={styles.mapFrame}>
              <iframe
                className={styles.mapIframe}
                title="Ornate Quality - Office Location at Supertech Astralis, Sector 94, Noida"
                src="https://www.google.com/maps?q=Supertech+Astralis,+Sector+94,+Noida,+Uttar+Pradesh+201304&hl=en&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className={styles.mapOpenLink}
                href="https://www.google.com/maps/place/Supertech+Astralis/@28.5510933,77.3245904,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5ce975fb079:0xe10ea4df9cc7fa68!8m2!3d28.5510933!4d77.3245904!16s%2Fg%2F11gk7j2v35"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Supertech Astralis location in Google Maps"
              >
                <span className={styles.mapOverlay}>
                  <span className={styles.mapOverlayPill}>
                    <PinIcon />
                    <span>Open in Google Maps</span>
                  </span>
                </span>
              </a>
            </div>

            <div className={styles.addressCard}>
              <div className={styles.addressBadge}>
                <PinIcon />
              </div>
              <h3 className={styles.addressTitle}>Corporate Office</h3>
              <p className={styles.addressText}>
                Office No. 1726, Astralis Tower,
                <br />
                Sector 94, Noida,
                <br />
                Uttar Pradesh - 201304, India 
              </p>

              <div className={styles.addressDivider} aria-hidden="true" />

              <ul className={styles.addressList}>
                <li>
                  <span className={styles.addressLabel}>Phone</span>
                  <span className={styles.addressValue}>
                    <a className={styles.link} href="tel:+919266877738">
                      +91-9266877738
                    </a>
                    <br />
                    <a className={styles.link} href="tel:+918880013897">
                      +91-8800013897
                    </a>
                    
                  </span>
                </li>
                <li>
                  <span className={styles.addressLabel}>Email</span>
                  <span className={styles.addressValue}>
                    <a className={styles.link} href="mailto:chetan@ornatequality.com">
                      chetan@ornatequality.com
                    </a>
                    <br />
                    <a className={styles.link} href="mailto:marketing@ornatequality.com">
                      marketing@ornatequality.com
                    </a>
                  </span>
                </li>
                <li>
                  <span className={styles.addressLabel}>Hours</span>
                  <span className={styles.addressValue}>
                    Mon - Sat · 09:30 AM – 06:00 PM
                    <br />
                    Sunday - Closed
                  </span>
                </li>

              </ul>

              <a
                className={styles.viewMapBtn}
                href="https://www.google.com/maps/place/Supertech+Astralis/@28.5510933,77.3245904,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5ce975fb079:0xe10ea4df9cc7fa68!8m2!3d28.5510933!4d77.3245904!16s%2Fg%2F11gk7j2v35"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinIcon />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

