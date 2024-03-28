import React, { useState } from "react";

export default function App() {
  const [files, setFiles] = useState([]);

  function handleChange(index, e) {
    const newFiles = [...files];
    newFiles[index] = URL.createObjectURL(e.target.files[0]);
    setFiles(newFiles);
  }

  function handleAddField() {
    setFiles([...files, null]); // Add a new null value to the end of the array
  }

  return (
    <div className="App">
      {files.map((file, index) => (
        <div key={index}>
          <h2>Add Image {index + 1}:</h2>
          <input type="file" onChange={(e) => handleChange(index, e)} />

          {file ? (
            <div>
              <img src={file} alt={`Preview ${index + 1}`} />
              <p>Upload Success</p>
            </div>
          ) : (
            "images hasn't uploaded yet"
          )}
        </div>
      ))}
      <button onClick={handleAddField}>Add More Images</button>
    </div>
  );
}
