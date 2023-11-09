import React from 'react';

import Container from './Container';

function Footer() {
  return (
    <footer className="py-24">
      <Container as="div" className="flex-wrap gap-10" display="flex-row">
        <h3 className="text-2xl font-semibold">Eclat</h3>
        <div className="max-w-96 ml-auto flex flex-wrap gap-12">
          <ul className="">
            <li className="text font-semibold">Categories</li>
            <li className="mt-2 text-xs font-semibold">Clothing</li>
            <li className="text-xs">T-Shirts</li>
            <li className="text-xs">Hoodies</li>
          </ul>
          <ul>
            <li className="font-semibold">Collections</li>
            <li className="mt-2 text-xs">Weekly Picks</li>
            <li className="text-xs">Sale</li>
          </ul>
          <ul>
            <li className="font-semibold">Socials</li>
            <li className="mt-2 text-xs">Instagram</li>
            <li className="text-xs">Facebook</li>
          </ul>
          <ul>
            <li className="font-semibold">Merch</li>
            <li className="mt-2 text-xs">Tote Bags</li>
          </ul>
        </div>
      </Container>
      <div className="text-xs text-gray-300">&copy; Copyright {new Date().getFullYear()} Eclat</div>
    </footer>
  );
}

export default Footer;
