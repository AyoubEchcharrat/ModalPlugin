import React from "react";
import './ModalPlugin.css'

const ModalPluggin = ({ toggleModal, setToggleModal,children, colorBG, width, height }) => {

  const determinedWidth = width ? width : 'fit-content'
  const determinedHeight = height ? height : 'fit-content'
  const determinedColorBG = colorBG ? colorBG : 'white'

  const modalContainerStyle = {
    width: determinedWidth,
    height: determinedHeight,
    backgroundColor: determinedColorBG,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '5px',
    padding:'10px 15px 25px 15px'
  }

  return (
    toggleModal &&
    <div style={modalContainerStyle}>
      <div onClick={() => setToggleModal(false)} className="close-modal"></div>
      {children}
    </div>
  );
}

export default ModalPluggin;