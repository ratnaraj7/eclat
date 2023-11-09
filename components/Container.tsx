import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

const container = cva('w-full mx-auto max-w-[100rem] p-4', {
  variants: {
    height: {
      full: 'h-[calc(100vh-5rem)]',
      'min-full': 'min-h-[calc(100vh-5rem)]',
      auto: '',
    },
    display: {
      'flex-col': 'flex flex-col',
      'flex-row': 'flex flex-row',
      block: 'block',
    },
  },
  defaultVariants: { height: 'auto', display: 'flex-col' },
});

export interface ContainerProps extends HTMLAttributes<HTMLElement>, VariantProps<typeof container> {
  as?: React.ElementType;
}

function Container({ as: Comp = 'section', display, height, children, className, ...props }: ContainerProps) {
  return (
    <Comp {...props} className={cn(container({ display, height }), className)}>
      {children}
    </Comp>
  );
}

export default Container;
