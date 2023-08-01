import { NextRequest, NextResponse } from 'next/server';
import { connect } from '../../../utils/db';
import { PizzaModel } from '@/models/Pizza';

export const GET = async (request: NextRequest) => {
    await connect();
    const pizzas = await PizzaModel.find();

    return new NextResponse(JSON.stringify(pizzas));
};
