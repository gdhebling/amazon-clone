import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product id="123456" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4} />
                    <Product id="167945" title="FitBit band (Sports tracker, Sleep Tracker, GPS)" price={159.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={3} />
                </div>

                <div className="home__row">
                    <Product id="587668" title="Kenwood kMix Mixer" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" rating={4} />
                    <Product id="897423" title="Amazon Echo" price={299.99} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" rating={5} />
                    <Product id="554449" title="New Apple iPad Pro (12.9-inch, 128GB) - Silver (4th Generation)" price={549.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg" rating={4} />
                </div>

                <div className="home__row">
                    <Product id="112223" title="Samsung LED Monitor 49 Curved LED Gaming Monitor" price={349.99} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" rating={5} />
                </div>

            </div>
        </div>
    )
}

export default Home
