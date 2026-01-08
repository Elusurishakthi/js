let sample={sample1:1,
    sample2:2,sample3:3,sample4:4,sample5:5};
function add(a,b){
    return a+b;
}
for(let i=0;i<sample.length;i++){
    console.log(add(sample[i],sample[i+1]));
}
console.log("Basic JavaScript file executed.")
