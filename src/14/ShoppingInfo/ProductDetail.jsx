import ProductGallery from "./ProductGallery";
import ProductOptions from "./ProductOptions";
import RelatedProducts from "./RelatedProducts";
import "./ProductDetail.css";

export default function ProductDetail({ product, related, home }) {
    const image = `${home}imgs/${product.image}`;

    return (
        <main className="product-detail">
            <a className="product-detail__home" href={home}>← 홈</a>
            <div className="product-detail__layout">
                <ProductGallery image={image} alt={product.alt} />
                <section className="product-detail__info" aria-labelledby="product-title">
                    <p className="product-detail__category">가을의 옷장</p>
                    <h1 id="product-title">{product.title}</h1>
                    <ProductOptions price={product.price} />
                </section>
            </div>
            <RelatedProducts products={related} home={home} />
            <section className="product-detail__description" aria-labelledby="description-title">
                <h2 id="description-title">상품 상세 설명</h2>
                <p>{product.description}</p>
                <img src={image} alt={product.alt} loading="lazy" />
            </section>
        </main>
    );
}
