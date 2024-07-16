import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement => object => HtmlElement(render)
// JSX is like html or xml syntax.
// JSX => React.createElement => object => HtmlElement(render)
//React Element

    const jsxheading = ( 
    <h1 className="head" tabIndex="4">
        Manisha Here..........</h1>
        );

//React Functional Component
    const CompHeading = () => (
        <div> <h1 className="heading">First react component</h1></div>
    );
        
    
   // const CompHeading2 = () => <h1>First react component</h1>; //short way of creating arrow function ]in jsx.
    console.log(jsxheading );
     var root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(jsxheading);
    