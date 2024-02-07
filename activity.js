let x=[0,0,1,2,1,3,3,5,5]//gets2
let y=[1,1,1,2,2,3,3,4,4,9]//gets9




for(let i=0; i<x.length; i++){
    let duplicate=false
    for(let j=0; j<x.length; j++){
        if(i!=j && x[i]==x[j]){
            duplicate=true
            break;
        }
    }
    if(!duplicate){
    console.log(x[i])
    break;}
}

for(let i=0; i<y.length; i++){
    let duplicate=false
    for(let j=0; j<y.length; j++){
        if(i!=j && y[i]==y[j]){
            duplicate=true
            break;
        }
    }
    if(!duplicate){
    console.log(y[i])
    break;}
}