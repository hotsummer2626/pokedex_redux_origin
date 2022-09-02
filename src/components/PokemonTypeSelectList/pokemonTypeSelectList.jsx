import React, { useState } from "react";
import styles from "./pokemonTypeSelectList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { TYPEICON } from "../../constant/constant";
import { connect } from "react-redux";
import { setPokemonListByType } from "../../redux/actions/pokemon";

const PokemonTypeSelectList = ({ setPokemonListByType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputText, setInputText] = useState("All");

  const handleSelectChange = (text) => {
    return () => {
      setInputText(text);
      setPokemonListByType(text);
      setIsMenuOpen(!isMenuOpen);
    };
  };

  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.open : ""}`}>
      <div
        className={styles.inputWrapper}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <input
          type="text"
          placeholder="Choose Type"
          readOnly
          value={inputText}
        />
        <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
      </div>
      <ul className={styles.dropdown}>
        {[{ id: 0, text: "All" }, ...TYPEICON].map((icon) => (
          <li className={styles.item} onClick={handleSelectChange(icon.text)}>
            {icon.src && <img src={icon.src} alt="type-icon" />}
            <span className={styles.text}>{icon.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(() => ({}), {
  setPokemonListByType,
})(PokemonTypeSelectList);
