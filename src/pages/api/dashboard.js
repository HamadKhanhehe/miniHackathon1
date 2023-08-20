import { save } from "@/services/dashboard";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    const dashboard = getAll();
    return res.status(200).json(dashboard);
  } else if (req.method === "POST") {
    const { title, content, author } = req.body;
    save(title, content, author);
    return res.status(201).json({});
  }
  return res.status(404).send();
}

// export function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(404).send()
//   }
//   const { title, content, author } = req.body;
//   try {
//     save(title, content, author);
//     res.status(201).send();
//   } catch (error) {
//     res.status(400).json({ message: err })
//   }
// }