// src/components/AboutUs/ValuesList.tsx
import { AboutUsValue } from '@/types/aboutUs'
import styles from './ValuesList.module.scss'

interface ValuesListProps {
  values: AboutUsValue[];
}

export const ValuesList = ({ values }: ValuesListProps) => {
  return (
    <ul className={styles.aboutUsChat}>
      {values.map((item, index) => {
        switch (item.type) {
          case 'heading1':
            return (
              <h1 key={index} className={styles.mainHeading}>
                {item.content}
              </h1>
            );
          case 'heading2':
            return (
              <h2 key={index} className={styles.subHeading}>
                {item.content}
              </h2>
            );
          case 'value':
            return (
              <li key={index} className={styles.valueItem}>
                {item.content}
              </li>
            );
        }
      })}
    </ul>
  );
};