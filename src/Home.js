import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img 
                className='home_image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
                alt=''/>
            </div>

            <div className='home_row'>
                <Product 
                id='1'
                title="Become A Programming Master By Learning These Fundamentals Languages Learning computer programming languages doesn't have to be hard." 
                price={19.99} 
                image='https://m.media-amazon.com/images/I/51SMaS8VQcL.jpg' 
                rating={3}/>

                <Product 
                id='2'
                title='Shop Pro X Gaming Keyboard. Features swappable advanced GX mechanical switches, compact tenkeyless design, LIGHTSYNC RGB, programmable macro keys' 
                price={99.99} 
                image='https://resource.logitechg.com/w_460,c_limit,q_auto:best,f_auto,b_rgb:f4f4f4,dpr_2.0/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-hero.png?v=1'
                rating={3}/>
            </div>

            <div className='home_row'>
                <Product 
                id='3'
                title="Samsung LKFA551F6ADS 49' Curved LED Gaming Monitor" 
                price={199.99} 
                image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg' 
                rating={5}/>

                <Product 
                id='4'
                title='Laptop HP 14-dq1003la 14" i5 4G 256SSD 16G Plata 6QW09LA al mejor precio' 
                price={998.99} 
                image='https://intercompras.com/images/productgallery/HP_6QW09LA_ICECAT_35995919.jpg' 
                rating={3}/>

                <Product 
                id='5'
                title='VicTsing Mouse Gaming【Nueva Versión】8 Botón Programable, Ratón Gamer RGB con Cable USB' 
                price={49.99} 
                image='https://images-na.ssl-images-amazon.com/images/I/61U5WlgRiPL._AC_SY355_.jpg' 
                rating={3}/>
            </div>

            <div className='home_row'>
                <Product 
                id='6'
                title='Samsung Monitor Curved Led Gaming Monitor for havind the best experience on it' 
                price={1000.99} 
                image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' 
                rating={3}/>
            </div>
        </div>
    )
}

export default Home
