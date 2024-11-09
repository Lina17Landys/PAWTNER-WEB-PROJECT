import "./shopCard.css";

function ShopCards() {
  return (
    <>
      <div className="shop-cards-line">
        <div className="card-shop-s">
          <img className="card-img-shop" src="./src/img/Dog_Food.png" />
          <h1 className="title-card">Dog Food</h1>
        </div>

        <div className="card-shop-s">
          <img className="card-img-shop" src="./src/img/dog-toy.png" />
          <h1 className="title-card">Dog Toy</h1>
        </div>

        <div className="card-shop-s">
          <img className="card-img-shop" src="./src/img/cat-toy.png" />
          <h1 className="title-card">Cat Toy</h1>
        </div>

        <div className="card-shop-s">
          <img className="card-img-shop" src="./src/img/cat-food.png" />
          <h1 className="title-card">Cat Food</h1>
        </div>
      </div>
    </>
  );
}

export default ShopCards;
