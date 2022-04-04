import axios from 'axios'
 
let addToCart = document.querySelectorAll('.add-to-cart')
// console.log(addToCart);


function updateCart(pizza) {
    axios.post('/update-cart',pizza).then(res =>{
        // console.log(res)
    })
}


addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let pizza = JSON.parse(btn.dataset.pizza)
        console.log(e)
        updateCart(pizza)
    })
})