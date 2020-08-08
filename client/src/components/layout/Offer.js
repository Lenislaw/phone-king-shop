import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <section>
      <div className="offer">
        <h1 className="offer-title">
          Phones <span className="main-color-text">King</span> Offer
        </h1>
        <div className="offer-items">
          <ul className="list">
            <li className="list-item">
              <div className="item">
                <div className="box">
                  <div className="item-photo">
                    <img
                      className="item-photo-img"
                      src="imgs/phone1.jpg"
                      alt="phone"
                    />
                  </div>
                  <div className="item-parameters">
                    <div className="parameters">
                      <ul>
                        <li className="parameter">
                          Camera:{" "}
                          <span className="bold">48 + 8 + 2 + 2 MPix</span>
                        </li>
                        <li className="parameter">
                          RAM memory: <span className="bold">6 GB</span>
                        </li>
                        <li className="parameter">
                          Phone memory: <span className="bold">128 GB</span>
                        </li>
                        <li className="parameter">
                          Screen size: <span className="bold">6.4"</span>
                        </li>
                        <li className="parameter">
                          Waterproof: <span className="bold">No</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item-details">
                  <div className="description">
                    <Link to={`/details/id`}>
                      <div className="name">
                        Smartfon Apple iPhone 11 64 GB Dual SIM Czarny
                        (MWLT2PM/A)
                      </div>
                    </Link>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>( 5 reviews)
                    </div>
                    <div className="price">3500 $</div>
                  </div>
                </div>
                <div className="buttons">
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="wish-list">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="item">
                <div className="box">
                  <div className="item-photo">
                    <img
                      className="item-photo-img"
                      src="imgs/phone1.jpg"
                      alt="phone"
                    />
                  </div>
                  <div className="item-parameters">
                    <div className="parameters">
                      <ul>
                        <li className="parameter">
                          Camera:{" "}
                          <span className="bold">48 + 8 + 2 + 2 MPix</span>
                        </li>
                        <li className="parameter">
                          RAM memory: <span className="bold">6 GB</span>
                        </li>
                        <li className="parameter">
                          Phone memory: <span className="bold">128 GB</span>
                        </li>
                        <li className="parameter">
                          Screen size: <span className="bold">6.4"</span>
                        </li>
                        <li className="parameter">
                          Waterproof: <span className="bold">No</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item-details">
                  <div className="description">
                    <a href="details.html">
                      <div className="name">
                        Smartfon Apple iPhone 11 64 GB Dual SIM Czarny
                        (MWLT2PM/A)
                      </div>
                    </a>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>( 5 reviews)
                    </div>
                    <div className="price">3500 $</div>
                  </div>
                </div>
                <div className="buttons">
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="wish-list">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="item">
                <div className="box">
                  <div className="item-photo">
                    <img
                      className="item-photo-img"
                      src="imgs/phone1.jpg"
                      alt="phone"
                    />
                  </div>
                  <div className="item-parameters">
                    <div className="parameters">
                      <ul>
                        <li className="parameter">
                          Camera:{" "}
                          <span className="bold">48 + 8 + 2 + 2 MPix</span>
                        </li>
                        <li className="parameter">
                          RAM memory: <span className="bold">6 GB</span>
                        </li>
                        <li className="parameter">
                          Phone memory: <span className="bold">128 GB</span>
                        </li>
                        <li className="parameter">
                          Screen size: <span className="bold">6.4"</span>
                        </li>
                        <li className="parameter">
                          Waterproof: <span className="bold">No</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item-details">
                  <div className="description">
                    <a href="details.html">
                      <div className="name">
                        Smartfon Apple iPhone 11 64 GB Dual SIM Czarny
                        (MWLT2PM/A)
                      </div>
                    </a>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>( 5 reviews)
                    </div>
                    <div className="price">3500 $</div>
                  </div>
                </div>
                <div className="buttons">
                  <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="wish-list">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Offer;
