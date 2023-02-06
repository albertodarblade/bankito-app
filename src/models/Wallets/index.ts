import { WalletModel } from './model';
const Wallet = {
    async getAllWallets() {
        const wallets = await WalletModel.find().lean();
        return wallets;
    }
}

export default Wallet;