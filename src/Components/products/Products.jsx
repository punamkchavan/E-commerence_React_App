import './Products.css';
import AvailableProducts from './AvailableProducts';


const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "p2",
    title: "Black and White Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 120,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

export default function Products() {
  return (
    <section className="products">
      <h2>Music Albums</h2>

      <div className="products-grid">
        {productsArr.map((product) => (
          <AvailableProducts key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
