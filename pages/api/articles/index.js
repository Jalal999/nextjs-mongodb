import { articles } from '../../../data';
import dbConnect from '../../../util/mongo';
import Article from '../../../models/Article';

export default async function handler(req,res) {
    const { method } = req;

    dbConnect();

    if(method === "GET") {
        try{
            const articles = await Article.find()
            res.status(200).json(articles)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "POST") {
        try{
            const product = await Article.create(req.body)
            res.status(201).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }


    res.status(200).json(articles)
}