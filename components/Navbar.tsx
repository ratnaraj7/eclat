import { ShoppingBag } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

import Container from './Container';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-[5rem] border-b bg-white">
      <Container as="div" className="w-full items-center justify-between" display="flex-row">
        <div className="flex h-8 w-8 flex-col justify-evenly">
          <div className="h-[0.2rem] bg-black" />
          <div className="h-[0.2rem] bg-black" />
        </div>
        <div>
          <h5 className={cn('text-2xl font-semibold')}>Eclat</h5>
        </div>
        <div>
          <ShoppingBag size="1.8rem" />
        </div>
      </Container>
    </nav>
  );
}
