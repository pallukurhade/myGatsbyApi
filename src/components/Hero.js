import React, { useState } from 'react'
import Modal from 'react-modal'
import banner from "../images/okta-home-page-banner.svg"
import eventLogo from "../images/oktane-21-logo.svg"


const Hero = () => {
    
    const [showRegisterModal,setRegisterModal] = useState(false);
    const [showLoginModal,setLoginModal] = useState(false);
    
    const openRegisterModal = () => {
        setRegisterModal(true);
        setLoginModal(false);
      }
     
    const closeRegisterModal = () => {
        setRegisterModal(false);
      }

    const openLoginModal = () => {
        setRegisterModal(false);
        setLoginModal(true);
      }
     
    const closeLoginModal = () => {
        setLoginModal(false);
      }  
    
    

    return (
     <section className="hero">
       <div className="event-content">
         <div className="event-info">
         <div className="event-logo">         
           <img src={eventLogo} alt="Oktana 21 Logo" className="event-img"/>
         </div>
         <div className="event-details">
         <h4>All sessions are available in the event platform through April 23.</h4>
         <button className="btn" onClick={openRegisterModal}>Register now</button>
         <Modal
          isOpen={showRegisterModal}
          onRequestClose={closeRegisterModal}
          className="myModal"
          overlayClassName="Overlay"
          contentLabel="Example Modal Register">
         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
         <button className="btn"  onClick={closeRegisterModal}>Close Modal</button>
         </Modal>
         <button className="btn" onClick={openLoginModal}>Login</button>
         <Modal
          isOpen={showLoginModal}
          onRequestClose={closeLoginModal}
          className="myModal"
          overlayClassName="Overlay"
         contentLabel="Example Modal Login">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <button className="btn"  onClick={closeLoginModal}>Close Modal</button>
      
         </Modal>
         </div>
        </div>
        <div className="event-banner">
          <img src={banner} alt="astract banner" className="responsive-img"/>
        </div>
        </div>
 
   </section>
    )

}

export default Hero
