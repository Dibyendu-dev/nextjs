import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "docs");



export function getDocuments(){
    console.log(postsDirectory);
    const fileNames = fs.readdirSync(postsDirectory);
    const allDocuments =fileNames.map(fileName=>{
        const id = fileName.replace(".md","")
        const fullPath = path.join(postsDirectory,fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
       
    })
}
