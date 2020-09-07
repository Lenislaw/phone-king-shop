import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { filterProduct } from "../../actions/filter";

const PriceInputs = ({ filterParams, filterProduct }) => {


  const [stateMax, setStateMax] = useState(filterParams.priceMin);

  const onChangeMax = (e) => {
    e.preventDefault();
    const value = parseInt(e.target.value);

    if (value > filterParams.priceMax) {
      setStateMax(filterParams.priceMax);
    } else if (value < 1) {
      setStateMax(filterParams.priceMin);
    } else {
      setStateMax(e.target.value);
    }
  };

  const onClick = (e) => {
    e.preventDefault();

    // Check checked brand's
    const checkboxBrands = Array.from(
      document.querySelectorAll("#checkbox-brand")
    );
    let checked = [];
    checkboxBrands.forEach((input) => {
      if (input.checked) {
        checked.push(input.value);
      }
    });

    // Check select RAM
    const selectboxRam = Array.from(document.querySelectorAll("#select-ram"));
    let selectedRam;
    selectboxRam.forEach((option) => {
      if (option.selected) {
        selectedRam = option.value;
      }
    });

    // Check select Memory
    const selectboxbuiltinMemory = Array.from(
      document.querySelectorAll("#select-builtinMemory")
    );
    let selectedBuiltinMemory;
    selectboxbuiltinMemory.forEach((option) => {
      if (option.selected) {
        selectedBuiltinMemory = option.value;
      }
    });

    // Check dualSim
    const selectDualSim = Array.from(
      document.querySelectorAll("#select-dualSim")
    );
    let selectedDualSim;
    selectDualSim.forEach((option) => {
      if (option.selected) {
        selectedDualSim = option.value;
      }
    });

    filterProduct(
      checked,
      selectedRam,
      selectedBuiltinMemory,
      selectedDualSim,
      stateMax
    );
  };

  return (
    <Fragment>
      <div className="price ">
        <h4>Select your price range!</h4>
        <div className="price-box">
          <div className="input-box">
            <input
              className="price-input"
              type="number"
              pattern="[0-9]"
              step={1}
              value={stateMax}
              onChange={(e) => onChangeMax(e)}
            />
            <label className="price-label" htmlFor="max">
              Maximum price!
            </label>
          </div>
        </div>
      </div>

      <div className="filter-btn">
        <button className="btn" onClick={onClick}>
          Filter
        </button>
      </div>
    </Fragment>
  );
};

export default connect(null, { filterProduct })(PriceInputs);
