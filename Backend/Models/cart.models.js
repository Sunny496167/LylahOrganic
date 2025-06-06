const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1
            },
            addedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    }
},{timestamps: true});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;