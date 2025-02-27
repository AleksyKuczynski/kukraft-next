// src/app/about-us/page.tsx
import { aboutUsContent } from '@/data/aboutUsContent'
import { LanguageSection } from '@/components/AboutUs/LanguageSection'
import styles from './page.module.scss'

export default function AboutUs() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className={styles.langSelector}>
            <a href="#polski">polski</a>
            <a href="#français">français</a>
          </div>
        </div>

        {Object.entries(aboutUsContent).map(([lang, content]) => (
          <LanguageSection 
            key={lang}
            id={lang === 'pl' ? 'polski' : lang === 'fr' ? 'français' : ''}
            content={content}
          />
        ))}
      </div>
    </section>
  );
}