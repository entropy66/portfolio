import { motion } from 'framer-motion'
import { useI18n } from '../../i18n/context'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Projects.module.css'

export function Projects() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollReveal<HTMLDivElement>()

  return (
    <section className={styles.projects} id="projects">
      <div className="container" ref={ref}>
        <motion.p
          className={styles.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t.projects.label}
        </motion.p>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.projects.heading}
        </motion.h2>

        <div className={styles.grid}>
          {t.projectsData.map((project, i) => (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>

              <ul className={styles.cardHighlights}>
                {project.highlights.map((h) => (
                  <li key={h} className={styles.cardHighlight}>
                    {h}
                  </li>
                ))}
              </ul>

              <div className={styles.techList}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {t.projects.github} <span className={styles.arrow}>→</span>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {t.projects.preview} <span className={styles.arrow}>→</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
