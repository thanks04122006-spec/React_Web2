import Card from "../../13/ex4/Card";

export default function ProductCard({ product, home }) {
    const { id, title, image, alt } = product;

    return (
        <a className="shopping-info__product-link" href={`${home}?product=${id}`}>
            <Card title={title} image={`${home}imgs/${image}`} alt={alt} />
        </a>
    );
}
