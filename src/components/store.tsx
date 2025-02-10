import React, { useState, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
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
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);
  const location = useLocation();
  const shortenTitle = (title: string) => title.split(" ").slice(0, 2).join(" ");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };
  const toggleCommentaires = () => {
    setCommentairesOpen(!commentairesOpen);
  };
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({
    id: Date.now(),
    title: "",
    description: "",
    price: 0,
    images: "",
    category: "",
    stock: 0,
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.images) {
      alert("Veuillez remplir tous les champs obligatoires !");
      return;
    }
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setShowCreateForm(false);
    setNewProduct({
      id: Date.now(),
      title: "",
      description: "",
      price: 0,
      images: "",
      category: "",
      stock: 0,
    });
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleBuyProduct = (product: Product) => {
    setCurrentProduct(product);
    setConfirmationVisible(true);
  };

  const confirmPurchase = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === currentProduct?.id ? { ...product, stock: product.stock - 1 } : product
      )
    );
    setConfirmationVisible(false);
    alert("Achat confirmé !");
  };

  const cancelPurchase = () => {
    setConfirmationVisible(false);

  };
  

  const isActive = (path: any) => location.pathname === path;

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Link to="/dashboard">
          <img src="./src/image/Ellipse 2.svg" alt="Logo" className="logo" />
        </Link>
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
                 <input type="Search" placeholder="Rechercher" className="search-bar" />
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
                           <p
  className="p-out"
  onClick={() => {
    if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
     
      window.location.href = "/login";
    }
  }}
>
  Se déconnecter
</p>

                         </li>
                       </ul>
                     </div>
                   )}
                 </div>
               </div>
             </header>

        <section>
          <div className="flex-btn">
            <h4>Store</h4>
            <button className="create-button" onClick={() => setShowCreateForm(true)}>
              Créer
            </button>
          </div>

          {showCreateForm && (
            <div className="create-product-form">
              <h5>Créer un Produit</h5>
              <input type="text" name="title" placeholder="Nom du produit" onChange={handleInputChange} />
              <input type="number" name="price" placeholder="Prix" onChange={handleInputChange} />
              <input type="text" name="images" placeholder="URL de l'image" onChange={handleInputChange} />
              <input type="number" name="stock" placeholder="Stock" onChange={handleInputChange} />
              <button onClick={handleAddProduct} className="add-product-btn">Ajouter</button>
              <button onClick={() => setShowCreateForm(false)} className="cancel-btn">Annuler</button>
            </div>
          )}

          <div className="store-products">
            {products.map((product) => (
              <div className="product-store" key={product.id}>
                <img src={product.images[0]} alt={product.title} className="product-image" />
                <h5>{shortenTitle(product.title)}</h5>
                <p className="price">${product.price}</p>
                <p className="stock">En stock: {product.stock}</p>
                <button
                  className={`buy-button ${product.stock === 0 ? "out-of-stock" : ""}`}
                  disabled={product.stock === 0}
                  onClick={() => handleBuyProduct(product)}
                >
                  {product.stock === 0 ? "Pas de stock" : "Acheter"}
                </button>
                <button className="manage-content-button" onClick={() => handleDeleteProduct(product.id)}>
                  Supprimer
                </button>
              </div>
            ))}
          </div>

          {confirmationVisible && currentProduct && (
            <div className="confirmation">
              <p>Êtes-vous sûr de vouloir acheter {currentProduct.title} ?</p>
              <div>
              <button onClick={confirmPurchase} className="oui-btn">Oui</button>
              <button onClick={cancelPurchase} className="non-btn">Non</button>
            </div>
            </div>
          )}

          {hasMore && !loading && (
            <button onClick={() => setOffset(offset + 8)} className="load-more">
              Charger plus
            </button>
          )}

          {loading && <p className="loading">Chargement...</p>}
        </section>
      </main>
    </div>
  );
}

export default Store;
