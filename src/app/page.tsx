"use client"

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);
  
  const handleToggle = () => {
      setIsToggled(!isToggled);
  };
  
  return (
      <button
      onClick={handleToggle}
      className={styles.toggleButton}
      aria-label="Toggle Button"
      >
      {isToggled ? (
          <Image
          src="/assets/toggle/Group 6.png"
          alt="Logo do Grupo"
          layout="intrinsic"
          width={60}
          height={0}
      />
      ) : (
          <Image
          src="/assets/toggle/Group 2@2x.png"
          alt="Logo do Grupo"
          layout="intrinsic"
          width={60}
          height={0}
      />
      )}
      </button>
  );
  }

export default function Home() {
  return (
    <div id="container">
    <header className={styles.header}>
      <Image
        src="/assets/logo/Group@3x.png"
        alt="Logo do Grupo"
        layout="intrinsic"
        width={340}
        height={0}
      />
      <h1>EXPLORE O UNIVERSO</h1>
      <h5>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve</h5>
      <div id="searchInputContainer">
          <Image
            src="/assets/busca/Lupa/Shape@1,5x.svg"
            alt="Logo do Grupo"
            layout="intrinsic"
            width={20}
            height={0}
          />
        <input id="searchInput" type="text" placeholder="Procure por heróis"/>
      </div>
    </header>
    <main>
      <section className={styles.mainHeader}>
        <h3>
          Encontrados 10000 heróis
        </h3>
        <div className={styles.mainToggle}>
          <div className={styles.mainToggleText}>
            <Image
              src="/assets/icones/heroi/noun_Superhero_2227044@1,5x.svg"
              alt="Logo do Grupo"
              layout="intrinsic"
              width={15}
              height={0}
            />
            Ordenar por nome - A/Z
          </div>
          <ToggleButton/>
          <div className={styles.mainToggleText}>
            <Image
              src="/assets/icones/heart/Path.svg"
              alt="Logo do Grupo"
              layout="intrinsic"
              width={15}
              height={0}
            />
            Somente favoritos
          </div>
        </div>
      </section>
      <section className={styles.gridCards}>

      </section>
    </main>
  </div>
  );
}