import { NextRequest, NextResponse } from 'next/server';
import { connect } from '../../../utils/db';
import { OrderModel } from '@/models/Order';

export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const newOrder = new OrderModel(body);

    await connect();
    await newOrder.save();

    return new NextResponse('fine');
};
