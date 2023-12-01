import React from "react";
import "./Promo.css";
import imgPeace from "../../../images/text__COLOR_landing-logo.svg";
import NavTab from "../NavTab/NavTab"

const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__container-intro">
                    <article className="promo__info">
                        <h1 className="promo__title">
                            Учебный проект студента факультета
                            <span className="promo__title-span">
                                {" "}
                                Веб-разработки.
                            </span>
                        </h1>
                        <p className="promo__subtitle">
                            Листайте ниже, чтобы узнать больше про этот проект и
                            его создателя.
                        </p>
                    </article>
                    <img
                        src={imgPeace}
                        className="promo__img"
                        alt="Изображение интернет-глобуса"
                    />
                </div>
                <NavTab />
            </div>
        </section>
    );
};

export default Promo;
