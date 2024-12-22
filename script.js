function numbers(...values){
    
    values.sort((a, b) => a - b);
    return console.log(values);
}
numbers(9,7,5,4,8,6,2,3,1,0,50,90,21,36,71);