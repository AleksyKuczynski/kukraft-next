// src/components/AboutUs/SkillsToolsBox.tsx
import { SkillsTool } from '@/types/aboutUs'
import styles from './SkillsToolsBox.module.scss'
import clsx from 'clsx'

interface SkillsToolsBoxProps {
  data: SkillsTool;
  variant: 'skills' | 'tools';
}

export const SkillsToolsBox = ({ data, variant }: SkillsToolsBoxProps) => {
  return (
    <div className={clsx(
      styles.container,
      variant === 'skills' ? styles.skillsRotation : styles.toolsRotation
    )}>
      <h2 className={styles.title}>{data.title}</h2>
      <ul className={styles.list}>
        {data.items.map((item, index) => (
          <li key={index} className={styles.item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};