import React from 'react'
import Link from 'next/link'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <Link href={'../page.tsx'}>Handcrafted Haven</Link>

        <ul>
            <li>
                {<Link href="###">Profile</Link> /*will be profile if logged in, will be login if logged out */}
            </li>
            <li>
                {<Link href="###">Favourites</Link>}
            </li>
            <li>
                {<Link href="###">About Us</Link>}
            </li>
            <li>
                {<Link href="###">Contact</Link>}
            </li>
            <li>
                {<Link href="###">Shop</Link>}
            </li>
            <li>
                {<Link href="###">Home</Link>}
            </li>
        </ul>
    </header>
  )
}

export default Header