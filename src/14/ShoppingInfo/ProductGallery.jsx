export default function ProductGallery({ image, alt }) {
    return (
        <div className="product-detail__gallery">
            <img className="product-detail__thumbnail" src={image} alt="" />
            <figure>
                <img className="product-detail__photo" src={image} alt={alt} />
                <figcaption><a href={image} target="_blank" rel="noreferrer">원본 사진 보기 ↗</a></figcaption>
            </figure>
        </div>
    );
}
