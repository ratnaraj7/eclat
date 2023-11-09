import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  cardPicture: string;
  title: string;
  price: number;
}

function ProductCard({ id, cardPicture, price, title }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div>
        <div className="relative h-[30rem] w-[25rem]">
          <Image fill alt="product-image" className="object-cover object-center" src={cardPicture} />
        </div>
        <div className="text-sm">
          <p className="mt-2 capitalize text-gray-900">{title}</p>
          <p className="mt-2 font-semibold">${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
