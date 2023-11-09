import Image from 'next/image';

import Container from '../Container';

function TopHero() {
  return (
    <section className="relative">
      <Image
        fill
        alt="hero-img"
        className="object-cover"
        src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Container as="div" height="min-full" />
    </section>
  );
}

export default TopHero;
