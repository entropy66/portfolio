import { motion } from 'framer-motion'
import { useI18n } from '../../i18n/context'
import styles from './Hero.module.css'

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: easeOutExpo,
    },
  }),
}

export function Hero() {
  const { t } = useI18n()

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.content}`}>
        <motion.p
          className={styles.greeting}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {t.hero.greeting}
        </motion.p>

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
      </div>
    </section>
  )
}
