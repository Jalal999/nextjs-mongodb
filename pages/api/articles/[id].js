import { articles } from '../../../data';
import dbConnect from '../../../util/mongo';
import Article from '../../../models/Article';

export default async function handler(req,res) {
    const { method, query: { id } } = req;

    dbConnect();

    if(method === "GET") {
        try{
            const article = await Article.findById(id)
            res.status(200).json(article)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "PUT") {
        try{
            const article = await Article.findOneAndUpdate(req.body)
            // article.title = req.body.title
            // article.description = req.body.description
            // await article.save
            res.status(201).json(article)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "DELETE") {
      try{
          await Article.findByIdAndDelete(id)
          res.status(201).json("The article is deleted...")
      }catch(err){
          res.status(500).json(err)
      }
  }



    res.status(200).json(articles)
}