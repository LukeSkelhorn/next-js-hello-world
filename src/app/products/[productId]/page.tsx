export default async function Product({ params }: { params: { productId: string } }) {
  const { productId } = await params;

  return (
    <>
      <h1>Product {productId}</h1>
      <p>This is a product page</p>
    </>
  );
}
