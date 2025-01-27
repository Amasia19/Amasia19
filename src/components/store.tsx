import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./store.scss";

type StockType = {
  id: number;
  name: string;
  price: string;
  stock: number;
  image: string;
};

function Store() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);
  const [products, setProducts] = useState<StockType[]>([
    {
      id: 1,
      name: "Laptop",
      price: "$1000",
      stock: 12,
      image: "./src/image/laptop.png",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "$700",
      stock: 0,
      image: "./src/image/phone.png",
    },
    {
      id: 3,
      name: "Earbuds",
      price: "$50",
      stock: 10,
      image: "./src/image/casque.png",
    },
    {
      id: 4,
      name: "Ecouteur",
      price: "$50",
      stock: 20,
      image: "./src/image/ecouteur.png",
    },
    {
      id: 5,
      name: "Subwoofer",
      price: "$50",
      stock: 5,
      image: "./src/image/sub.png",
    },
  ]);

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<StockType | null>(null);
  const [createMode, setCreateMode] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: "",
    price: "",
    stock: 0,
    image: "",
  });

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleBuyProduct = (product: StockType) => {
    setCurrentProduct(product);
    setConfirmationVisible(true);
  };

  const confirmPurchase = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === currentProduct?.id
          ? { ...product, stock: product.stock - 1 }
          : product
      )
    );
    setConfirmationVisible(false);
    alert("Achat confirmé !");
  };

  const cancelPurchase = () => {
    setConfirmationVisible(false);
  };

  const handleCreateProduct = () => {
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    const productToAdd = { ...newProduct, id: newId };
    setProducts([...products, productToAdd]);
    setCreateMode(false);
    setNewProduct({ id: 0, name: "", price: "", stock: 0, image: "" });
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleCommentaires = () => setCommentairesOpen(!commentairesOpen);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Link to="/dashboard">
          <img src="./src/image/Ellipse 2.svg" alt="Logo" className="logo" />
        </Link>
        <div className="profile">
          <img src="./src/image/store.png" alt="Profile" className="profile-pic" />
          <h3>Store</h3>
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

        <section >
          <h4>Store</h4>
          <div className="store-products">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.name} className="product-image" />
                <h5>{product.name}</h5>
                <p className="price">{product.price}</p>
                <p className="stock">In stock: {product.stock}</p>
                <button
                  className={`buy-button ${product.stock === 0 ? "out-of-stock" : ""}`}
                  disabled={product.stock === 0}
                  type="button"
                  onClick={() => handleBuyProduct(product)}
                >
                  {product.stock === 0 ? "Out of Stock" : "Buy Now"}
                </button>
                <button className="manage-content-button" onClick={() => handleDeleteProduct(product.id)}>
                  Manage Content
                </button>
              </div>
            ))}
          </div>

          <div className="create-product-section">
            {createMode ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCreateProduct();
                }}
                className="create-product-form"
              >
                <input
                  type="text"
                  placeholder="Nom du produit"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Prix"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Stock"
                  value={newProduct.stock}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, stock: +e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="URL de l'image"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                />
                <button className="create-btn" type="submit">Créer</button>
                <button className="skip-btn" type="button" onClick={() => setCreateMode(false)}>
                  Annuler
                </button>
              </form>
            ) : (
              <button onClick={() => setCreateMode(true)} className="create-button">
                Create
              </button>
            )}
          </div>

          {confirmationVisible && currentProduct && (
            <div className="confirmation">
              <p>Êtes-vous sûr de vouloir acheter {currentProduct.name} ?</p>
              <button onClick={confirmPurchase} className="oui-btn">Oui</button>
              <button onClick={cancelPurchase} className="non-btn">Non</button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Store;
