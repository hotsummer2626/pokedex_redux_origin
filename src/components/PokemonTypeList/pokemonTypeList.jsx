import React from "react";
import styles from "./pokemonTypeList.module.scss";
import { TYPEICON } from "../../constant/constant";
import { connect } from "react-redux";
import { setPokemonListByType } from "../../redux/actions/pokemon";

const PokemonTypeList = ({ setPokemonListByType }) => {
  return (
    <ul className={styles.container}>
      {[{ id: 0, text: "All" }, ...TYPEICON].map((icon) => (
        <li
          key={icon.id}
          className={`${styles[`icon-wrapper`]} ${
            icon.text === "All" ? styles.all : ""
          } ${styles[icon.text]}`}
          onClick={() => setPokemonListByType(icon.text)}
        >
          {icon.alt && (
            <img className={styles[`icon-img`]} src={icon.src} alt={icon.alt} />
          )}
          <span className={styles[`icon-text`]}>{icon.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default connect(() => ({}), {
  setPokemonListByType,
})(PokemonTypeList);
