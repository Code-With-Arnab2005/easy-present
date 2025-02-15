import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

const Home = () => {
    
        return (
            <div className='min-h-[80vh] place-items-center flex flex-wrap mt-5'>
                <Link to={"/todays-attendances"}><Card title='Get Todays attendance list' subtitle="get all the student's information who gave attendance" /></Link>
                <Link to={"/qr-code"}><Card title='Generate a QR Code' subtitle="Share the QR Code to take attendance" /></Link>
                {/* <Link to={`/user/:${username}`}><Card title='Go to your account' subtitle="get all the student's information who gave attendance" /></Link> */}
                <Link to={"/attendance-form"}><Card title='Go to the Attendance Form' subtitle="Make your attendance" /></Link>
                <Link to={"/"}><Card title='Announce a Notice' subtitle="Share notice among all" /></Link>

            </div>
        )
}

export default Home
