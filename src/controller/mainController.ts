import { Response } from 'express';

const resSend = (res: Response, error: boolean, data: any, message: string) => {
    res.send({ error, data, message });
}

const allPartsDb = require("../schemas/partSchema")

module.exports = {

    getAllParts: async (req:any,res:any) => {
        const parts = await  allPartsDb.find()
        resSend(res, false, {parts}, "")
    },

    postAddPart:async (req:any, res:any) => {
        const newPart = new allPartsDb(req.body);
        try {
            await newPart.save();
            resSend(res, false, { newPart }, "Part added successfully");
        } catch (error) {
            resSend(res, true, null, "Failed to add part");
        }
    }
}