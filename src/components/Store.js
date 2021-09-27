import React, {useState} from 'react'
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];


function Store() {

    const [view, setView] = useState('view_list')

    function switchView(event) {
        const view = event.currentTarget.textContent
        const icon = (view === 'view_list') ? 'view_module' : 'view_list' 
        setView(icon)
    }

    const componentView = (view === 'view_list') ? <CardsView products={products}/> : <ListView products={products}/> 

    return (
        <div className="container">
            <IconSwitch icon={view} onSwitch={switchView}/>
            {componentView}            
        </div>
    )
}


export default Store

