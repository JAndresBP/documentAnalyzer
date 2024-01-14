import { createSignal } from 'solid-js';
import './FileUploader.css'
import { uploadFile } from '../services/fileManager.js'
  
function FileUploader(){
    const handleDropEvent = async (event) => {
        event.preventDefault();
        let file = event.dataTransfer.files[0];
        await uploadFile(file);
    }

    return(
        <div class="file-uploader" onDragOver={(e) => e.preventDefault()} onDrop={handleDropEvent}>
            Drop files here !!!
        </div>
    )
}

export default FileUploader