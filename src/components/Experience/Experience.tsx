import { motion } from 'framer-motion'
import { useI18n } from '../../i18n/context'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Experience.module.css'

export function Experience() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollReveal<HTMLDivElement>()

  return (
    <section className={styles.experience} id="experience">
      <div className="container" ref={ref}>
        <motion.p
          className={styles.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t.experience.label}
        </motion.p>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.experience.heading}
        </motion.h2>

        <div className={styles.timeline}>
          {t.experienceData.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={styles.item}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.dot} />
              <h3 className={styles.role}>{exp.role}</h3>
              <div className={styles.meta}>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.description}>{exp.description}</p>
              <ul className={styles.highlights}>
                {exp.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    {h}
                  </li>
                ))}
              </ul>
              <div className={styles.techList}>
                {exp.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
