import "./produit.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Produit() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);
  const [language, setLanguage] = useState("fr"); // Language state

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$1000",
      type: "Electronics",
      stock: 12,
      image: "./src/image/laptop.png",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "$700",
      type: "Electronics",
      stock: 0,
      image: "./src/image/phone.png",
    },
    {
      id: 3,
      name: "Earbuds",
      price: "$50",
      type: "Accessories",
      stock: 10,
      image: "./src/image/casque.png",
    },
    {
      id: 4,
      name: "Ecouteur",
      price: "$50",
      type: "Accessories",
      stock: 20,
      image: "./src/image/ecouteur.png",
    },
    {
      id: 5,
      name: "Subwoofer",
      price: "$50",
      type: "Accessories",
      stock: 5,
      image: "./src/image/sub.png",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const toggleCommentaires = () => {
    setCommentairesOpen(!commentairesOpen);
  };

  const handleLanguageChange = (event:any) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Link to="/dashboard">
          <img src="./src/image/Ellipse 2.svg" alt="" className="logo" />
        </Link>
        <div className="profile">
          <img src="./src/image/produit.jpeg" alt="Profile" className="profile-pic" />
          <h3>Produits</h3>
        </div>
        <nav>
          <ul>
            <li>
              <img src="./src/image/graph.svg" alt="" />
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <img src="./src/image/produit.svg" alt="" />
              <Link to="/produit">Produit</Link>
            </li>
            <li>
              <img src="./src/image/clients.svg" alt="" />
              <Link to="/client">Client</Link>
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
            <input type="text" placeholder="Rechercher" className="search-bar" />
            <button className="place-icon">
              <img src="./src/image/search.svg" alt="Rechercher" className="icon-search" />
            </button>
          </div>

          <div className="profil-bar">
            <div onClick={toggleNotifications} style={{ position: "relative" }}>
              <img src="./src/image/notification.svg" alt="Notification" />
              {notificationsOpen && (
                <div className="notifications-popup">
                  <div className="notification">
                    <span role="img" aria-label="Wave">👋</span> Bienvenue sur le tableau de bord, pouvez-vous enregistrer votre mot de passe ?
                  </div>
                  <div className="notification">
                    <span role="img" aria-label="Warning">⚠️</span> Quelqu'un a tenté de se connecter à votre compte avec votre email et mot de passe.
                  </div>
                  <div className="notification">
                    <span role="img" aria-label="Key">🔑</span> Vérifiez votre mot de passe.
                  </div>
                </div>
              )}
            </div>
            <div onClick={toggleCommentaires} style={{ position: "relative" }}>
              <img src="./src/image/commentaire.svg" alt="Commentaires" />
              {commentairesOpen && (
                <div className="commentaires-popup">
                 
                </div>
              )}
            </div>

            <img src="./src/image/Profil.png" alt="Profile" className="profil-img" />

            <div className="menu-container">
              <img
                src="./src/image/menu.svg"
                alt="Menu"
                className="menu-icon"
                onClick={toggleMenu}
              />
              {menuOpen && (
                <div className="menu-dropdown">
                  <ul>
                    <li className="out">
                      <img src="./src/image/setting.svg" alt="Paramètres" />
                      Paramètres
                    </li>
                    <li className="out">
                      <img src="./src/image/About.svg" alt="À propos" />
                      À propos
                    </li>

                    <li className="out">
                      <img src="./src/image/langue.svg" alt="Langue" />
                      <select onChange={handleLanguageChange} value={language} className="language-select">
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="mg">Malagasy</option>
                      </select>
                    </li>

                    <li className="out">
                      <img src="./src/image/out.svg" alt="Déconnexion" className="icon-log" />
                      <p className="p-out" onClick={() => alert("Êtes-vous sûr de vouloir vous déconnecter ?")}>
                        <Link to="/login">Se déconnecter</Link>
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <section>
          <h2>Produits</h2>
          <div className="flex-btn">
            <div></div>
            <button className="create-button">Create</button>
          </div>
          <table className="product-table">
            <thead>
              <tr>
                <th>Produit</th>
                <th>Name</th>
                <th>Prix</th>
                <th>Type</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} className="product-image" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.type}</td>
                  <td>
                    {product.stock > 0 ? (
                      product.stock
                    ) : (
                      <span className="no-stock">No Stock</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Produit;
