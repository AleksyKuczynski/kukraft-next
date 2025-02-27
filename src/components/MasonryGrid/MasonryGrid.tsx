// src/components/MasonryGrid/MasonryGrid.tsx
import { FC, ReactNode } from 'react'
import { MasonryVariant } from '@/types/section'
import styles from './MasonryGrid.module.scss'

interface MasonryGridProps {
  variant: MasonryVariant;
  children: ReactNode;
}

export const MasonryGrid: FC<MasonryGridProps> = ({ variant, children }) => {
  const gridClass = variant === 'grid-four' ? styles.gridFour : styles.gridTwo;
  
  return (
    <section>
      <div className="container-fluid">
        <div className={styles.gridContainer}>
          <div className={`${styles.masonryGrid} ${gridClass}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}