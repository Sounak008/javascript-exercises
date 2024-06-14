const fibonacci = function(num) {
   let fibo = [0, 1];

   if(num === 0) return 0;
   if(num < 0) return 'OOPS';

   for (let i = 1; i <= Number(num); i++) {
        fibo.push(fibo[i] + fibo[i-1])
   }

   return fibo[Number(num)];
}

// Do not edit below this line
module.exports = fibonacci;
