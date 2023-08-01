import { model, models, Schema } from 'mongoose';

const PizzaSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },

        options: [{ name: String, price: Number }],
    },
    { timestamps: true },
);

export const PizzaModel = models.pizza || model('pizza', PizzaSchema);
