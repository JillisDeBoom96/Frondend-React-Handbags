// Product.js

function Product({ span, image, title, price }) {
    return (
        <article className="product">
            <span className={"product-span"}>{span}</span>
            <img src={image} alt={title}/>
            <h4 className="product-price">
                {price}
            </h4>
            <p className="product-title">
                {title}
            </p>
        </article>
    );
}

export default Product