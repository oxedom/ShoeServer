const { resolve } = require('path/posix')
const Shoe = require('./shoeModel')

const getAllShoes = () => {
    return new Promise((resolve,reject) => {

        Shoe.find({}, (err, data) => {
            if(err) { reject(err)}
            else { resolve (data); console.log(data)}
        })
    })
}

const getOneShoe = (id) => {
    return new Promise((resolve,reject) => {

        Shoe.findById(id, (err, data) => {
            if(err) { reject(err)}
            else { resolve (data); console.log(data)}
        })
    })
}

const addAShoe = (shoeObj) => 
{
return new Promise( (resolve,reject) => 
{
    let newShoe = new Shoe()
    newShoe.name = shoeObj.name
    newShoe.price = shoeObj.price
    newShoe.colors = shoeObj.colors

    newShoe.save( (err) => {
        if(err) { reject(err)}
        else { resolve('Added mate')}
    })
})

}

const updateAShoe = (id, shoeObj) => 
{
return new Promise((resolve, reject) => {
    
    Shoe.findByIdAndUpdate(id, shoeObj, (err) => 
    {
        if(err) { reject (err)}
        else { resolve('Updated mate')}
    })
})



}
     
const deleteShoe = (id) => 
{
return new Promise((resolve, reject) => {
    
    Shoe.findOneAndDelete( id, (err) => 
    {
        if(err) { reject (err)}
        else { resolve('Deleted mate')}
    })
})
}


module.exports = { getAllShoes, addAShoe, updateAShoe, getOneShoe, deleteShoe}