import { useState } from "react";
import {InputGroup, FormControl} from 'react-bootstrap';
import Snippet from "./components/Snippet";
import {data} from './data/data.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [snippets, setSnippets] = useState(data);
  const [query, setQuery] = useState("");

  //update query state based on input value
  const handleSearch = (event) => {
      setQuery(event.target.value);
  }
  //map snippet data to component props
  const mapSnippets = (snippet) => {
      return <Snippet key={snippet.id} title={snippet.name} snippet={snippet.snippet}/>
  }

  ///* filter snippets where query matches snippet and return snippets */
  const filterSnippets = (snippets) => {
      return snippets.filter(snippets => snippets.snippet.toLowerCase().indexOf(query.toLowerCase()) > -1).map(mapSnippets);
  }

  return (
      <div className="App">

          <h1 className="text-center">Snippets</h1>

          <div className="col-md-6 mx-auto">
            
            <InputGroup className="mb-3" onChange={handleSearch}>
                <FormControl
                  placeholder="Search code snippets"
                  aria-label="Search code snippets"
                  aria-describedby="Search code snippets"
                />
            </InputGroup>
            
            
            {filterSnippets(snippets)}
          
          </div>
        
      </div>

  )
}

export default App;
