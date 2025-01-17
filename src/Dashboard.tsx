import React, { useState } from "react";
import "./Dashboard.scss";
import { Link, useLocation } from "react-router-dom";
import Stats from "./data";

function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);
  const location = useLocation();
  const statsData = [
    { title: "Top Vente", imageSrc: "./src/image/Frame 33.png" },
    { title: "Top Product", imageSrc: "./src/image/top-product.png" },
    { title: "Progrès", imageSrc: "./src/image/progress.png" },
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

  const isActive = (path: any) => location.pathname === path;

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <img src="./src/image/Ellipse 2.svg" alt="" className="logo" />
        <div className="profile">
          <img src="./src/image/Profil.png" alt="Profile" className="profile-pic" />
          <h3>Dashboard</h3>
        </div>
        <nav>
          <ul>
            <li className={isActive("/Dashboard") ? "active" : ""}>
              <img src="./src/image/graph.svg" alt="Graphique" />
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li className={isActive("/produit") ? "active" : ""}>
              <img src="./src/image/produit.svg" alt="Produit" />
              <Link to="/produit">Produit</Link>
            </li>
            <li className={isActive("/client") ? "active" : ""}>
              <img src="./src/image/clients.svg" alt="Clients" />
              <Link to="/client">Client</Link>
            </li>
            <li className={isActive("/store") ? "active" : ""}>
              <img src="./src/image/store.svg" alt="Store" />
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
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="./src/image/person2.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
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
                      <img src="./src/image/setting.svg" alt="Paramètres" />
                      Paramètres
                    </li>
                    <li className="out">
                      <img src="./src/image/About.svg" alt="À propos" />
                      À propos
                    </li>
                    <li className="out">
                      <img src="./src/image/langue.svg" alt="Langue" />
                      Langue
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
          <h2>Dashboard</h2>
          <Stats stats={statsData} />

        </section>

        <section className="sales-list">
          <h2>Liste de vente</h2>
          <div className="products">
            <div className="product">
              <img src="./src/image/laptop.png" alt="" />
              <div className="pgh-card">
                <p>12 Laptop</p>
                <p>12M Ar</p>
              </div>
              <div className="voir">
                <p className="lien">
                  <Link to="/produit">Voir</Link>
                </p>
                <img src="./src/image/Arrow .svg" alt="" />
              </div>
            </div>
            <div className="product">
              <img src="./src/image/phone.png" alt="" />
              <div className="pgh-card">
                <p>10 phones</p>
                <p>8M Ar</p>
              </div>
              <div className="voir">
                <p className="lien">
                  <Link to="/produit">Voir</Link>
                </p>
                <img src="./src/image/Arrow .svg" alt="" />
              </div>
            </div>
            <div className="product">
              <img src="./src/image/casque.png" alt="" />
              <div className="pgh-card">
                <p>15Casques</p>
                <p>5M Ar</p>
              </div>
              <div className="voir">
                <p className="lien">
                  <Link to="/produit">Voir</Link>
                </p>
                <img src="./src/image/Arrow .svg" alt="" />
              </div>
            </div>
            <div className="product">
              <img src="./src/image/ecouteur.png" alt="" />
              <div className="pgh-card">
                <p>20Écouteurs</p>
                <p>3M Ar</p>
              </div>
              <div className="voir">
                <p className="lien">
                  <Link to="/produit">Voir</Link>
                </p>
                <img src="./src/image/Arrow .svg" alt="" />
              </div>
            </div>
            <div className="product">
              <img src="./src/image/sub.png" alt="" />
              <div className="pgh-card">
                <p>8 Sub</p>
                <p>6M Ar</p>
              </div>
              <div className="voir">
                <p className="lien">
                  <Link to="/produit">Voir</Link>
                </p>
                <img src="./src/image/Arrow .svg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
