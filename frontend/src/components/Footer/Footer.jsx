import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-did'>
        <div>
        <button className='footer-icon'><i class="fa-brands fa-square-facebook m-2"></i></button>
        <button className='footer-icon'><i class="fa-brands fa-square-twitter m-2"></i></button>
        <button className='footer-icon'><i class="fa-brands fa-square-instagram m-2"></i></button>
        <button className='footer-icon'><i class="fa-brands fa-square-whatsapp m-2"></i></button>
        </div>
        <div>
            <ul>
                <li className='footer-options'><i class="fa-solid fa-house m-2"></i>HOME /</li>
                <li className='footer-options'><i class="fa-sharp fa-solid fa-square-check m-2"></i>FUN TESTS & QUIZZES /</li>
                <li className='footer-options'><i class="fa-solid fa-newspaper m-2"></i>TESTING NEWS /</li>
                <li className='footer-options'><i class="fa-solid fa-square-poll-vertical m-2"></i>MY RESULTS /</li>
                <li className='footer-options'><i class="fa-solid fa-life-ring m-2"></i>SUPPORT /</li>
                <li className='footer-options'><i class="fa-solid fa-address-card m-2"></i>SIGN-IN </li>
            </ul>
            <h6 className='footer-h6'>© 1999-2024 FunEducation, Inc. All Rights Reserved.</h6>
        </div>
    </div>
  )
}

export default Footer
