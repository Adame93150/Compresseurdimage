import { useState } from "react";
import { Container, Grid, Image, Item, } from "semantic-ui-react";
import imageCompression from "browser-image-compression";
import { MDBBtn } from 'mdb-react-ui-kit';



function Compresseur() {

  const [origImage, setOrigImage] = useState("");

  const [origImageFile, setOrigImageFile] = useState("");

  const [compressedImage, setCompressedImage] = useState("");

  const [fileName, setFileName] = useState("");



  const handle = (e) => {

    const imageFile = e.target.files[0];
    

    setOrigImage(imageFile);

    setOrigImageFile(URL.createObjectURL(imageFile));

    setFileName(imageFile.name);


  };



  const handleCompressImage = (e) => {

    e.preventDefault();


    const options = {

      maxSizeMB: 1,

      maxWidthOrHeight: 500,

      useWebWorker: true,

    };



    if (options.maxSizeMB >= origImage / 1024) {

      alert("Image is too small, cant be compressed");

      return 0;

    }
          


    let output;

    imageCompression(origImage, options).then((x) => {

      output = x;



      const downloadLink = URL.createObjectURL(output);

      setCompressedImage(downloadLink);

    });

  };
 


  return (
    

    <div className="Compresseur">

      <h1></h1>

      <Container className="conteneur">

        <Grid>

          <Grid.Column  width={6}>

            <Item className="imgup">

              {origImageFile ? (

                <Image src={origImageFile}></Image>

              ) : (

                <Image src=""></Image>

              )}

            </Item>

          </Grid.Column>

          <Grid.Column width={4}>

            <input

              type="file"

              accept="image/*"

              className="mt-2 btn btn-dark w-75"

              onChange={(e) => handle(e)}

            />

            <h1></h1>

            {origImageFile && (
                
                <MDBBtn

                primary

                onClick={(e) => {

                  handleCompressImage(e);

                }}

              >

                {" "}

                Compress Image

                </MDBBtn>

            )}

            <h1></h1>

            

          </Grid.Column>

          <Grid.Column   width={6}>

            <Item className="imgup">

              {compressedImage ? (

                <Image src={compressedImage}></Image>

              ) : (

                <Image src=""></Image>

              )}

            </Item>

          </Grid.Column>

          {compressedImage && (

            <MDBBtn>

                <a href={compressedImage} download={fileName}>

                  {" "}

                  Download Image

                </a> 
 
              </MDBBtn> 
 
            )} 
 
 
 
 
        </Grid>

      </Container>

    </div>

  );

  

}



export default Compresseur;