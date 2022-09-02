import React from "react";
import styles from "./card.module.scss";

const Card = ({ pokemon }) => {
  return (
    <li className={styles.container}>
      <span className={styles.number}>{pokemon.id}</span>
      <div className={styles["img-wrapper"]}>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="pokemon"
        />
      </div>
      <div>
        <h2 className={styles.name}>{pokemon.name}</h2>
        <div className={styles["type-wrapper"]}>
          {pokemon.types.map(({ slot, type }) => (
            <span key={slot} className={`${styles.type} ${styles[type.name]}`}>
              {type.name}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Card;
