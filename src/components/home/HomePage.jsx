import { Link } from 'react-router-dom';
import { Transition } from '../transition/Transition';
import './home.css';

export const HomePage = () => {
    return (
        <div className='page' id='home'>
            <Transition title='Inicio' />
            <div className='home__content'>
                <h3>Inmobiliara</h3>
                <h1 className='name'>
                    Mi Casa
                </h1>
                <p className='info'>Cumplimos tu sueño</p>
                <Link to='/contact' className='contact_btn'>Contactanos</Link>
                <div className='home__buttons'>
                    <a href='https://www.linkedin.com/in/' target='_blank' rel='noreferrer'>
                        <img src='./img/linkedin.png' alt='linkedin logo' />
                        Linkedin
                    </a>
                </div>
            </div>
            <div className='home__decoration'>
                <img className='home__img' src="img/home.png" alt="Mi casa" />
            </div>
        </div>
    )
}
