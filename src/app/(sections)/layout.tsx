// src/app/(sections)/layout.tsx
"use client"

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './layout.module.scss'
import categoryStyles from '@/styles/modules/categories.module.scss'
import { categories } from '@/data/navigation'

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
      <header>
        <div className="container">
          <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}>
            <Link className={`${styles.navBrand} navbar-brand`} href="/">
              <img src="/img/kk.svg" width="34" alt="" />
            </Link>
            <button 
              className={`${styles.navToggler} navbar-toggler`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <img src="/img/interface/toggle.svg" width="34" alt="" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {categories.map((category) => {
        const isActive = pathname === category.path;
        return (
          <li key={category.id} className={`${styles.navItem} nav-item`}>
            <Link 
              className={`${styles.navLink} ${
                isActive ? `${styles.navLinkActive} ${categoryStyles['active-nav']} ${categoryStyles[category.id]}` : ''
              } nav-link`}
              href={category.path}
              aria-current={isActive ? 'page' : undefined}
            >
              {category.title.toLowerCase()}
            </Link>
          </li>
        );
      })}
    </ul>
            </div>
          </nav>
        </div>
      </header>

      <main className={styles.mainSection}>
        {children}
      </main>

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

      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
    </>
  )
}