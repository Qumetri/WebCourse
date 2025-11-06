const obj = {
    name: "Example",
    
    regularFunction: function() {
        console.log("Regular Function", this.name);

    },
    arrowFunction: () => {
        console.log("Arrow Function", this.name);
    },
}

obj.regularFunction(); // Outputs: Regular Function Example
obj.arrowFunction();   // Outputs: Arrow Function undefined
