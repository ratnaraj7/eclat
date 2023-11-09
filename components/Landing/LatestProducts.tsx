import Container from '../Container';
import ProductCard from '../custom-ui/ProductCard';

function LatestProducts() {
  const data = [
    { cardPicture: 'https://source.unsplash.com/1920x1080/?sneaker', title: 'lorem ipsium some of the some', price: 90 },
    { cardPicture: 'https://source.unsplash.com/1920x1080/?sneaker', title: 'lorem ipsium you go xyz', price: 70 },
    { cardPicture: 'https://source.unsplash.com/1920x1080/?sneaker', title: 'lorem ipsium some how many', price: 60 },
    { cardPicture: 'https://source.unsplash.com/1920x1080/?sneaker', title: 'lorem ipsium yes sir', price: 100 },
  ];

  return (
    <Container className="py-24">
      <div className="mx-auto max-w-xl text-center">
        <h6 className="mb-6 text-base text-gray-600">What&apos;s Hot Now </h6>
        <h2 className="text-ali text-3xl">Explore the trendiest products on the market.</h2>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {data.map((product) => (
          <ProductCard key={product.title} id={product.title} {...product} />
        ))}
      </div>
    </Container>
  );
}

export default LatestProducts;
