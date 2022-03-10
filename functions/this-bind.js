const ReturnNames = function(){
    return this.name;
};

let gabriel = ReturnNames.bind({name: "Gabriel"});

gabriel();