import "./Specials.css";
import pasta from '../Assets/pasta.jpg'
import veggies from '../Assets/veggies.jpg'
import bread from '../Assets/tomato-bread.jpg'


export const Specials = () => {
  return (
    <div className="container">
      <div className="specials">
        <h1>Specials</h1>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        <div  id="card1">
          <img src={pasta} alt="" />
          <div className="title">
            <h1>Pasta</h1>
            <p>$12.99</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio.
            Commodi doloremque, quo explicabo eaque ratione perferendis, fuga
            quam dicta reiciendis.
          </p>
          <div>
            <button>Order a delivery</button>
            {/*<img src="" alt="" />*/}
          </div>
        </div>
        <div id="card2">
          <img src={veggies} alt="" />
          <div className="title">
            <h1>Greek salad</h1>
            <p>$10.99</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio.
            Commodi doloremque, quo explicabo eaque ratione perferendis, fuga
            quam dicta reiciendis.
          </p>
          <div className="footer-card">
            <button>Order a delivery</button>
            {/*<img src="" alt="" />*/}
          </div>
        </div>
        <div id="card3">
          <img src={bread} alt="" />
          <div className="title">
            <h1>Tomato Bread</h1>
            <p>$13.99</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio.
            Commodi doloremque, quo explicabo eaque ratione perferendis, fuga
            quam dicta reiciendis.
          </p>
          <div className="footer-card">
            <button>Order a delivery</button>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
