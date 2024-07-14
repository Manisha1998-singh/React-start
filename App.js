    // what if we want to create nested structure of html layout then how we create in react....
    // Example.....
    // <div>
    //     <div>
    //         <div>
    //             <h1></h1>
    //         </div>
    //     </div>
    // </div>
    // var heading = React.createElement('div', {id: 'divfirst'},
    //     React.createElement('div', {id: 'divsecond'}, React.createElement('div', {id: 'last'}, React.createElement('h1', {id: 'heading'}, "hii manisha.. this is my first react program"))));
   
    //below code is for creating siblings tags.
    // Example.....
    // <div>
    //     <div>
    //         <div>
    //             <h1></h1>
               //<h2></h2>
    //         </div>
    //     </div>
    // </div>
//var heading = React.createElement('div', {id: 'divfirst'},
    //React.createElement('div', {id: 'divsecond'}, React.createElement('div', {id: 'last'}, [React.createElement('h1', {id: 'heading'}, "hii manisha.. this is my first react program"), React.createElement('h2', {id: 'heading1'}, "hii Anjali.. this is my first react program")] )));

    //below code is for creating two defferent section aur div in react.
    // Example.....
    // <div>
    //     <div>
    //         <div>
    //             <h1></h1>
               //<h2></h2>
    //         </div>
    //     </div>
    // 
    // <div>
    //     <div>
    //         <div>
    //             <h1></h1>
               //<h2></h2>
    //         </div>
    //     </div>
    // </div>
    //</div>
    var heading = React.createElement('div', {id: 'divfirst'},
        React.createElement('div', {id: 'divsecond'}, React.createElement('div', {id: 'last'}, [React.createElement('h1', {id: 'heading'}, "hii manisha.. this is my first react program"), React.createElement('h2', {id: 'heading1'}, "hii Anjali.. this is my first react program")] )),React.createElement('div', {id: 'divfirst'},
            React.createElement('div', {id: 'divsecond'}, React.createElement('div', {id: 'last'}, [React.createElement('h1', {id: 'heading'}, "hii manisha.. this is my first react program"), React.createElement('h2', {id: 'heading1'}, "hii Anjali.. this is my first react program")] ))));
        
    
console.log(heading);
     var root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(heading);
     //below code is for single div.
     //var heading = React.createElement('h1', {id: 'heading'}, "hii manisha.. this is my first react program");
     //below code is for creating siblings tags.