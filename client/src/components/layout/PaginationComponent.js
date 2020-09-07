import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { setOffer } from "../../actions/offer";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const PaginationComponent = ({ offer, setOffer, filtered, url }) => {
  useEffect(() => {
    setPage(offer.page);
  }, [offer.page, filtered]);
  const classes = useStyles();
  const [pageCurrent, setPage] = useState(offer.page);

  const handleChange = (event, value) => {
    setPage(value);
    setOffer(value);
  };

  return filtered ? (
    <div></div>
  ) : (
    <div className={classes.root}>
      <Pagination
        count={offer.lastPage}
        page={pageCurrent}
        onChange={handleChange}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  filtered: state.offer.filtered,
  url: state.filter.url,
});
export default connect(mapStateToProps, { setOffer })(
  PaginationComponent
);
