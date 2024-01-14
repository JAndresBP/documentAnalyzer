import { createSignal } from 'solid-js'
import FileUploader from './components/FileUploader'
import './App.css'

function App() {
  const [showDropZone, toggleShowDropZone] = createSignal(false)
  return (
    <>
    {/* <div class="chat"></div>
    <div class='overlay'>
    {showDropZone() &&  <FileUploader>
      </FileUploader>}
    </div> */}
          <FileUploader>
      </FileUploader>
    </>
  )
}

export default App
