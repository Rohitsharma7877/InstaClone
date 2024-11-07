import multer from "multer";

 const storage = multer.memoryStorage();
 const upload = multer({ storage });

 export default upload;


// import multer from "multer";

// const upload = multer({
//     storage: multer.memoryStorage(),
// }).single("profilePicture"); // Replace "profilePicture" with the actual field name you're sending from the client

// export default upload;


// Set the Correct Field Name in the HTML Form or Client Request: 

{/* <form action="/api/v1/user/editProfile" method="POST" enctype="multipart/form-data">
    <input type="file" name="profilePicture" /> <!-- Name matches the field specified in .single("profilePicture") -->
    <button type="submit">Upload</button>
</form> */}

// Route Configuration:
// import upload from "../middlewares/multer.js"; // Adjust path as needed

// app.post("/api/v1/user/editProfile", upload, (req, res) => {
//     console.log(req.file); // Check if the file is received as expected
//     res.send("File uploaded successfully");
// });
