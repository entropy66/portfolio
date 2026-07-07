import { motion } from 'framer-motion'
import { useI18n } from '../../i18n/context'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Experience.module.css'

export function Experience() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollReveal<HTMLDivElement>()

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.sectionTag}>{t.experience.label}</div>
      <h2 className={styles.heading}>{t.experience.heading}</h2>
      <div className={styles.timeline} ref={ref}>
        {t.experienceData.map((exp: any, index: number) => (
          <motion.div
            key={exp.id}
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.period}>{exp.period}</div>
            <div className={styles.content}>
              <div className={styles.role}>{exp.role}</div>
              <div className={styles.company}>{exp.company}</div>
              <p className={styles.description}>{exp.description}</p>
              <ul className={styles.highlights}>
                {exp.highlights.map((h: string, i: number) => (
                  <li key={i} className={styles.highlight}>{h}</li>
                ))}
              </ul>
              <div className={styles.techList}>
                {exp.technologies.map((tech: string) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
