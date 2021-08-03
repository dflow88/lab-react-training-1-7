import React from 'react'

export default function index(props) {


    const getStars = (rating) => {

        let stars = ""

        for (let i = 0; i < Math.round(rating); i++) {
            stars+= "★"
        }
        for (let i = 0; i < 5- Math.round(rating); i++) {
            stars+= "☆"
        }        

        return stars
    }

    return (
        <div>
            {getStars(props.children)}
        </div>
    )
}
