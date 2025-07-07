// src/app/(sections)/layout.tsx
import { Navigation } from '@/components/Navigation/Navigation'
import { Footer } from '@/components/Footer/Footer'
import styles from './layout.module.scss'

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      
      <main className={styles.mainSection}>
        {children}
      </main>

      <Footer />
    </>
  )
}