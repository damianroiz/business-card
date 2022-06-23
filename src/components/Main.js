import React from 'react'
import profile from '../resources/profile.png'
import mail from '../resources/mail.png'
import '../styles.css'


export default function Main() {
  return (
      <>
      <img src={profile} alt="#" className="profilePic" />
      <section className="cardContent">
      <h1>Susana Smith</h1>
      <h2>Frontend Developer</h2>
      <small>damianroiz.com</small>
      <div className="buttons">
        <a href='../resources/main.png' className="email">
        Email
        </a>
        <a href="#" className="linkedin">
        LinkedIn
        </a>
      </div>
        <div className="aboutsection">
        <div>
        <h3>About</h3>
        <p>I specialize in Frontend Development, with a special interest in building e-commerce platforms for small business</p>
        </div>
        <div className="interests">
        <h3>Other interests</h3>
        <p>Weightlifting, swimming, reading, hiking, cooking, and travelling</p>
        </div>
      </div>
      </section>
      </>
  )
}