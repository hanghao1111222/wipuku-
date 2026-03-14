import { getFirstProduct } from '@/config/products';
import ProductDetail from '@/components/ProductDetail';
import ProductFeatures from '@/components/ProductFeatures';

export default function Home() {
  const product = getFirstProduct();

  return (
    <>
      <ProductDetail product={product} />
      <ProductFeatures features={product.features} />
    </>
  );
}
