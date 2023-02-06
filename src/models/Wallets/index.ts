import { IUser } from '@/types';
import { WalletModel } from './model';
const Wallet = {
    async getAllWallets(user: IUser) {
        console.log(user, 'getting for this user')
        const wallets = await WalletModel.find().lean();
        return wallets;
    }
}

export default Wallet;