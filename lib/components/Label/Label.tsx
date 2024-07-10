import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { LabelProps } from './type';

export const Label = ({
  children,
  className,
  typographyClass = 'body-5',
}: LabelProps) => {
  return (
    <label
      className={twMerge(
        clsx(`${typographyClass} block text-primary-woodsMoke`, className)
      )}
    >
      {children}
    </label>
  );
};
