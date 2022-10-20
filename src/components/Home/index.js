import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'




const Home = () => {
    const [lettersClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'n', 't', 'o', 'c', 'k', 'i', 's', ' ', 'M', 'a', 'n', 't', 'a', 's']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r',]


    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={lettersClass}>H</span>
                    <span className={`${lettersClass} _12`}>i,</span>
                    <br />
                    <span className={`${lettersClass} _13`}>I</span>
                    <span className={`${lettersClass} _14`}>'m</span>

                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters letterClass={lettersClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={lettersClass}
                        strArray={jobArray}
                        idx={22}
                    /></h1>
                <h2>FrontEnd Developer/JavaScript Junior/ BackEnd Developer</h2>
                <Link to="/contact" className='flat-button'>Contact ME</Link>
            </div>
        </div>
    )
}




export default Home