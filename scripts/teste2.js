let randomNumber = Math.round(Math.random() * 10);
const myFunction = () => {
   

   if(randomNumber == 5) {
      console.log(`Random number fsdfsdfdsf ${randomNumber}`);
   } else {
      console.log(`Random number is ${randomNumber}`);
   };
};

export { myFunction, randomNumber };