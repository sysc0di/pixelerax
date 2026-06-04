"use client";
import React, { useState } from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Logs } from 'lucide-react';
import SidebarMenu from './SidebarMenu';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('nav');

  // Çerez okuma fonksiyonu düzeltildi
  const getLocaleFromCookie = () => {
    if (typeof window === "undefined") return 'en'; // SSR sırasında hata vermemesi için varsayılan 'en'

    const cookies = document.cookie.split('; ');
    const localeCookie = cookies.find(row => row.startsWith('NEXT_LOCALE='));

    // Çerez varsa [1] indisindeki değeri döndürür, yoksa 'en' döndürür
    return localeCookie ? localeCookie.split('=')[1] : 'en';
  };

  const locale = getLocaleFromCookie();

  return (
    <div className={styles.navbarcontanier} >
      <SidebarMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className={`${styles.emptydiv} ${styles.emptydivleft}`} ></div>
      <div className={styles.navbar} >
        <div className={styles.logo}>
          <Link href={`/${locale}/`}>
            <img
              src="/logo.svg"
              alt="mithrabyte"
              className={styles.logoimg}
            />
          </Link>
        </div>
        <div className={styles.navlinks}>
          <Link className={styles.navlink} href={`/${locale}/packages`} >{t('packages')}</Link>
          <Link className={styles.navlink} href={`/${locale}/services`} >{t('services')}</Link>
          <Link className={styles.navlink} href={`/${locale}/aboutus`} >{t('about')}</Link>
          <Link className={styles.navlink} href={`/${locale}/contact`} >{t('contact')}</Link>
        </div>
        <button className={styles.navmenubutton} onClick={() => setMenuOpen(!menuOpen)}  ><Logs /> </button>
      </div>
      <div className={`${styles.emptydiv} ${styles.emptydivright}`} ></div>
    </div>
  )
}

export default Navbar;