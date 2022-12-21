function Myfuction(){
  let array=[10,1,2,3,30,40,50,60,70,80,90,100];
  let minArray=array[0];
  for( i=0; i<array.length;i++){
    if(array[i]<=minArray){
      minArray=array[i];
    }
  }

  console.log(minArray)

}

Myfuction();