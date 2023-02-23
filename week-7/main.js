console.log("Js file")
//Create your HTML
//Install bootstrap
//Ceate an array of objects(data structure) to manage store items; use two properties(product, price) in the object; create two products.
const products = [
    {
        product: "Hoodie",
        price: 60
    },
    {
        product: "Tablet",
        price: 1000
    }
]

// print the first product in the console; retrieve the 'product' property.
console.log( products[0].product )

// add one extra item to the 'products' array; use a method
products.push(
    {
        product: "Laptop",
        price: 2000
    }
)

//update the price of the 'Hoodie' product to 50.00
products[0].price = 50.00

//add the property 'size'; use the 'Tablet' product
products[1].size = "L"

//create an array of strings; on every element of the array describe one product
const descriptions = [
    'description 1...',
    'description 2...',
     'description 3...'
    ]

//add the property 'description' to all the products(objects); use the 'description' array

for(let i = 0; i < products.length; i++ ){
    products[i].description = descriptions[i]
}


//Delete the property 'size'; use the 'Tablet' product
delete products[1].size

//go back to the object definition and create a method(function), as a parameter, to update the 'price' of a product. Test it in the console.

//Do the same with a regular function
    //1.declare the function; identify the inputs that you need.
    function updatePrice(newPrice, prod) {
        //2.find the right product
        const selectedProduct = products.find(item => item.product == prod)
        //3.assign the new value
        selectedProduct.price = newPrice
    }



//display all the products in the 'document'; you can use a bootstrap card, for...of loop, and innnerHTML. 

    //1.define varibles; 'DOM element' and a empty array
    const items = []
    const $list = document.getElementById('container')

    //2.define your 'html template'; push 'html code'(template) to the array.

    for (const currtentProduct of products) {
    items.push(`
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${currtentProduct.product}</h5>
            <p class="card-text">${currtentProduct.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `)
    }
    
    //3.join and insert the complete 'html template'
    $list.innerHTML = items.join('')




/*** JavaScript Object methods */
//instead of the cards, display a table with all the products; Reuse the '$body' and 'htmlTemplate'; use the Object methods.

    //1.Clear htmlTemplate

    //2.repeat steps 2 and 3 from previous example

