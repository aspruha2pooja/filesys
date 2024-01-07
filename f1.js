const fs= require ("fs");

fs.writeFile("customer_data.txt","DETAILS OF CUSTOMER",(err)=>{
    if(err){
        console.log("error occurred");
    }else{
        console.log("file created");

    }
});