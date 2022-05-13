
let mssg=window.prompt('Enter a sequence of 01');

/*a=[];
for(j=0; j<mssg.length; j++){
    a.push(mssg[j]);
}*/

i= 0; k=0; count=0;
Count=[ ];
while(true){
      if(i >= mssg.length ){
         if(k === 0 && count === 0){
            Count[0] = 0;
         }
         break;
      }

      if(mssg[i] === '0'){
        count++;
        Count[k]=count;
      }
      
      else{
        if(count !==0 && mssg[i] !== '0'){
            k++;
            count=0;
         }
         
       }
      
    i++;
}

function partition(low, high, A){
   let pivot= A[low];
    
    while(low < high){
        
        while(A[high] >= pivot && low < high){
            high--;
        }
        if(low != high){
            A[low] = A[high];
            low++;
        }
        
        while(A[low] < pivot && low < high){
            low++;
        }
        if(low != high){
            A[high] = A[low];
            high--;
        }
    }
    
   A[low] = pivot;
    return high;
}
let quickSort= new Function('first, last, Array', `
if(first < last){
    pivotLoc= partition(first, last, Array);
    quickSort(first, pivotLoc - 1, Array);
    quickSort(pivotLoc + 1, last, Array);
}

`);
/* Another way for quickSort().
function quickSort(first, last, Array){
   //console.log(`first: ${first} last: ${last}`);
if(first < last){
   let pivotLoc= partition(first, last, Array);
   
    console.log(`pivotLoc: ${Number(pivotLoc)}`);
    
    quickSort(first, pivotLoc - 1, Array);
    quickSort(pivotLoc + 1, last, Array);
}
}
*/


quickSort(0, Number(Count.length - 1), Count);

alert(`The longest sequence of 0s length is of length: ${(Count[Count.length - 1])}`);
