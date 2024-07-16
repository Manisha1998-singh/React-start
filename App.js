import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement => object => HtmlElement(render)
// JSX is like html or xml syntax.
// JSX => React.createElement => object => HtmlElement(render)
//React Element
    const jsxheading =( <h1 className="head" tabIndex="4">Manisha Here..........</h1>) ;
    console.log(jsxheading );
     var root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(jsxheading);
    