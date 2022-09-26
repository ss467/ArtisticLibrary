import React from 'react'
import {client} from "../lib/client"
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({products,bannerData}) => (
  
    <div>
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Phenomenol creations</h2>
        <p>A great deal of art is created</p>
      </div>

      <div className="products-container">
        {
        products?.map((pickle)=><Product key={pickle._id} pickle={pickle} />)
        }
      </div>

      <FooterBanner FooterBanner={bannerData && bannerData[0]}/>
    </div>
  
);


// Getting data from sanity using getServersideProps method and passing it to the component as props

  export const getServerSideProps = async ()=>{
      const query = '*[_type=="pickle"]'
      const products = await client.fetch(query)

      const bannerQuery = '*[_type=="banner"]'
      const bannerData = await client.fetch(bannerQuery)

      return {
          props:{products, bannerData}
        }    

  }

export default Home
