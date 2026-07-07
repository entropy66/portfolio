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
    items: t.skillsData.filter((s: any) => s.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <div className={styles.skills} id="skills">
      <div className={styles.inner} ref={ref}>
        <div className={styles.sectionTag}>{t.skills.label}</div>
        <h2 className={styles.heading}>{t.skills.heading}</h2>
        <div className={styles.categories}>
          {grouped.map((group, gi) => (
            <motion.div
              key={group.category}
              className={styles.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.categoryTitle}>{group.label}</div>
              <div className={styles.skillList}>
                {group.items.map((skill: any) => (
                  <div key={skill.name} className={styles.skillTag}>{skill.name}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
