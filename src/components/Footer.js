import React from 'react';
import facebook from '../resources/facebook.png';
import github from '../resources/github.png';
import instagram from '../resources/instagram.png';
import twitter from '../resources/twitter.png';
import '../styles.css'

export default function Footer() {
  return (
    <div className="footer">
    <img src={facebook} alt="#"/>
    <img src={github} alt="#"/>
    <img src={instagram} alt="#"/>
    <img src={twitter} alt="#"/>
    </div>
  )
}

