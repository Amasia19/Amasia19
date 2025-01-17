
import "./produit.scss";
import { Link } from "react-router-dom";


function Produit() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <img src="./src/image/Ellipse 2.svg" alt="" className="logo"/>
        <div className="profile">
          <img src="./src/image/produit.webp" alt="Profile" className="profile-pic" />
          <h3>Dashboard</h3>
        </div>
        <nav>
          <ul>
          <li> <img src="./src/image/graph.svg" alt="" /><Link to="/Dashboard">Dashboard</Link></li>
          <li>
               <img src="./src/image/produit.svg" alt="" /><Link to="/produit">Produit</Link>
               </li>
            <li>
              <img src="./src/image/clients.svg" alt="" /><Link to="/client">Client</Link>
              </li>
            <li>
              <img src="./src/image/store.svg" alt="" />
              <Link to="/store">Store</Link>
              </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
           <div className="search">
          <input type="text" placeholder="search" className="search-bar"  />
          <button className="place-icon">
          <img src="./src/image/search.svg" alt="search" className="icon-search"/>
          </button>
          </div>
          <div className="profil-bar">
          <img src="./src/image/notification.svg" alt="" />
          <img src="./src/image/commentaire.svg" alt="" />
          <img src="./src/image/Profil.png" alt="Profile" className="profil-img" />
          <img src="./src/image/menu.svg" alt="" />
          </div>
        </header>

        <section>
          <h2>Product</h2>
          <div className="product-list">
            <div className="image">
              <img src="./src/image/laptop.png" alt="" />
                </div>
                <div className="name">
              <div className="about-p1">
                <p>name</p>
              
              </div>
              
            </div>
            <div className="name">
              <div className="about-p">
                <div className="card"></div>
              </div>
              
            </div>
            <div className="name">
              <div className="about-p">
                <div className="card"></div>
              </div>
              
            </div>
            <div className="name">
              <div className="about-p">
                <div className="card"></div>
              </div>
              
            </div>
            <div className="name">
              <div className="about-p">
                <div className="card"></div>
              </div>
              
            </div>
          </div>
          <div className="product-list">
            <div className="image">
              <img src="./src/image/phone.png" alt="" />
                </div>
                <div className="name">
              <div className="about-p1">
                <div className="card1"></div>
              </div>
              
            </div>
            <div className="name">
              <div className="about-p">
                <div className="card"></div>
              </div>
              
            </div>
            <div className="name">
              <div className="about-p">
                <div className="card"></div>
              </div>
              
            </div>
            <div className="name">
              <div className="about-p">
                <div className="card"></div>
              </div>
              
            </div>
            <div className="name">
              <div className="about-p">
                <div className="card"></div>
              </div>
              
            </div>
          </div>
          
        </section>

        
      </main>
    </div>
  );
}

export default Produit;
