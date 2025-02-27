import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'
import { categories } from '@/data/navigation'
import categoryStyles from '@/styles/modules/categories.module.scss'


const footerIcons = [
  'guzik',
  'noz',
  'kat',
  'nozyczki',
  'szpula',
  'wachlarz'
] as const

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <Image 
          src="/img/kukraft.svg"
          alt="KuKraft"
          width={275}
          height={100}
          className={styles.kklogo}
          priority
        />
      </header>

      <main className={styles.main}>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {categories.map((category) => (
              <Link 
                key={category.id}
                href={category.path} 
                className={styles.categoryLink}
              >
                <div 
                  className={`${styles.button} ${categoryStyles.button} ${categoryStyles[category.id]}`}
                  style={{ 
                    backgroundImage: `url(/img/homepage/${category.image})` 
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerIcons}>
            {footerIcons.map((icon) => (
              <div 
                key={icon}
                className={styles.icon}
                style={{ 
                  backgroundImage: `url(/img/homepage/${icon}.svg)` 
                }}
              />
            ))}
          </div>
          <div className={styles.copyrightRow}>
            <span className={styles.copyrightText}>
              Atelier Ku Kraft © 2016–{currentYear}
            </span>
            <div className={styles.separator} />
            <span className={styles.copyrightText}>
              atelier.kukraft@gmail.com
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}