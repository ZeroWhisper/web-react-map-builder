import React from 'react';
import ReactModal from 'react-modal';

import { style } from './style';

ReactModal.setAppElement(document.getElementById('root'));

const AppModal = props => {
  const { isOpen, onRequestClose } = props;
  const { windowWidth, windowHeigth } = props;

  const modalStyle = style({ windowWidth, windowHeigth });

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyle}
      // setAppElement={'#root' || props.elementParent}
      // contentLabel="onRequestClose Example"
      shouldCloseOnOverlayClick={true}>
      {props.children}
    </ReactModal>
  );
};

export default AppModal;
