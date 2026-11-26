import ProductCard from "./ProductCard";

export default function RelatedProducts({ products, home }) {
    return (
        <section className="product-detail__related" aria-labelledby="related-title">
            <h2 id="related-title">추천 상품</h2>
            <div className="product-detail__related-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} home={home} />
                ))}
            </div>
        </section>
    );
}
