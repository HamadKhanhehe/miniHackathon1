import { getAll, save } from "@/services/products";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    const blogs = getAll();
    return res.status(200).json(blogs);
  } else if (req.method === "POST") {
    const {title, content, author} = req.body;
    save(title, content, author);
    return res.status(201).json({});
  }
  return res.status(404).send();
}