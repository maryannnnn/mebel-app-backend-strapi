import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedTitleDescriptionBlock extends Schema.Component {
  collectionName: 'components_shared_title_description_blocks';
  info: {
    displayName: 'Meta-Title-Description-TitleLong';
    description: '';
  };
  attributes: {
    TitleMeta: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    DescriptionMeta: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    TitleLong: Attribute.String & Attribute.Required;
  };
}

export interface SharedTitleDescription extends Schema.Component {
  collectionName: 'components_shared_title_descriptions';
  info: {
    displayName: 'Title-Description';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText;
  };
}

export interface SharedTitleImageDescription extends Schema.Component {
  collectionName: 'components_shared_title_image_descriptions';
  info: {
    displayName: 'Title-Image-Description';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.RichText;
    Image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.title-description-block': SharedTitleDescriptionBlock;
      'shared.title-description': SharedTitleDescription;
      'shared.title-image-description': SharedTitleImageDescription;
    }
  }
}
