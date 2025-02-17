import  { useState,useEffect ,useRef } from "react";
import "../style/Dashboard.scss";
import { Link, useLocation } from "react-router-dom";
import ChartsOverviewDemo from "./data";
import Pie from "./Graph2";
import BasicLineChart from "./Graph3";

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



const PhoneSearch = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0); 
  const shortenTitle = (title: string) => title.split(" ").slice(0, 2).join(" ");
 

  useEffect(() => {
    if (loading) return;  
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=phone&limit=10&skip=${offset}`)
      .then(response => response.json())
      .then((data: ProductsResponse) => {
        setProducts(prev => [...prev, ...data.products]);
        setVisibleProducts(prev => [...prev, ...data.products]);
        setHasMore(data.products.length === 5); products
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur:", error);
        setLoading(false);
      });
  }, [offset]);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const bottom = scrollRef.current.scrollHeight === scrollRef.current.scrollTop + scrollRef.current.clientHeight;
    if (bottom && hasMore && !loading) {
      setOffset(prev => prev + 5); 
    }
  };

  return (
    <div 
      className="products" 
      ref={scrollRef} 
      onScroll={handleScroll} 
      style={{ maxHeight: '500px', overflowY: 'auto' }}
    >
      {visibleProducts.map((product) => (
        <div className="product" key={product.id}>
          <div className="place-img">
          <img src={product.images[0]} alt={product.title} className="api-img" loading="lazy" />
          </div>
          <div className="pgh-card">
            <p>{shortenTitle(product.title)}</p>
            <p className="prix">{product.price} Ar</p>
          </div>
          <div className="voir">
            <p className="lien">
              <Link to="/produit">Voir</Link>
            </p>
            <Link to="/produit"><img src="./public/Arrow .svg" alt="Arrow" /></Link>
          </div>
        </div>
      ))}
      {loading && <p>Loading more...</p>} 
    </div>
  );
};



function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commentairesOpen, setCommentairesOpen] = useState(false);
  const location = useLocation();


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
        <Link to="/dashboard">
        <img src="/logos.svg" alt="" className="logo" />
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
                      <p className="p-out" onClick={() => {
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
          <div className="flex-text">
            <h2>Dashboard</h2>
            <p className="p-main">CA:100M Ar</p>
          </div>
          <div className="flex-chart">
            <div className="chart">
              <ChartsOverviewDemo />
              <p className="text-p">Top Vente</p>
            </div>
            <div className="chart">
              <Pie />
              <p className="text-p">Top Product</p>
            </div>
            <div className="chart1">
              <BasicLineChart />
              <p className="text-p">Progrès</p>
            </div>
          </div>

        </section>

        <section className="sales-list">
          <h2>Liste de vente</h2>
         <div>
          <PhoneSearch />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
