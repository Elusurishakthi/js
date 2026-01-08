let sample=[1,2,3,4,5];
function add(a,b){
    return a+b;
}
for(let i=0;i<sample.length;i++){
    console.log(add(sample[i],sample[i+1]));
}
console.log("Basic JavaScript file executed.")
