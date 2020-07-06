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
                    props.setImg(acceptedFiles[0]),
                ),
            );
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
                <p>Drop Image Here 📁</p>
            </div>
            <div>{images}</div>
            <script>
                {(files) => {
                    props.setImg(files)
                }}
            </script>
        </div>
    )
}

export default DndImage
