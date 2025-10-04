
import fs from "fs/promises";

async function readConfig() {
    const config = (await fs.readFile("./.git/config")).toString();
    const lineas = config.split("\n").map((line) => line.trim())
    const url = lineas.find((line) => line.startsWith("url"))
    console.log(url)
    if (!url)
        throw ("error")
    const url2 = url?.split("=")[1].trim().split("/")
    .filter((part) => ![ "github.com", "https:", ""].includes(part))
    if (!url2)
        throw ("error")
    console.log(url2)
    const usuario = encodeURIComponent(url2.slice(-2, -1).toString())
    const repo = encodeURIComponent(url2.slice( -1).toString())

    return { usuario, repo }
}
const {usuario, repo} = await readConfig()
const formData = new FormData();
const texto = (await fs.readFile("outfile.txt")).toString();

const resultado =texto.split("\n").slice(-5, -3).join("\n")
const r1 = resultado.split("\n").map((linea) => linea.split(" ")[1]);
const outfile = await fs.readFile("outfile.txt")
formData.append("file",   outfile.toString());
const test =  await fs.readFile("app.test.js")
formData.append("test", test.toString());

const url = `https://log-test-bay.vercel.app/api/log?user=${usuario}&repo=${repo}&pass=${r1[0]}&fail=${r1[1]}`
console.log(url)
const r = await fetch(url, {
    method: "POST",
    body: formData
})
const text = await r.text();





