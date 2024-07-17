import "./Specials.css";
import pasta from '../Assets/pasta.jpg'
import veggies from '../Assets/veggies.jpg'
import bread from '../Assets/tomato-bread.jpg'
import Swal from 'sweetalert2'


export const Specials = () => {

  const handleOrder = () => {
    console.log('pasta', "id is clicked")
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order is processing.",
          icon: "success"
        });
      }
    });
  }
  return (
    <div className="container">
      <div className="specials">
        <h1>Specials</h1>
        <button id="online-menu">Online Menu</button>
      </div>
      <div className="cards">
        <div  id="card1">
          <img src={pasta} alt="" />
          <div className="title">
            <h1>Pasta</h1>
            <p>$12.99</p>
          </div>
          <p id="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio.
            Commodi doloremque, quo explicabo eaque ratione perferendis, fuga
            quam dicta reiciendis.
          </p>
          <div>
            <button onClick={() => handleOrder("pasta")}>Order a delivery</button>
            {/*<img src="" alt="" />*/}
          </div>
        </div>
        <div id="card2">
          <img src={veggies} alt="" />
          <div className="title">
            <h1>Greek salad</h1>
            <p>$10.99</p>
          </div>
          <p id="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio.
            Commodi doloremque, quo explicabo eaque ratione perferendis, fuga
            quam dicta reiciendis.
          </p>
          <div className="footer-card">
            <button onClick={() => handleOrder('Greek Salad')}>Order a delivery</button>
            {/*<img src="" alt="" />*/}
          </div>
        </div>
        <div id="card3">
          <img src={bread} alt="" />
          <div className="title">
            <h1>Tomato Bread</h1>
            <p>$13.99</p>
          </div>
          <p id="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio.
            Commodi doloremque, quo explicabo eaque ratione perferendis, fuga
            quam dicta reiciendis.
          </p>
          <div className="footer-card">
            <button onClick={() => handleOrder('Tomato bread')}>Order a delivery</button>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

