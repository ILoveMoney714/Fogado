import React from "react";
import "../styles/fogado.css";

function Napraforgo() {
  return (
    <div className="napraforgo">
      <h3 >Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
      <p >
                A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára.  A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség, a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében. <br/>
                </p>
                    <p className="link"><a  href="https://falusiturizmus.eu/">Tájékoztató oldal</a> </p>
                    <img src="/logo.png" alt="logo" />
                    <img className="hollokokep" src="/holloko_masolata.jpg" alt="holloko" />
    </div>
  );
}


export default Napraforgo;