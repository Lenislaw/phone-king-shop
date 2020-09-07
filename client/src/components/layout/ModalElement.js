import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { setAfterThanks } from "../../actions/cart";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const ModalElement = ({ setAfterThanks }) => {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setAfterThanks();
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Payment successfull</h2>
        <p>
          Your order has been paid for. We will notify you by email when it is
          posted! Thank you!
        </p>
      </Modal>
    </div>
  );
};
export default connect(null, { setAfterThanks })(ModalElement);
