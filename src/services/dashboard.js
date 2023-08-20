import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "src", "data", "blogs.json");

export function getAll () {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getById (id) {
    const data = getAll();
    return data.find(p => p.id === Number(id));
}

export function save (title, content, author) {
    const data = getAll();
    data.push({
        id: data.length + 1,
        title,content, author
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}