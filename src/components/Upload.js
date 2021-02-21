import React from 'react';

const Upload = () => {
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


    return (
        <>
        <p>Testing Multer</p>
        <form style = {{border: "2px solid gray"}}
            action="http://localhost:4000/upload" method="post" enctype="multipart/form-data">
            <input type="file" accept="image/*" name="photo"></input>
            <input type="submit" value="upload"></input>
        </form>
        </>
    )
}

export default Upload;