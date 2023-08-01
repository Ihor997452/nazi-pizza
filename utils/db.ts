import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect(
        'mongodb+srv://root:root@nazi-pizza.cadj5t9.mongodb.net/?retryWrites=true&w=majority',
    );
};
