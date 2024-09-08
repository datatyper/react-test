import reactLogo from '/react.svg';
import MarkdownRenderer from './components/MarkdownRenderer';
import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [selectedFile, setSelectedFile] = useState('');


  const markdownFiles = ['markdown.md', 'post1.md', 'post2.md', 'post3.md'];

  return (
    <>

      {/* Header */}
      <div className="header">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <h1>React App</h1>
      </div>

      {/* Selector */}
      <div className="selector">
        <h1>Markdown Files</h1>
        <ul>
          {markdownFiles.map((file) => (
            <button onClick={() => setSelectedFile(`/posts/${file}`)} key={file}>
              {file}
            </button>
          ))}
        </ul>
      </div>

      {/* Content */}


      <div className="content">
        {(selectedFile) ? <MarkdownRenderer file={selectedFile} /> : <h2>Select file to view</h2>}
      </div>


      <div className="footer">
        CopyRight {new Date().getFullYear()}
      </div>
    </>
  );
}

export default App;