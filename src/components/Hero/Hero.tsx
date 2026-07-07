import { motion } from 'framer-motion'
import { useI18n } from '../../i18n/context'
import styles from './Hero.module.css'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: easeOutExpo,
    },
  }),
}

export function Hero() {
  const { t } = useI18n()

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.label}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className={styles.labelLine} />
          <span className={styles.labelText}>{t.hero.greeting}</span>
        </motion.div>

        <motion.h1
          className={styles.name}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {t.personal.name}
        </motion.h1>

        <motion.h2
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {t.personal.title}
        </motion.h2>

        <motion.p
          className={styles.tagline}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          {t.personal.tagline}
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <a href="#projects" className={`${styles.cta} ${styles.ctaPrimary}`}>
            {t.hero.ctaProjects}
          </a>
          <a href="#contact" className={`${styles.cta} ${styles.ctaSecondary}`}>
            {t.hero.ctaContact}
          </a>
        </motion.div>

        <motion.div
          className={styles.heroMetrics}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <div className={styles.metric}>
            <span className={styles.metricNumber}>500+</span>
            <span className={styles.metricLabel}>users</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricNumber}>200亿</span>
            <span className={styles.metricLabel}>tokens</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricNumber}>盈利</span>
            <span className={styles.metricLabel}>主动离场</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.gridDecor} aria-hidden="true">
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
        <div className={styles.gridLine} />
      </div>
    </section>
  )
}
