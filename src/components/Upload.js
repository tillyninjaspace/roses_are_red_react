import React from 'react';

const Upload = (props) => {

    // const [upload, setUpload] = useState('')

    // const handleSubmission = () => {
    // fetch(
    //     `http://localhost:4000/upload`,
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({upload}),
    //     }
    //   )
    //     .then((response) => response.json())
    //     .then((result) => {
    //       console.log('Success:', result);
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // };

    // console.log("What's upload", upload)

    //Take 2
    const {selectedFile, setSelectedFile} = props
 

    const handleSubmission = () => {
        fetch(
            `http://localhost:4000/api/post`,
            {
              method: 'POST',
              body: JSON.stringify({upload}),
            }
          )
            .then((response) => response.json())
            .then((result) => {
              console.log('Success:', result);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        };

        console.log("Selected file in UPLOAD", selectedFile)

    return (
        <>
        <p>Testing Multer</p>
        <form style = {{border: "2px solid gray"}}
        // onSubmit={{handleSubmission}}
        // action="http://localhost:4000/api/post"
            // action="http://localhost:4000/upload" 
            // action="https://roses-are-red.herokuapp.com/upload"
            method="post" enctype="multipart/form-data">
                
            <input type="file" accept="image/*" name="photo"></input>
            <input type="submit" value="selectedFile"></input>
        </form>
        </>
    )
}

export default Upload;