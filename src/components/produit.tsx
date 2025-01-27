import "../style/produit.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Produit() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);
  const [language, setLanguage] = useState("fr");

  const translations = {
    fr: {
      produits: "Produits",
      dashboard: "Tableau de bord",
      rechercher: "Rechercher",
      parametres: "Paramètres",
      apropos: "À propos",
      laptop:"Ordinateur",
      langue: "Langue",
      deconnexion: "Se déconnecter",
      create: "Créer",
      produit: "Produit",
      client:"Client",
      nom: "Nom",
      prix: "Prix",
      type: "Type",
      stock: "Stock",
      noStock: "Pas de stock",
      store:"Magasin",
    },
    en: {
      produits: "Products",
      dashboard: "Dashboard",
      rechercher: "Search",
      parametres: "Settings",
      apropos: "About",
      langue: "Language",
      deconnexion: "Logout",
      create: "Create",
      produit: "Product",
      client:"Customer",
      nom: "Name",
      prix: "Price",
      type: "Type",
      stock: "Stock",
      noStock: "Out of Stock",
      laptop:"Laptop",
      store:"Store",
    },
    mg: {
      produits: "Vokatra",
      dashboard: "Tabilao",
      rechercher: "Tadiavo",
      parametres: "Fanamboarana",
      apropos: "Momba",
      laptop:"Ordinateur",
      langue: "Fiteny",
      deconnexion: "Miala",
      create: "Mamokatra",
      produit: "Vokatra",
      client:"Mpanjifa",
      nom: "Anarana",
      prix: "Vidiny",
      type: "Karazana",
      stock: "Tahiry",
      noStock: "Lany Tahiry",
      store:"Fivarotana",
    },
  };

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

  const t = translations[language];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Link to="/dashboard">
          <img src="./src/image/Ellipse 2.svg" alt="" className="logo" />
        </Link>
        <div className="profile">
          <img src="./src/image/produit.jpeg" alt="Profile" className="profile-pic" />
          <h3>{t.produits}</h3>
        </div>
        <nav>
          <ul>
            <li>
              <img src="./src/image/graph.svg" alt="" />
              <Link to="/Dashboard">{t.dashboard}</Link>
            </li>
            <li>
              <img src="./src/image/produit.svg" alt="" />
              <Link to="/produit">{t.produits}</Link>
            </li>
             <li>
                          <img src="./src/image/clients.svg" alt="" />
                          <Link to="/client">{t.client}</Link>
                        </li>
                        <li>
                          <img src="./src/image/store.svg" alt="" />
                          <Link to="/store">{t.store}</Link>
                        </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="search">
            <input type="text" placeholder={t.rechercher} className="search-bar" />
            <button className="place-icon">
              <img src="./src/image/search.svg" alt={t.rechercher} className="icon-search" />
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
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="./src/image/person.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span role="img" aria-label="Wave"></span> J'adore cette site 👋
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="./src/image/person1.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span>"L'interface est tellement fluide et bien pensée !"
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="./src/image/person2.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> "Ce tableau de bord m'aide à avoir une vision complète et rapide de mes objectifs. 
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="./src/image/person3.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="./src/image/person4.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="./src/image/person5.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="./src/image/person6.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="./src/image/person7.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
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
                      <img src="./src/image/setting.svg" alt={t.parametres} />
                      {t.parametres}
                    </li>
                    <li className="out">
                      <img src="./src/image/About.svg" alt={t.apropos} />
                      {t.apropos}
                    </li>
                    <li className="out">
                      <img src="./src/image/langue.svg" alt={t.langue} />
                      <select onChange={handleLanguageChange} value={language} className="language-select">
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="mg">Malagasy</option>
                      </select>
                    </li>
                    <li className="out">
                      <img src="./src/image/out.svg" alt={t.deconnexion} className="icon-log" />
                      <p className="p-out">
                        <Link to="/login">{t.deconnexion}</Link>
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <section>
          <h2>{t.produits}</h2>
          <div className="flex-btn">
            <div></div>
            <button className="create-button">{t.create}</button>
          </div>
          <table className="product-table">
            <thead>
              <tr>
                <th>{t.produit}</th>
                <th>{t.nom}</th>
                <th>{t.prix}</th>
                <th>{t.type}</th>
                <th>{t.stock}</th>
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
                    {product.stock > 0 ? product.stock : <span className="no-stock">{t.noStock}</span>}
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
