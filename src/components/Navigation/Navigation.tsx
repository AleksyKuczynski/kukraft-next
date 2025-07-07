// src/components/Navigation/Navigation.tsx
'use client'

import Script from 'next/script'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Navigation.module.scss'
import categoryStyles from '@/styles/modules/categories.module.scss'
import { categories } from '@/data/navigation'
import { closeNavMenu } from '@/utils/navigation'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <>
      <header>
        <div className="container">
          <nav className={`${styles.navbar} navbar navbar-expand-xl fixed-top`}>
            <Link className={`${styles.navBrand} navbar-brand`} href="/">
              <Image 
                src="/img/kk.svg" 
                alt="KuKraft Logo" 
                width={34} 
                height={34}
                priority
              />
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
              <Image 
                src="/img/interface/toggle.svg" 
                alt="Menu Toggle" 
                width={34} 
                height={34}
              />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
                        onClick={closeNavMenu}
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

      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
    </>
  )
}