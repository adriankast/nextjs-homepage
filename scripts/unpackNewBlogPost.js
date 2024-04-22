const decompress = require( "decompress" );
const fs = require( "fs" )
const blogAssetDir = "./public/assets/blog"

const zips = fs.readdirSync( "./newPost" );

zips.forEach( zipName =>
{
  const zipLocation = `./newPost/${ zipName }`

  decompress( zipLocation, "./newPost/" )
    .then( ( files ) =>
    {
      // console.log(files);
      const [ markdown ] = files.filter( file => file.path.endsWith( ".md" ) );

      const markdownLocation = `./newPost/${ markdown.path }`
      const unzipFolder = markdownLocation.slice( 0, -3 )
      const newFileName = markdown.path.split( " " ).slice( 0, -1 ).join( "-" ).replace( /[^\w\-]/gi, "" ).toLowerCase()
      const newFilePath = `./_posts/${ newFileName }.md`
      fs.copyFileSync( markdownLocation, newFilePath );
      removeMarkdownTitle(newFilePath)

      const imageFiles = fs.readdirSync( unzipFolder ).filter( fname => ( fname.endsWith( ".svg" ) || fname.endsWith( ".png" ) || fname.endsWith( ".jpeg" ) || fname.endsWith( ".jpg" ) ) )
      const targetDir = `${ blogAssetDir }/${ newFileName }`
      fs.mkdirSync( targetDir )
      imageFiles.forEach( fname =>
      {
        const fpath = `${ unzipFolder }/${ fname }`;
        fs.copyFileSync( fpath, `${ targetDir }/${ fname }` )
        fs.rmSync( fpath )
      } )


      fs.rmdirSync( unzipFolder )
      fs.rmSync( markdownLocation )
      fs.rmSync( zipLocation )
    } )
    .catch( ( error ) =>
    {
      console.log( error );
    } );
} )

function removeMarkdownTitle(filename) {

  post = fs.readFileSync(filename);
  postByLine = post.toString().split("\n")

  firstSeparator = postByLine.findIndex(line => line === "---");
  if (firstSeparator === -1) {
      throw new Error("the meta information is missing in the post")
  }
  cutPost = postByLine.slice(firstSeparator);

  fs.writeFileSync(filename, cutPost.join("\n"))
}
