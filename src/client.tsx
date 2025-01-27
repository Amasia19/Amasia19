import "./client.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";

type ClientType = {
  id: number;
  name: string;
  contact: string;
  image: string;
  place: string;
  amount: string;
};

function Client() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);
  const [amounts, setAmounts] = useState<{ [key: number]: boolean }>({});

  const client: ClientType[] = [
    {
      id: 1,
      name: "MILO.",
      contact: "216 034 155 500",
      image: "./src/image/person4.jpeg",
      place: "Paris",
      amount: "200000Ar",
    },
    {
      id: 2,
      name: "MAËL",
      contact: "020 002 828 442",
      image: "./src/image/person3.jpeg",
      place: "Suede",
      amount: "150000Ar",
    },
    {
      id: 3,
      name: "SACHA",
      contact: "+361 00 0051 25",
      image: "./src/image/person5.jpeg",
      place: "Canada",
      amount: "250000Ar",
    },
    {
      id: 4,
      name: "LÉO",
      contact: "+361 057 690 022",
      image: "./src/image/person6.jpeg",
      place: "France",
      amount: "180000Ar",
    },
    {
      id: 5,
      name: "RAPHAËL",
      contact: "361 034 155 156",
      image: "./src/image/person7.jpeg",
      place: "Russie",
      amount: "220000Ar",
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

  const handleAmountClick = (id: number) => {
    
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [id]: !prevAmounts[id], 
    }));
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Link to="/dashboard">
          <img src="./src/image/Ellipse 2.svg" alt="" className="logo" />
        </Link>
        <div className="profile">
          <img src="./src/image/client.png" alt="Profile" className="profile-pic" />
          <h3>Clients</h3>
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
          <h2>Clients</h2>
          <table className="product-table">
            <thead>
              <tr>
                <th>Clients</th>
                <th>Name</th>
                <th>Place</th>
                <th>Contact</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {client.map((client) => (
                <tr key={client.id}>
                  <td>
                    <img src={client.image} alt={client.name} className="product-image" />
                  </td>
                  <td>{client.name}</td>
                  <td>{client.place}</td>
                  <td>{client.contact}</td>
                  <td>
                    <button
                      className="amount-button"
                      onClick={() => handleAmountClick(client.id)}
                    >
                      {amounts[client.id] ? client.amount : "Amount"}
                    </button>
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

export default Client;
