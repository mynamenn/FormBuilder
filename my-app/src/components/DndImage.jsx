import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import '../style/index.css';

// Passed props: setImg, img
function DndImage(props) {
    const [files, setFiles] = useState([props.img])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            if (acceptedFiles[0].size < 1000000) {
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
            } else {
                window.alert("Please upload an image smaller than 1MB")
            }
        },
    })

    const images = files.map((file) => (
        <div key={file.name}>
            <div>
                {
                    (props.img !== "") ?
                        <img src={props.img} style={{ width: "600px", height: "150px", background: "transparent" }} alt="preview" /> :
                        null
                }
            </div>
        </div>
    ))



    return (
        <div id="DropFilesHere">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p id="dropImageTitle">Drop Image Here &ensp;
                <img src={folderIcon}
                        width="20" height="20" />
                    <p id="imageDetails">Image should be cropped to 600x150
                    </p>
                </p>

            </div>
            <div>{images}</div>
        </div>
    )
}

export default DndImage

const folderIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAACFUlEQVRoge2ZvUojURhAjxpxi93GFREsthQWlbyAj+BaqCBYiOBWGxXfQCwsthAL01lvuyB2NoKIf6CiRXoLZVlFMBEMMavFRNhMcu/9bpK5M4lz4CsGZoZzuPPDMBATExPzXugCFoBDIAe8CCdXOma+dI5I0A+cI49QzVnpXKHSRWNi/o8KdaUWqkjVOymnBT6OFFL1zIHTAh9ZhVQ9k3Va4KPRMY2amp+eYYtLxurpGbasTZRxpdql1REgCXw37dRMQQDTph3a8JazWcgBn3Q7NNsKfaT8vnoCMsAKpdBmWyEdGWCklYIA0q0WdAX274N/wCYwSPj3YC+ez5vbA9jFFIEp19Yaxqh8+VoFbThX1vObcr9VsAsacq6s5jOQp4qfNObYubKeRRR+0qAfbn2NnKLwk8TkgR63vloGUfhJH7vbwG0garUx69su85Os0DcnmjISwA0aP1PMH6DTna+RUTR+kkvuF1AIRK02ZnzbFX6mFUoG7yimG++TQeuni7l0ZSokhcBPF7TkRFPOCQI/VUwB6HOiKeMrQj9V0JYTTTk/EfqpgsaDdxSTAK4R+lWLuSNCP6+ASSz87qkMSgfvKCYJ/MXCb5/KoIlgHUV8AZaBR8rdisCw7sA51PdRFMd49SSAvQiISmYH+GAKAu9zdjcCwqp5BtaxfFB14F1+ewTzV892csAFsAYM2ITExMTEtC6vjraT/6FEioYAAAAASUVORK5CYII=";