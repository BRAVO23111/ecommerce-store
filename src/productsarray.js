const productarray = [

    {
        id:1,
        title:'sunglass',
        price:'$3'
    },
    {
        id:2,
        title:'coffee',
        price:'$3'
    },
    {
        id:3,
        title:'hat',
        price:'$3'
    }
]

function getproductsid(id){
    let productdata = productarray.find(products => products.id === id);
    
    if(productdata == undefined){
        console.log("does not exist");
        return undefined;
    }
    return productdata;
}

export {productarray ,getproductsid}