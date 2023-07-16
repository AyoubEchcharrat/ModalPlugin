import React from "react";
import './ModalPlugin.css'

const ModalPluggin = ({ toggleModal, setToggleModal, children, overlay , overlayColor, colorBG, width, height }) => {

  const determinedWidth = width ? width : 'fit-content'
  const determinedHeight = height ? height : 'fit-content'
  const determinedColorBG = colorBG ? colorBG : 'white'
  const determinedOverlayColor = overlayColor ? overlayColor : '#00000030'

  const modalContainerStyle = {
    width: determinedWidth,
    height: determinedHeight,
    backgroundColor: determinedColorBG,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    borderRadius: '5px',
    padding: '15px 45px 20px'
  }

  const overlayStyle = overlay ?   {
    display : 'block',
    width: '100%',
    height: '100vh',
    backgroundColor: determinedOverlayColor,
    position: 'fixed',
    zIndex: 2,
    top: 0,
    left: 0,
  } : {} 



  return (
    toggleModal &&
    <div style={overlayStyle}>
      <div style={modalContainerStyle}>
        <div onClick={() => setToggleModal(false)} className="close-modal"></div>
        {children}
      </div>
    </div>
  );
}

export default ModalPluggin;
