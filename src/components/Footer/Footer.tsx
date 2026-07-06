import { useI18n } from '../../i18n/context'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {t.personal.name}. {t.footer.rights}
        </p>
        <p className={styles.builtWith}>
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  )
}
