const fs = require('fs');
const path = require('path');

const p = path.join(
    // @ts-ignore
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

// @ts-ignore
const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            // @ts-ignore
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    // @ts-ignore
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();
        // @ts-ignore
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    // @ts-ignore
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
    // @ts-ignore
    static findById(id, cb) {
        // @ts-ignore
        getProductsFromFile(prodId, product => {
            // @ts-ignore
            const product = products.find(p => p.id === id);
            cb(products);
        }):
    }

};