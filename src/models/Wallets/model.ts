import { IRecord, IWallet } from '@/types';
import { Schema, model, models } from 'mongoose';

const Record = new Schema<IRecord>({
    amount: Number,
    type: String,
    date: Date,
    label: String,
    description: String,
    ownerId: String
})


const WalletSchema = new Schema<IWallet>({
    name: String,
    balance: Number,
    owners: [{
        email: String,
        avatar: String,
        name: String
    }],
    records: [Record]
});

// TODO change this to products on both sides
export const WalletModel = models.Wallets || model<IWallet>("Wallets", WalletSchema);
