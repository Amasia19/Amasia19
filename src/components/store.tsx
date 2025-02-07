import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../style/store.scss";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
  category: string;
  stock: number;
};

type ProductsResponse = {
  products: Product[];
};

function Store() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const shortenTitle = (title: string) => title.split(" ").slice(0, 2).join(" ");

  useEffect(() => {
    if (loading) return;
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=phone&limit=8&skip=${offset}`)
      .then((response) => response.json())
      .then((data: ProductsResponse) => {
        setProducts((prev) => [...prev, ...data.products].slice(0, 10)); 
        setHasMore(data.products.length === 10);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur:", error);
        setLoading(false);
      });
  }, [offset]);

  const handleDeleteProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleBuyProduct = (product: Product) => {
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

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);
  const toggleCommentaires = () => setCommentairesOpen(!commentairesOpen);
  
  const isActive = (path: any) => location.pathname === path;

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
                    <span role="img" aria-label="Wave"></span> J'adore ce site 👋
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
          <h4>Store</h4>
          <div className="store-products">
            {products.map((product) => (
              <div className="product-store" key={product.id}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="product-image"
                />
                <h5>{shortenTitle(product.title)}</h5>
                <p className="price">${product.price}</p>
                <p className="stock">In stock: {product.stock}</p>
                <button
                  className={`buy-button ${product.stock === 0 ? "out-of-stock" : ""}`}
                  disabled={product.stock === 0}
                  type="button"
                  onClick={() => handleBuyProduct(product)}
                >
                  {product.stock === 0 ? "Out of Stock" : "Buy Now"}
                </button>
                <button
                  className="manage-content-button"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Manage Content
                </button>
              </div>
            ))}
          </div>

          {confirmationVisible && currentProduct && (
            <div className="confirmation">
              <p className="confirm">Êtes-vous sûr de vouloir acheter {currentProduct.title} ?</p>
              <button onClick={confirmPurchase} className="oui-btn">Oui</button>
              <button onClick={cancelPurchase} className="non-btn">Non</button>
            </div>
          )}

          {hasMore && !loading && (
            <button onClick={() => setOffset(offset + 8)} className="load-more">
              Load More
            </button>
          )}

          {loading && <p>Loading...</p>}
        </section>
      </main>
    </div>
  );
}

export default Store;
