import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import Loader from 'react-loaders'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'f', 'e', 't']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <div className="heading-1">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _11`}>i</span>
              <span className={`${letterClass} _12`}>,</span> <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="Developer" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <span className={`${letterClass} _19`}>,</span>
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
          </div>
          <div className="heading-2">
            <h2>Frontend Developer / Javascript Developer</h2>
          </div>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
