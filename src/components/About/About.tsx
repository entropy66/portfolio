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
            className={styles.avatarWrapper}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {personal.avatar ? (
              <img
                src={personal.avatar}
                alt={personal.name}
                className={styles.avatar}
              />
            ) : (
              <div className={styles.avatarPlaceholder}>
                {personal.name.charAt(0)}
              </div>
            )}
            <div className={styles.avatarDecor} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.sectionLabel}>{t.about.label}</p>
            <h2 className={styles.heading}>
              {t.about.heading}
            </h2>
            <p className={styles.bio}>{personal.bio}</p>

            <div className={styles.infoGrid}>
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
              {personal.blog && (
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Blog</span>
                  <span className={styles.infoValue}>
                    <a href={personal.blog} target="_blank" rel="noopener noreferrer">
                      {personal.blog.replace('https://', '')}
                    </a>
                  </span>
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
        </div>
      </div>
    </section>
  )
}
