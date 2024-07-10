import React from 'react';
import {
  TypographyAmount,
  TypographyBody,
  TypographyButton,
  TypographyCaption,
  TypographyHeading,
  TypographyLink,
  TypographyOverline,
  TypographySubtitle,
  TypographyText,
} from '../types';

export interface LabelProps {
  children: React.ReactNode;
  className?: string;
  typographyClass?:
    | TypographyAmount
    | TypographyBody
    | TypographyButton
    | TypographyCaption
    | TypographyHeading
    | TypographyLink
    | TypographyOverline
    | TypographySubtitle
    | TypographyText;
}
