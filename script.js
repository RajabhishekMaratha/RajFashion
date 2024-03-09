// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
    
}
if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
    
}

//ga4 script to fetch 
// Select all product elements
var products = document.querySelectorAll('.pro');

// Add a 'click' event listener to each product
products.forEach(function(product) {
    product.addEventListener('click', function() {
        // When a product is clicked, send a custom event to GA4
        gtag('event', 'product_click', {
            'event_category': 'engagement',
            'event_label': this.id,  // Use the product's id as the event label
        });
    });
});
