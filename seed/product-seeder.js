var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser:true},{useUnifiedTopology: true} );

var products = [
    new Product({
        imagePath: 'https://5.imimg.com/data5/UU/DQ/MY-54426657/tata-salt-packet-500x500.png',
        title: 'Tata salt packet',
        description: 'used for making food!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sunflower_oil_and_sunflower.jpg/250px-Sunflower_oil_and_sunflower.jpg',
        title: 'Sunflower oil',
        description: 'good for cooking!',
        price: 15
    }),
    
    new Product({
        imagePath: 'https://www.tradologie.com/lp/img/kohinoor.jpg',
        title: 'Sona Masoori Rice',
        description: 'Awesome product!',
        price: 15
    }),
    new Product({
        imagePath: 'https://www.meatpoultry.com/ext/resources/MPImages/01-2020/011320/MeatPoultryProducts_smaller.jpg?height=635&t=1593200517&width=1200',
        title: 'Meat, seafood, Poultry',
        description: 'best meat',
        price: 60
    }),
    
    new Product({
        imagePath: 'https://maxgrocers.com/image/cache/catalog/category%20img/jam-honey-spread-600x315w.png',
        title: 'Jam pack of 3',
        description: 'hmm yummy jam :p',
        price: 40
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71X3VbxwrmL._SL1500_.jpg',
        title: 'Dry fruits',
        description: 'quality is good',
        price: 23
    })
];



var done = 0;
products.length=6;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect('mongodb://localhost:27017/shopping');
}