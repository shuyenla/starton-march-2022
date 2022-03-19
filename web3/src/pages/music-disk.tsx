import React, { useState } from "react";
import FileUpload from "../components/file-upload.component";
import { useRouter } from 'next/router'
const { default: axios } = require('axios')
const FormData = require('form-data')

const backend = axios.create({
    baseURL: "http://localhost:3001/",
})


function MusicDisk() {
/*  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });*/

  const router = useRouter()
  const updateUploadedFiles = (files: any) => {

  	console.log("file :", files)

	if (files.length > 0) {
		const musicFile = files[0]

		let data = new FormData();
		data.append('file', musicFile, `music.mp3`);
	
		backend.post('upload', data, {
			maxBodyLength: 'Infinity',
			headers: {
				'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
			}
		})
	}

	router.push('nftGenerated')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".mp3,audio/*"
          label= ""
          updateFilesCb={updateUploadedFiles}
        />
      </form>
    </div>
  );
}

export default MusicDisk
