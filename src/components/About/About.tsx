import { motion } from 'framer-motion'
import { useI18n } from '../../i18n/context'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './About.module.css'

export function About() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollReveal<HTMLDivElement>()
  const { personal } = t

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.grid} ref={ref}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.avatarWrapper}>
              {personal.avatar ? (
                <img src={personal.avatar} alt={personal.name} className={styles.avatar} />
              ) : (
                <div className={styles.avatarPlaceholder}>
                  {personal.name.charAt(0)}
                </div>
              )}
            </div>

            <div className={styles.quickInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>{t.about.location}</span>
                <span className={styles.infoValue}>{personal.location}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>{t.about.email}</span>
                <span className={styles.infoValue}>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </span>
              </div>
              {personal.phone && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>{t.about.phone}</span>
                  <span className={styles.infoValue}>{personal.phone}</span>
                </div>
              )}
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>{t.about.social}</span>
                <span className={styles.infoValue}>
                  {personal.social.map((s, i) => (
                    <span key={s.platform}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        {s.platform}
                      </a>
                      {i < personal.social.length - 1 && ' / '}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.sectionLabel}>{t.about.label}</p>
            <h2 className={styles.heading}>{t.about.heading}</h2>
            <p className={styles.bio}>{personal.bio}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
