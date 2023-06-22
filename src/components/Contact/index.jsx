import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [name, setName] = useState('Name')
  const [email, setEmail] = useState('Email')
  const [subject, setSubject] = useState('Subject')
  const [message, setMessage] = useState('Message')
  const [successMessage, setSuccessMessage] = useState('')
  const form = useRef()
  const titleLetters = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']

  const EMAILJS_SERVICE_ID =
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_EMAILJS_SERVICE_ID
      : ''
  const EMAILJS_TEMPLATE_ID =
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_EMAILJS_TEMPLATE_ID
      : ''
  const EMAILJS_PUBLIC_KEY =
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      : ''

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)

          setName('Name')
          setEmail('Email')
          setSubject('Subject')
          setMessage('Message')
          setSuccessMessage('Message sent! You will receive response shortly.')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleLetters}
              idx={15}
            />
          </h1>
          <div className="description-wrapper">
            <p>
              I am interested in freelance opportunities - especially on
              ambitious or large projects. However, if you have any other
              requests or questions, don't hesitate to contact me using below
              form either.
            </p>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    value={name}
                    type="text"
                    name="from_name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
                <li className="half">
                  <input
                    value={email}
                    type="email"
                    name="user_email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    value={subject}
                    type="text"
                    name="subject"
                    required
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </li>
                <li>
                  <textarea
                    value={message}
                    name="message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

            <p>{successMessage}</p>
          </div>
        </div>
        <div className="info-map">
          Safet Duranović,
          <br />
          Slovenia
          <br />
          Dolenjska cesta 34 <br />
          1000 Ljubljana <br />
          Slovenia
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[46.038359, 14.51783]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[46.038359, 14.51783]}>
              <Popup>I live here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Contact
