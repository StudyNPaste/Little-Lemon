import React from 'react'
import './Testimonials.css'
import star from '../Assets/star.png'
import iconM from '../Assets/profile-icon.png'
import iconF from '../Assets/female-profile.jpg'

export const Testimonials = () => {
  return (
    <div className='testimonials'>
        <h1>Testimonials</h1>
        <div className='reviews'>
            <div className='feedback'>
                <div className='star'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <div className='profile-pic'>
                    <img id='icon' src={iconF} alt="" />
                    <h4>Miyah</h4>
                </div>
                <p>This place was amazing. We booked a guaranteed window table for our early anniversary dinner. We were given a table right next to the famous table 56. The view was stunning. This was a perfect way to end our trip.</p>
            </div>
            <div className='feedback'>
                <div className='star'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <div className='profile-pic'>
                    <img id='icon' src={iconM} alt="" />
                    <h4>James</h4>
                </div>
                <p>We really liked it here. Liked the vibe, thought the service was really friendly, helpful, and good, and the food was excellent.</p>
            </div>
            <div className='feedback'>
                <div className='star'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <div className='profile-pic'>
                    <img id='icon' src={iconF} alt="" />
                    <h4>Chantal</h4>
                </div>
                <p>My husband and I enjoyed cocktails and the most breathtaking views of the Strip from the Skyfall. We were there at sunset on a Saturday night and were surprised that there were only 20 other patrons.</p>
            </div>
            <div className='feedback'>
                <div className='star'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <div className='profile-pic'>
                    <img id='icon' src={iconF} alt="" />
                    <h4>Aaliyah</h4>
                </div>
                <p> Great vibe, service and food - all around good place for dinner</p>
            </div>
        </div>
    </div>
  )
}

