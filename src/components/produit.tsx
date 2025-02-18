import "../style/produit.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect} from "react";
import axios from 'axios';

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

function Produit() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    category: "",
    stock: 0,
  });
 
  type TypeTranslations = {
    [key: string]: {
      produits: string;
      dashboard: string;
      rechercher: string;
      parametres: string;
      apropos: string;
      laptop?: string;
      langue: string;
      deconnexion: string;
      create: string;
      produit: string;
      client: string;
      nom: string;
      prix: string;
      type: string;
      stock: string;
      noStock: string;
      store: string;
    };
  };
  
  const translations:TypeTranslations = {
    fr: {
      produits: "Produits",
      dashboard: "Tableau de bord",
      rechercher: "Rechercher",
      parametres: "Paramètres",
      apropos: "À propos",
      laptop: "Ordinateur",
      langue: "Langue",
      deconnexion: "Se déconnecter",
      create: "Créer",
      produit: "Produit",
      client: "Client",
      nom: "Nom",
      prix: "Prix",
      type: "Type",
      stock: "Stock",
      noStock: "Pas de stock",
      store: "Magasin",
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
      client: "Customer",
      nom: "Name",
      prix: "Price",
      type: "Type",
      stock: "Stock",
      noStock: "Out of Stock",
      store: "Store",
    },
    mg: {
      produits: "Vokatra",
      dashboard: "Tabilao",
      rechercher: "Tadiavo",
      parametres: "Fanamboarana",
      apropos: "Momba",
      laptop: "Ordinateur",
      langue: "Fiteny",
      deconnexion: "Miala",
      create: "Mamokatra",
      produit: "Vokatra",
      client: "Mpanjifa",
      nom: "Anarana",
      prix: "Vidiny",
      type: "Karazana",
      stock: "Tahiry",
      noStock: "Lany Tahiry",
      store: "Fivarotana",
    },
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get<ProductsResponse>('https://dummyjson.com/products/search?q=phone&limit=10&skip'); // 
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const toggleCommentaires = () => {
    setCommentairesOpen(!commentairesOpen);
  };

  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const createProduct = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/products/add", {
        ...newProduct,
        images: ["https://via.placeholder.com/150"],
      });

      setProducts([...products, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erreur lors de la création du produit :", error);
    }
  };
 
  const t = translations[language as keyof TypeTranslations];
  const isActive = (path: any) => location.pathname === path;

  
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <Link to="/dashboard">
          <img src="/logos.svg" alt="" className="logo" />
        </Link>
        <div className="profile">
          <img src="/produit.jpeg" alt="Profile" className="profile-pic" />
          <h3>{t.produits}</h3>
        </div>
        <nav>
          <ul>
            <li>
              <img src="/graph.svg" alt="" />
              <Link to="/Dashboard">{t.dashboard}</Link>
            </li>
            
            <li className={isActive("/produit") ? "active" : ""}>
              <img src="/produit.svg" alt="" />
              <Link to="/produit">{t.produits}</Link>
            </li>
            <li>
              <img src="/clients.svg" alt="" />
              <Link to="/client">{t.client}</Link>
            </li>
            <li>
              <img src="/store.svg" alt="" />
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
              <img src="/search.svg" alt={t.rechercher} className="icon-search" />
            </button>
          </div>

          <div className="profil-bar">
            <div onClick={toggleNotifications} style={{ position: "relative" }}>
              <img src="/notification.svg" alt="Notification" />
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
              <img src="/commentaire.svg" alt="Commentaires" />
              {commentairesOpen && (
                <div className="commentaires-popup">
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="/person.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span role="img" aria-label="Wave"></span> J'adore cette site 👋
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="/person1.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span>"L'interface est tellement fluide et bien pensée !"
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="/person2.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> "Ce tableau de bord m'aide à avoir une vision complète et rapide de mes objectifs.
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="/person3.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="/person4.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="/person5.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="/person6.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                  <div className="commentaires">
                    <div className="img-p">
                      <img src="/person7.jpeg" alt="Person" className="img-p" />
                    </div>
                    <span aria-label="Wave"></span> Bienvenue sur le tableau <br /> de bord, pouvez-vous <br />enregistrer  votre mot de passe ?
                  </div>
                </div>
              )}
            </div>

            <img src="/Profil.png" alt="Profile" className="profil-img" />

            <div className="menu-container">
              <img
                src="/menu.svg"
                alt="Menu"
                className="menu-icon"
                onClick={toggleMenu}
              />
              {menuOpen && (
                <div className="menu-dropdown">
                  <ul>
                    <li className="out">
                      <img src="/setting.svg" alt={t.parametres} />
                      {t.parametres}
                    </li>
                    <li className="out">
                      <img src="/About.svg" alt={t.apropos} />
                      {t.apropos}
                    </li>
                    <li className="out">
                      <img src="/langue.svg" alt={t.langue} />
                      <select onChange={handleLanguageChange} value={language} className="language-select">
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="mg">Malagasy</option>
                      </select>
                    </li>
                    <li className="out">
                      <img src="/out.svg" alt={t.deconnexion} className="icon-log" />
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
            <h2>{t.produits}</h2>
            <button onClick={() => setIsModalOpen(true)} className="create-button">{t.create}</button>
          </div>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <input type="text" name="title" placeholder={t.nom} onChange={handleInputChange} />
                <input type="number" name="price" placeholder={t.prix} onChange={handleInputChange} />
                <input type="text" name="category" placeholder={t.type} onChange={handleInputChange} />
                <input type="number" name="stock" placeholder={t.stock} onChange={handleInputChange} />
                <button onClick={createProduct} className="add-product-btn">save</button>
                <button onClick={() => setIsModalOpen(false)} className="cancel-btn">cancel</button>
              </div>
            </div>
          )}

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
              {loading ? (
                <tr>
                  <td colSpan={5}>Loading...</td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.images[0]} alt={product.title} className="product-image" />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>
                      {product.stock > 0 ? product.stock : <span className="no-stock">{t.noStock}</span>}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Produit;
