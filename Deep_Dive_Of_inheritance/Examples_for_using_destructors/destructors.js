//jshint esnext:true


//acessing value through array with destructor
let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];

let [a] = widgets;

 console.log(a);

//accessing value from object with destructor and also renames the varible
let toybox = { item1: 'car', item2: 'ball', item3: 'frisbee' };

let {sportscar:sport, item3} = toybox;

console.log(item1);


//Sets the default params to a object
//Then acesses them through a destructor
function getData({url='testurlkey' , method = 'post'} = {}, callback) {
  
  callback(url, method);
}
//Sets the value to undefined since we set both values to default
getData(undefined,function (url, method) {
  console.log( url, method);
});

//sets the two values of the object and acesses them through 
//the destructors
getData({ url: 'myputurl.com', method: 'put' }, function (url, method) {
 console.log(url, method);
});


//Uses renaming variable to acess the nested child title 
//to gain acess with the destructor
let parentObject = {
  title: 'Super Important',
  childObject: {
    title: 'Equally Important'
  }
}

let {title,childObject: { title: childTitle } } = parentObject

console.log(title,childTitle);




