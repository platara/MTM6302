//Create your HTML
console.log("main js")
//Install bootstrap

//Ceate an array of objects(data structure) to manage store items; use two properties(product, price) in the object; create two products.

const products = [
    {
       productName: 'Hoodie',
       price: 60
    },
    {
        productName: 'Tablet',
        price: 200
    }

]


//print the first product in the console; retrieve the 'productName' property.
console.log(products[0].productName)

// add one extra item to the 'products' array; use a method
products.push(
    {
        productName: 'Laptop',
        price: 2000
    }
    )


//update the price of the 'Hoodie' product to 50.00
products[0].price = 50

//add the property 'size'; use the 'Tablet' product
products[1].size = "Large"

//create an array of strings; every element of the array describe one product
const descriptions = [
    'Description Hoodie',
    'Description Tablet',
    'Description Laptop'
]


//add the property 'description' to all the products(objects); use the 'descriptions' array

for(let i= 0; i < products.length; i++ ){
    products[i].description = descriptions[i]
}

//Delete the property 'size'; use the 'Tablet' product
delete products[1].size

//go back to the object definition and create a method(function), as a parameter, to update the 'price' of a product. Test it in the console.

//Do the same with a regular function
    //1.declare the function; identify the inputs that you need.
    function updatePrice(newPrice, product) {
        //2.find the right product
        const productSelected = products.find(item => item.productName == product )
        //3.assign the new value
        productSelected.price = newPrice
    }
    
      


//display all the products in the 'document'; you can use a bootstrap card, for...of loop, and innnerHTML. 

    //1.define varibles; 'DOM element' and a empty array

    const htmlTemplate = []
    const $list = document.getElementById('container')
    
    //2.define your 'html template'; push 'html code'(template) to the array.
    for (const product of products) {
        htmlTemplate.push(`
        <div class="card my-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${product.price}</h6>
                <p class="card-text">${product.description}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
         </div>`)
    }

    //3.join and insert the complete 'html template'
    $list.innerHTML = htmlTemplate.join('')
 




/*** JavaScript Object methods */
//instead of the cards, display a table with all the products; Reuse the '$list' and 'htmlTemplate'; use the Object methods.

    //1.Clear htmlTemplate
   

    //2.repeat steps 2 and 3 from previous example

