import React from 'react'
import "./Home.css"
import Product from '../../Component/Product/Product'

const Home = () => {
  return (
    <div className="home">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" alt="Banner" className="home__image" />
      <div className="home__row">

        <Product
          id="1"
          title="Thrustmaster T-16000M FCS | Fight Game Controller | Joystick | PC"
          price={6999.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61zfmGoetxL._SY879_.jpg" />
        <Product
          id="2"
          title="Acer Aspire 3 Intel i3-10th Gen 15.6 Light Laptop"
          price={32990}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81YUWJOwMDL._SX679_.jpg" />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Apple AirPods Pro"
          price={23900.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SX679_.jpg" />
        <Product
          id="4"
          title="Apple Smart Keyboard Folio (for 12.9-inch iPad Pro - 3rd Generation) - US English"
          price={16999.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61dloRL9kkL._SX679_.jpg" />
        <Product
          id="5"
          title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
          price={9749}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61XclfIKcbL._SX679_.jpg" />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="LG QHD (2560 x 1440) 32 Inch IPS Display 3 Side Borderless - HDR 10, sRGB 99%, AMD Free sync - Dual HDMI, Display Port - 32QN600"
          price={24834.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71lKil3VGCL._SX679_.jpg" />

      </div>
    </div>
  )
}

export default Home
