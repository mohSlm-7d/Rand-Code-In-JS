let sum  = prompt(`Enter The sum: `);
  let count= prompt(`Enter the Count: `);
  let temp= sum;
  let avg=0;
  while(temp >= count){
    temp-= count;
    ++avg;
  }
  
  console.log(`THe Avg is ${avg}`);
  
  alert(`The Avg is ${avg}`);
