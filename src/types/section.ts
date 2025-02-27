// src/types/section.ts

export type ImageStyle = 'compact' | 'standard' | 'wide';
export type ImageBehavior = 'static' | 'modal' | 'carousel';
export type MasonryVariant = 'grid-four' | 'grid-two';

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface SectionData {
  title: string;
  description: string;
  images: ImageContent[];
}

export interface ImageContent {
  src: string;
  alt: string;
  style?: ImageStyle;
  behavior?: ImageBehavior;
  gallery?: string[];
}