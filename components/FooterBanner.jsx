import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({FooterBanner : {discount,desc,largeText1,largeText2,smallText,midText,product,buttonText,image,saleTime}}) => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className='left'>
          <p>{discount} OFF Hurry Now!!</p>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <Link href={`/product/${product.slug}`}>
            <button type='button'>{buttonText}</button>
          </Link>
          <img 
             src={urlFor(image)}
             className="footer-banner-image"
          />

        </div>
      </div>
    </div>
  )
}

export default FooterBanner