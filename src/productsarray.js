    const productarray = [

        {
            id: 'price_1ORrbZSEmwWryMmmA3zt7NxM',
            title:'sunglass',
            price:3
        },
        {
            id:'price_1ORrm5SEmwWryMmm4KWuL9Bx',
            title:'coffee',
            price:3
        },
        {
            id:'price_1ORrmySEmwWryMmmkuQC6biX',
            title:'hat',
            price:3
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