import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import { BsBagCheckFill} from 'react-icons/bs'
import { runFirework } from '../lib/util';


import { useStateContext } from '../context/StateContext'

const success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
    
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFirework();
    },[])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order, payment revieved</h2>
            <p className='email-msg'>Check your email inbox for reciept</p>
            <p className='description'>
                If you have any questions email to us 
                <a className='email' href='mailto:artisticlibrary@gmail.com'>Click me</a>
            </p>
            <Link href="/">
            <button type='button' width="300px" className='btn'>
                Continue shopping
            </button>
            </Link>
        </div>
    </div>
  )
}

export default success