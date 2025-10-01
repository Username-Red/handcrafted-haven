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
