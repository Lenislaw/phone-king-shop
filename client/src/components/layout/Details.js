import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDetails } from "../../actions/offer";
import Spinner from "./Spinner";

const Detail = ({ getDetails, match, details, loading }) => {
  const idMatch = match.params.id;

  useEffect(() => {
    getDetails(idMatch);
  }, []);
  details !== null && console.log(details._id);

  return loading ? (
    <Spinner />
  ) : (
    <div className="product">
      <div className="product-product">
        <div className="image">
          <img
            className="item-photo-img"
            src={`../imgs/${details._id}.png`}
            alt="phone"
          />
        </div>
        <div className="name">{details.name}</div>
        <div className="price">{details.price} $</div>
        <div className="buttons">
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="wish-list">
          <i className="far fa-heart"></i>
        </div>
      </div>

      <div className="product-specyfication">
        <h2 className="specyfication-mainheading">Specyfication</h2>
        <h3 className="specyfication-heading">Product</h3>
        <ul className="specyfication-list">
          <li className="specyfication-list-item">
            Producent: {details.producent}
          </li>
          <li className="specyfication-list-item">
            Kod Producenta: {details.producentCode}
          </li>
          <li className="specyfication-list-item">EAN: {details.ean}</li>
        </ul>
        <h3 className="specyfication-heading">Techniczne</h3>
        <ul className="specyfication-list">
          <li className="specyfication-list-item">
            System operacyjny: {details.operatingSystem}
          </li>
          <li className="specyfication-list-item">
            Procesor: {details.processor}
          </li>

          <li className="specyfication-list-item">
            Pamięć RAM: {details.ramMemory} GB
          </li>
          <li className="specyfication-list-item">
            Pamięć wbudowana: {details.builtinMemory} GB
          </li>
          <li className="specyfication-list-item">
            Obsługa kart pamięci: {details.supForMemoryCards}
          </li>
          <li className="specyfication-list-item">
            Maksymalna pojemność karty: {details.maxCapOfCart}
          </li>
          <li className="specyfication-list-item">
            Standard SIM: {details.standardSim}
          </li>
          <li className="specyfication-list-item">
            Dual SIM: {details.dualSim}
          </li>
        </ul>
        <h3 className="specyfication-heading">Łączność</h3>
        <ul className="specyfication-list">
          <li className="specyfication-list-item">Modem: {details.modem}</li>
          <li className="specyfication-list-item">WiFi:{details.wifi}</li>
          <li className="specyfication-list-item">
            Bluetooth: {details.bluetooth}
          </li>
          <li className="specyfication-list-item">NFC: {details.nfc}</li>
          <li className="specyfication-list-item">USB: {details.usb}</li>
          <li className="specyfication-list-item">
            Złącza audio: {details.audioConnectors}
          </li>
        </ul>
        <h3 className="specyfication-heading">Wyświetlacz</h3>
        <ul className="specyfication-list">
          <li className="specyfication-list-item">
            Aparat główny: {details.camera}
          </li>
        </ul>
        <h3 className="specyfication-heading">Funkcje</h3>
        <ul className="specyfication-list">
          <li className="specyfication-list-item">GPS: {details.gps}</li>
          <li className="specyfication-list-item">
            Czytnik lini papilarnych: {details.fingerprintScanner}
          </li>
          <li className="specyfication-list-item">
            Czujnik zbliżeniowy: {details.proximitySensor}
          </li>
        </ul>
        <h3 className="specyfication-heading">Bateria</h3>
        <ul className="specyfication-list">
          <li className="specyfication-list-item">
            Pojemność[mAh]: {details.battery}
          </li>
        </ul>
        <h3 className="specyfication-heading">Fizyczne</h3>
        <ul className="specyfication-list">
          <li className="specyfication-list-item">
            Wysokość[mm]: {details.height}
          </li>
          <li className="specyfication-list-item">
            Szerokość[mm]: {details.width}
          </li>
          <li className="specyfication-list-item">
            Głębokość[mm]: {details.depth}
          </li>
          <li className="specyfication-list-item">Waga[g]:{details.weight}</li>
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  details: state.offer.productDetails,
  loading: state.offer.loading,
});
export default connect(mapStateToProps, { getDetails })(Detail);
