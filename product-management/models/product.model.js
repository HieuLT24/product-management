const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        price: Number,
        discountPercentage: Number,
        stock: Number,
        thumbnail: String,
        status: String,
        position: Number,
        deleted: Boolean
    }
);
// tạo một model có tên là Product từ schema productSchema. Model này sẽ được liên kết với collection có tên là 'products' trong MongoDB
const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;