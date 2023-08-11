import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import style from '../style/Modal.module.scss';
import InfoScreen from './infoScreen';
import ScreenSaver from './screenSaver'


const Modal = ({ isOpen, onClose }) => {
  const [activeComponent, setActiveComponent] = useState(1);

  const handleNext = () => {
    setActiveComponent(activeComponent === 1 ? 2 : 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveComponent(activeComponent === 1 ? 2 : 1);
    }, 30000);
  })

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={style.modal} id="modal">
      <div className='modalContent' onClick={onClose}>
        {activeComponent === 1 ? <InfoScreen /> : <ScreenSaver />}
      </div>

    </div>,
    document.body
  );
}

export default Modal;
