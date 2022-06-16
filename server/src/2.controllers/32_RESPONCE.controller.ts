import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'
import Responce, { IResponce } from '../1.models/8_Responce';
import Book, { IBook } from '../1.models/9_Book';
//createController///////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
    const { idresponce, responce, user } = req.body;
    //console.log(req.body);
    const newDate = { title, description, user, type: 'NOTAS'};
    const data = new Responce(newDate);
    await data.save();
    return res.json({ message: 'Ok create' });
};
//getsController/////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
    const data = await Responce.find();
    return res.json(data);
}
//getupdateController////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await Responce.findById(id);
    return res.json(data);
}
//deleteController///////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);

    const File = await Responce.findByIdAndRemove(id) as IResponce;
    if (File) {
        try {
            await fs.unlink(path.resolve(File.file));
        } catch (err) {
            console.error(err);
        }
    }
    return res.json({ message: 'Ok remove' });
};
//updateController///////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const update = await Responce.findByIdAndUpdate(id, { responce });
    return res.json({
        message: 'Successfully updated'
    });
}
