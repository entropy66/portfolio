import { motion } from 'framer-motion'
import { useI18n } from '../../i18n/context'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Projects.module.css'

export function Projects() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollReveal<HTMLDivElement>()

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.inner} ref={ref}>
        <div className={styles.sectionTag}>{t.projects.label}</div>
        <h2 className={styles.heading}>{t.projects.heading}</h2>
        <div className={styles.grid}>
          {t.projectsData.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.cardTitle}>{project.title}</div>
              <p className={styles.cardDesc}>{project.description}</p>
              <ul className={styles.cardHighlights}>
                {project.highlights.map((h: string, i: number) => (
                  <li key={i} className={styles.cardHighlight}>{h}</li>
                ))}
              </ul>
              <div className={styles.techList}>
                {project.technologies.map((tech: string) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
