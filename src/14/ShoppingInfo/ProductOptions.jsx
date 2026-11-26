import { useState } from "react";

const won = new Intl.NumberFormat("ko-KR");

export default function ProductOptions({ price }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <p className="product-detail__price">{won.format(price)}원</p>
            <label className="product-detail__quantity">
                수량
                <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
                    {[1, 2, 3, 4, 5].map((count) => <option key={count} value={count}>{count}개</option>)}
                </select>
            </label>
            <p className="product-detail__total" aria-live="polite">
                <span>합계</span>
                <strong>{won.format(price * quantity)}원</strong>
            </p>
        </>
    );
}
