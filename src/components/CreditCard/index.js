import React from 'react'

export default function index(props) {

    const imgSrc = (type) => {
        if (type === "Visa") {
            return  "./../img/visa.png"
        } else {
            return  "./../img/master-card.svg"
        }

    }

    const expDate = (month, year) => {
        if (month < 10) {
            month = "0" + month
        }
        return `${month}/${year.slice(-2)}`
    }


    return (
         <div className="CreditCard" style={{backgroundColor:props.bgColor, color:props.color}}>
             <img style={{width:"50px", float:"right"}} src={imgSrc(props.type) } alt=""/>
             <br/>
             <div className="number">
             •••• •••• •••• {props.number.slice(-4)}
             </div>
             <br/>
             {expDate(props.expirationMonth, props.expirationYear)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             {props.bank}
             <br/>
             {props.owner}
         </div>
    )
}
