import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import products from "./products.json";
import "./ShoppingInfo.css";

export default function ShoppingInfo() {
    const home = `${process.env.PUBLIC_URL}/`;
    const productId = new URLSearchParams(window.location.search).get("product");
    const product = products.find(({ id }) => id === productId);

    if (product) {
        const related = products.filter(({ id }) => id !== product.id);
        return <ProductDetail product={product} related={related} home={home} />;
    }

    return (
        <div className="shopping-info">
            <header className="shopping-info__header">
                <nav aria-label="주 메뉴">
                    <a href={home} aria-current="page">쇼핑 정보</a>
                </nav>
            </header>
            <section className="shopping-info__poster" aria-label="가을 의상 화보">
                <img
                    src={`${home}imgs/fashion-editorial.png`}
                    alt="버건디 코트, 아이보리 니트, 차콜 재킷을 입은 세 모델"
                />
                <div className="shopping-info__poster-copy">
                    <h2>가을의 옷장</h2>
                    <p>버건디 코트부터 포근한 니트까지,<br />쌀쌀한 날을 위한 세 가지 가을 스타일.</p>
                </div>
            </section>
            <main className="shopping-info__content">
                <nav className="shopping-info__location" aria-label="현재 위치">
                    <a href={home}>홈</a>
                    <span aria-hidden="true"> / </span>
                    <span aria-current="page">쇼핑 정보</span>
                </nav>
                <h1>쇼핑 정보</h1>
                <div className="shopping-info__grid">
                    {products.map((item) => (
                        <ProductCard key={item.id} product={item} home={home} />
                    ))}
                </div>
            </main>
        </div>
    );
}
