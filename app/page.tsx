import Image from "next/image";
import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import ProductCard from './components/ProductCard'
import styles from './styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  const products = [
    ['Sebastian', '/images/Sebastian.png'], 
    ['Lucy', '/images/Lucy.png'], 
    ['Kris', '/images/Kris.png'], 
    ['Jethro', '/images/Jet.png']
  ] //Placeholder until database integration
  
  return (

    <>
      <div className={styles.gridContainer}>
        
        {products.map((p, i) => (
          <Link key={i} className={styles.card} href={`/products/${p[0].toLowerCase()}`}>
              <ProductCard image={p[1]} name={p[0]}/>
          </Link>
          
        ))}
        
      </div>
    </>
    

  );
}
