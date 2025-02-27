// src/app/(sections)/(gallery)/layout.tsx
import styles from './layout.module.scss'

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className={styles.galleryContainer}>
        <div className="container-fluid">
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}