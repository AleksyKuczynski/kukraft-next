// src/components/AboutUs/LanguageSection.tsx
import { AboutUsSection } from '@/types/aboutUs'
import { ValuesList } from './ValuesList'
import { SkillsToolsBox } from './SkillsToolsBox'
import styles from './LanguageSection.module.scss'

interface LanguageSectionProps {
  content: AboutUsSection;
  id: string;
}

export const LanguageSection = ({ content, id }: LanguageSectionProps) => {
  return (
    <div className="row justify-content-center" id={id}>
      <div className="col-12 col-xl-8 col-xxl-6">
        <ValuesList values={content.values} />
      </div>
      
      <div className={`col-12 col-xl-4 col-xxl-6 ${styles.sideSection}`}>
        <div className="col-12 col-md-6 col-xl-12 col-xxl-6">
          <SkillsToolsBox 
            data={content.skills}
            variant="skills"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-12 col-xxl-6">
          <SkillsToolsBox 
            data={content.tools}
            variant="tools"
          />
        </div>
      </div>
    </div>
  );
};