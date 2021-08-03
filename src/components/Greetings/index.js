import React from 'react'

export default function index(props) {


    const getGreeting = (lang) => {
        switch (lang) {
        case "de":
            return "Hallo"
        case "en":
            return "Hello"
        case "fr":
            return "Bonjour"
        case "es":
            return "Hola"
        default:
            return ""
        }
    } 

    return (
        <div className="box">
            {getGreeting(props.lang)} {props.children}
        </div>
    )
}
