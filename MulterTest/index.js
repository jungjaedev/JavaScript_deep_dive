const express = require('express');
const app = express();
const { upload } = require('./upload);

app.post('/upload', upload.single('img'), (req,res) => {
	//파일 하나만 업로드 할 때. ex) { img: File }
	console.log(req.file)
}

