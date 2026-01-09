import React from 'react'
import './Categories.css'
import category_1 from '../../assets/Education.jpg'
import category_2 from '../../assets/Education.jpg'
import category_3 from '../../assets/Education.jpg'
import category_4 from '../../assets/Education.jpg'

const categories = () => {
    return (
        <div className='categories'>
            <div className='category'>
                <img src={category_1} alt="" />
            </div>
        </div>
    )
}

export default categories
