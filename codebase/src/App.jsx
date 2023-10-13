import { useState } from 'react'

function App() {
  const [ fileName, setFileName ] = useState("");
  const [ jsonArray, setJsonArray ] = useState([]);

  function readFile(event) {
    const fileReader = new FileReader();
    const { files } = event.target;

    setFileName(files[0].name);

    fileReader.readAsText(files[0], "UTF-8");
    fileReader.onload = event => {
      const content = event.target.result;
      if (typeof content === "string") {
        try {
          const json = JSON.parse(content);
          setJsonArray(json);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(typeof content);
      }
    };
  }

  console.log(fileName);
  console.log(jsonArray);

  return (
    <>
      <input type="file" accept='application/JSON' onChange={readFile} />
      <p>{fileName}</p>
    </>
  )
}

export default App
