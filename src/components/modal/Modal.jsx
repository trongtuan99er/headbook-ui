import ReactDOM from "react-dom";
import "./modal.scss";
import { useState, useEffect } from "react";

const Modal = ({ show, close, title, children }) => {
  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
    setDomReady(true)
  })

  return domReady 
  ? ReactDOM.createPortal(
    show ?
      <div
        className="modalContainer"
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title"> {title} </h2>
            <span className="close" onClick={() => close()}>
              &times;
            </span>
          </header>
          <main className="modal_content"> {children} </main>
        </div>
      </div>
      : null, document.getElementById("modal")
  )
  : null
};

export default Modal;