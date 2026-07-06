import { motion } from 'framer-motion'
import type { Skill } from '../../types'
import { useI18n } from '../../i18n/context'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './Skills.module.css'

const CATEGORY_ORDER: Skill['category'][] = ['engineering', 'tech', 'general']

export function Skills() {
  const { t } = useI18n()
  const { ref, isInView } = useScrollReveal<HTMLDivElement>()

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    label: t.skills.categories[cat],
    items: t.skillsData.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <section className={styles.skills} id="skills">
      <div className="container" ref={ref}>
        <motion.p
          className={styles.sectionLabel}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t.skills.label}
        </motion.p>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.skills.heading}
        </motion.h2>

        <div className={styles.categories}>
          {grouped.map((group, gi) => (
            <motion.div
              key={group.category}
              className={styles.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + gi * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className={styles.categoryTitle}>{group.label}</h3>
              <div className={styles.skillList}>
                {group.items.map((skill) => (
                  <span key={skill.name} className={styles.skillTag}>
                    {skill.name}
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
