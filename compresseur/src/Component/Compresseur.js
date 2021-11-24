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
    
  // Taille image
    setOrigImage(imageFile);
  // Url de l'image
    setOrigImageFile(URL.createObjectURL(imageFile));
  // nom de l'image
    setFileName(imageFile.name);


  };



  const handleCompressImage = (e) => {

    e.preventDefault();


    const options = {
      //configuration de la compression 
      maxSizeMB: 1,

      maxWidthOrHeight: 500,

      useWebWorker: true,

    };


//Condition qui permet de verifier le poids de l'image, si l'image voulant etre compresse est plus grande ou egale au poids de l'image autorisé
//elle affiche une allerte
    if (options.maxSizeMB >= origImage / 1024) {

      alert("Image is too small, cant be compressed");

      return 0;

    }
          


    let output;

    imageCompression(origImage, options).then((x) => {
    //la variable 'x' est le resultat de la compression de l'image
      output = x;


      //permet de generer le lien afin de pouvoir la telecharger 
      const downloadLink = URL.createObjectURL(output);
      
      setCompressedImage(downloadLink);

    });

  };
 


  return (
    

    <div className="Compresseur">

      <h1>.</h1>

      <Container className="conteneur">

        <Grid>

          <Grid.Column  width={6}>

            <Item className="imgup">

              {origImageFile ? (

                <Image  id="imgSize1" src={origImageFile}></Image>

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

            <h1>.</h1>

            {origImageFile && (
                
                <MDBBtn

                primary

                onClick={(e) => {

                  handleCompressImage(e);
                   //poids image  
                   setTimeout(myImg, 1500);
                   function myImg(){
                    let myImg = document.querySelector("#imgSize");
                    let myImg1 = document.querySelector("#imgSize1");
                    let resultSize ;
                    let resultSize1 ;
                    console.log('taille src:'+myImg);
                    let realWidth = myImg.naturalWidth;
                    let realHeight = myImg.naturalHeight;
                    let realWidth1 = myImg1.naturalWidth;
                    let realHeight1 = myImg1.naturalHeight;
                    resultSize = parseInt( (((realWidth * realHeight) * 1 ) / 1024) );
                    resultSize1 = parseInt( (((realWidth1 * realHeight1) * 1 ) / 1024) );
                    console.log(' resultSize:'+resultSize);
                    console.log(' resultSize 1:'+resultSize1);
                    let Pourcentage = parseInt( (resultSize * 100) / resultSize1 );
                    Pourcentage = 100 - Pourcentage;
                    var p = document.createElement("p");
                    p.style.color = "black";
                    p.style.width = "78%";
                    p.style.margin ="-170px auto  0 auto";
                    p.style.fontSize =" 32px";
                    p.style.backgroundColor ="rgba(255,255,255,0.3)";
                    p.style.textAlign ="center";
                    p.style.border = " 0.4px solid white";
                    p.style.padding = "3px";
                    p.style.borderRadius = "7px";
                    const texte= " width=" + realWidth + 'px,' + " height=" + realHeight + " px | Taux de compression= "+ Pourcentage +" %";
                    p.innerHTML = texte;
                    document.body.appendChild(p);
                   }       
                  
                  
                              // alert("Original width=" + realWidth + ", " + "Original height=" + realHeight+ "Original size="+resultSize );

                }}

              >

                {" "}

                Compress Image

                </MDBBtn>

            )}

            <h1>.</h1>

            

          </Grid.Column>

          <Grid.Column   width={6}>

            <Item className="imgup">

              {compressedImage ? (

                <Image id="imgSize" src={compressedImage}></Image>

              ) : (

                <Image src=""></Image>

              )}

            </Item>

          </Grid.Column>

          {compressedImage && (

            <MDBBtn>
              
                <a className="Blanc" href={compressedImage} download={fileName}>

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