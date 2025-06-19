import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedTitleDescriptionBlock extends Schema.Component {
  collectionName: 'components_shared_title_description_blocks';
  info: {
    displayName: 'MetaTitleDescriptionTitleLong';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    titleLong: Attribute.String & Attribute.Required;
  };
}

export interface SharedTitleDescriptionFaq extends Schema.Component {
  collectionName: 'components_shared_title_description_faqs';
  info: {
    displayName: 'TitleDescriptionFAQ';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText;
  };
}

export interface SharedTitleDescription extends Schema.Component {
  collectionName: 'components_shared_title_descriptions';
  info: {
    displayName: 'TitleDescription';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface SharedTitleGalleryDescription extends Schema.Component {
  collectionName: 'components_shared_title_gallery_descriptions';
  info: {
    displayName: 'TitleGalleryDescription';
  };
  attributes: {
    title: Attribute.String;
    gallery: Attribute.Media;
    description: Attribute.RichText;
  };
}

export interface SharedTitleImageDescription extends Schema.Component {
  collectionName: 'components_shared_title_image_descriptions';
  info: {
    displayName: 'TitleImageDescription';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
  };
}

export interface SharedTitleVideoDescription extends Schema.Component {
  collectionName: 'components_shared_title_video_descriptions';
  info: {
    displayName: 'TitleVideoDescription';
    description: '';
  };
  attributes: {
    videoTitle: Attribute.String;
    videoURL: Attribute.String;
    videoDescription: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.title-description-block': SharedTitleDescriptionBlock;
      'shared.title-description-faq': SharedTitleDescriptionFaq;
      'shared.title-description': SharedTitleDescription;
      'shared.title-gallery-description': SharedTitleGalleryDescription;
      'shared.title-image-description': SharedTitleImageDescription;
      'shared.title-video-description': SharedTitleVideoDescription;
    }
  }
}
