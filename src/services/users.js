import fs from 'fs';
import { compare, hash } from 'bcryptjs'
import path from 'path';

const filePath = path.join(process.cwd(), "src", "data", "users.json");

export function getAll() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

export function getByEmail(email) {
    const data = getAll();
    return data.find(p => p.email.toLowerCase() === email.toLowerCase());
}

export async function verifyPassword(hashedPassword, password) {
    const isValid = await compare(password, hashedPassword);
return isValid;
}



export async function save(email, password) {
    const found = getByEmail(email);
    if (found) {
        throw new Error("User already exist");
    }
    const data = getAll();
    const hashedPassword = await hash(password, 12);
    data.push({
        email,
         password: hashedPassword
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
}