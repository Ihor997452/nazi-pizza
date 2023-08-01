import { model, models, Schema } from 'mongoose';

const OrderSchema = new Schema(
    {
        items: [
            {
                _id: String,
                option: String,
                amount: Number,
                name: String,
                imgUrl: String,
                unitPrice: Number,
                totalPrice: Number,
            },
        ],
        total: Number,
    },
    { timestamps: true },
);

export const OrderModel = models.order || model('order', OrderSchema);
