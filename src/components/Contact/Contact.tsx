import { motion } from 'framer-motion'
import { useI18n } from '../../i18n/context'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Contact.module.css'

export function Contact() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollReveal<HTMLDivElement>()
  const { personal } = t

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.inner} ref={ref}>
          <motion.p
            className={styles.sectionLabel}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {t.contact.label}
          </motion.p>

          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.contact.heading}
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.contact.description}
          </motion.p>

          <motion.a
            href={`mailto:${personal.email}`}
            className={styles.emailLink}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {personal.email}
          </motion.a>

          <motion.div
            className={styles.socialRow}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {personal.social.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {s.platform}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
