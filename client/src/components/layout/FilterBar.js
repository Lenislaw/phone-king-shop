import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PriceInputs from "./PriceInputs";
import { getFilterParams } from "../../actions/filter";

const FilterBar = ({ getFilterParams, filterParams, loading }) => {
  useEffect(() => {
    getFilterParams();
  }, []);
  const open = () => {
    const filterIconButton = document.querySelector(".filter-icon-button");
    const filterBar = document.querySelector(".filterbar");

    filterIconButton.classList.toggle("hide");
    filterBar.classList.toggle("show");
  };
  const close = () => {
    const filterIconButton = document.querySelector(".filter-icon-button");
    const filterBar = document.querySelector(".filterbar");

    filterIconButton.classList.toggle("hide");
    filterBar.classList.toggle("show");
  };

  return loading && filterParams === null ? (
    <div></div>
  ) : (
    <Fragment>
      <div className="filter-icon-button" onClick={open}>
        <i className="fas fa-filter"></i>
      </div>
      <div className="filterbar">
        <div className="close-filterbar" onClick={close}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <h3 className="filterbar-heading">Custom Filter</h3>
        <div className="brands filter-box">
          <h4>Choose brand/brand's!</h4>
          {filterParams.brands.map((brand, i) => (
            <div className="input-box" key={`${i}-brand`}>
              <input
                type="checkbox"
                id={`checkbox-brand`}
                name={`${brand}`}
                value={`${brand}`}
              />
              <label htmlFor={`${brand}`}> {`${brand}`}</label>
            </div>
          ))}
        </div>
        <div className="ram filter-box">
          <h4>Minimum RAM Memory!</h4>
          <select className="select-box">
            {filterParams.ramMemory.map((ram, i) => (
              <option id={`select-ram`} value={`${ram}`} key={`${i}-ram`}>
                {`${ram}`} RAM
              </option>
            ))}
          </select>
        </div>
        <div className="builtinMemory filter-box">
          <h4>Minimum Phone Memory!</h4>
          <select className="select-box">
            {filterParams.builtinMemory.map((builtinMemory, i) => (
              <option
                id={`select-builtinMemory`}
                value={`${builtinMemory}`}
                key={`${i}-builtinMemory`}
              >
                {`${builtinMemory}`} GB
              </option>
            ))}
          </select>
        </div>
        <div className="dualSim filter-box">
          <h4>DualSim ?</h4>
          <select className="select-box">
            {filterParams.dualSim.map((dualSim, i) => (
              <option
                id={`select-dualSim`}
                value={`${dualSim}`}
                key={`${i}-dualSim`}
              >
                {`${dualSim}`}
              </option>
            ))}
          </select>
        </div>

        <PriceInputs filterParams={filterParams} />
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  filterParams: state.filter.filterParams,
  loading: state.filter.loading,
});
export default connect(mapStateToProps, { getFilterParams })(FilterBar);
