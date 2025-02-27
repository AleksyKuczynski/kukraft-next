// src/types/aboutUs.ts
export interface AboutUsValue {
    type: 'heading1' | 'heading2' | 'value';
    content: string;
  }
  
  export interface SkillsTool {
    title: string;
    items: string[];
  }
  
  export interface AboutUsSection {
    values: AboutUsValue[];
    skills: SkillsTool;
    tools: SkillsTool;
  }