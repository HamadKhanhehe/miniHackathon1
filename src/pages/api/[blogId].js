// import { getById } from "@/services/products";

import { getById } from "@/services/blog";


export default function handler(req, res) {
    if (req.method === "GET") {
        const { blogId } = req.query;
        // console.log(typeof blogId);
        const blog = getById(blogId);
        return res.status(200).json(blog);
    }
    return res.status(404).send();
}