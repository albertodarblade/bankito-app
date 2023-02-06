import dbConnect from "@/libs/dbConnect";
import { IWalletSumary } from "@/types";
import WalletsModel from '@/models/Wallets';
import { NextApiRequest, NextApiResponse } from "next";
const url = require("url");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const wallets = await WalletsModel.getAllWallets();
        res.status(200).json(wallets);
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "POST":
      try {
        const sale = {}
        res.status(200).json({ success: true, data: sale });
      } catch (error) {
        res.status(500).json({ success: false, error });
      }
      break;
    case "DELETE":
      try {
        const sale = {}
        res.status(200).json({ success: true, data: sale });
      } catch (error) {
        res.status(500).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
