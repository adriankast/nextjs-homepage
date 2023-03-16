const decompress = require("decompress");
const fs = require("fs")

const zips = fs.readdirSync("./newPost");
console.log(zips);

zips.forEach(zipName => {
    const zipLocation = `./newPost/${zipName}`

decompress(zipLocation, "./newPost/")
  .then((files) => {
    console.log(files);
    const [markdown] = files.filter(file => file.path.endsWith(".md"));
    const markdownLocation = `./newPost/${markdown.path}`
    
    fs.copyFileSync(markdownLocation,`./_posts/${markdown.path}`);
    fs.rmSync(markdownLocation)
    fs.rmSync(zipLocation)
  })
  .catch((error) => {
    console.log(error);
  });  
})
