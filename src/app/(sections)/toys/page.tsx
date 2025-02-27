// src/app/(sections)/toys/page.tsx
import Image from 'next/image'
import styles from './styles.module.scss'

export default function ToysPage() {
  return (
    <section className={styles.toysSection}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/img/interface/underconstruction.svg"
          alt="Under Construction"
          width={800}
          height={600}
          priority
          className={styles.constructionImage}
        />
      </div>
    </section>
  )
}