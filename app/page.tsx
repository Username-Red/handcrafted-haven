import Image from "next/image";
import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import ProductCard from './components/ProductCard'
import styles from './styles/Home.module.css'

export default function Home() {
  const products = [
    ['Sebastian', '/images/Sebastian.png'], 
    ['Lucy', '/images/Lucy.png'], 
    ['Kris', '/images/Kris.png'], 
    ['Jethro', '/images/Jet.png']
  ] //Placeholder until database integration
  
  return (

    <>
      {/* <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div> */}
      <div className={styles.gridContainer}>
        
        {products.map((p, i) => (
          <div key={i} className={styles.card}>
            <ProductCard image={p[1]} name={p[0]}/>
          </div>
        ))}
        
        
      </div>
    </>
    

  );
}
