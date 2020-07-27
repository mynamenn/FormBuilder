import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import '../style/index.css';

function DndImage(props) {
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>

                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    }),
                ),
            );
            var fileToLoad = acceptedFiles[0];
            var fileReader = new FileReader();

            fileReader.onload = function (fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64
                var newImage = document.createElement('img');
                newImage.src = srcData;
                // newImage.outerHTML is the image
                props.setImg(newImage.src);
            }
            fileReader.readAsDataURL(fileToLoad);
        },
    })

    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{ width: "600px", height: "150px", background: "transparent" }} alt="preview" />
            </div>
        </div>
    ))



    return (
        <div id="DropFilesHere">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p id="dropImageTitle">Drop Image Here 📁</p>
            </div>
            <div>{images}</div>
        </div>
    )
}

export default DndImage
