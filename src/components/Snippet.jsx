import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

function Snippet({title, snippet}) {
 
    return (
          
      <SyntaxHighlighter className="snippet" language="javascript" style={materialDark}>
          {snippet}
      </SyntaxHighlighter>
 
    )
     
}
  
  export default Snippet