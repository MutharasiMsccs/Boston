import {boston} from './boston.js'
var bostondata = boston.data
console.log(bostondata);
var result=""
for(let i=0;i<bostondata.length;i++){
result = result + "<li>"+"<h1>" + bostondata[i][8] +"</h1>" + "<h1>" + bostondata[i][11] + "</h1>"+"</li>"
}

// Add you code

document.getElementById('container').innerHTML = result;