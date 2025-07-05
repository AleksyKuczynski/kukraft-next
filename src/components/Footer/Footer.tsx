// src/components/Footer/Footer.tsx
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="row justify-content-center">
          <div className="col-auto">
            <h6 className={styles.footerText}>
              Atelier Ku Kraft&nbsp;&#169;&nbsp;2016&ndash;{new Date().getFullYear()}
            </h6>
          </div>
          <div className={`col-1 ${styles.footerSeparator}`} />
          <div className="col-auto">
            <h6 className={styles.footerText}>atelier.kukraft@gmail.com</h6>
          </div>
        </div>
      </div>
    </footer>
  )
}