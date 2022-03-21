import multer from "multer";
import path from "path";

// const storage = multer.diskStorage({});

// let upload = multer({
//     storage
// })

const imageMulter = multer({
  storage: multer.diskStorage({
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  }),
  fileFilter: (req: any, file: any, cb: any) => {
    let extn = path.extname(file.originalname);

    if (
      extn !== ".jpg" &&
      extn !== ".jpeg" &&
      extn !== ".png" &&
      extn !== ".svg"
    ) {
      cb(new Error("File type is not supported..."), false);
      return;
    }
    cb(null, true);
  },
});

export default imageMulter;
