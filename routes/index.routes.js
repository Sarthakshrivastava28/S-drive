import express from "express";
import fs from "fs";
import imagekit from "../config/imagekit.js";
import multer from "multer";
import { File } from "../models/files.models.js";
import auth from "../middlewares/auth.js";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/home", auth, async(req, res) => {
    console.log(req.user)

    const userfiles= await File.find({
        user:req.user.userId
    })
    console.log(userfiles)
  res.render("home",{
    files:userfiles,
  });
});

// to upload the files

router.post("/upload-file", auth, upload.single("file"), async (req, res) => {
  const newfile = await File.create({
    path: req.file.path,
    originalName: req.file.originalname,
    user: req.user.userId,
  });

  const file = req.file;
  imagekit.upload(
    {
      file: fs.createReadStream(file.path), // Read the uploaded file
      fileName: file.originalname, // Use the original file name
    },
    (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Error uploading file" });
      }
      return res.json({
        file: newfile,
        imagekit: result,
      });
    }
  );
});

// to see the uploades files in json format
router.get("/files", (req, res) => {
  imagekit.listFiles({}, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Error fetching files" });
    }
    res.json(result); // Return the list of files
  });
});


router.get('/download/:path',auth,async(req,res)=>{

    const loggedInUserID=req.user.userId
    const path = req.params.path;

    const file = await File.findOne({
        user:loggedInUserID,
        path:path
    })

    if(!file){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }
    
    


})
export default router;
