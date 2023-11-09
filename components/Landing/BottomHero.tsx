import Image from 'next/image';

import Container from '../Container';

function BottomHero() {
  return (
    <section className="bg-yellow-100">
      <Container as="div" className=" py-20" height="full">
        <div className="relative ml-auto h-full w-[30rem]">
          <Image
            fill
            alt="hero-img"
            className="object-cover"
            src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </Container>
    </section>
  );
}

export default BottomHero;
