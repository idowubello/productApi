const myProduct =['','','','','','','','','','','','','','','','','','','','',]



const data ='https://fakestoreapi.com/products'
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data =>{
    data.forEach( data=>{
        main.innerHTML += '<div class="detail" ><div class="img"><img src="' + element.image
        + '" alt=""></div><div class="name">' + element.title + '</div><div class="price">$' + element.price + '</div><div class="description">' + element.description.slice(0,100)+'...</div></div ></div>';
    
    

    }

    )
   
})

.catch(error => {
    console.error("Error;",error)
})

 data()