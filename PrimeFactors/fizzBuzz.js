function isPrime(num) {
  for ( var i = 2; i < num; i++ ) {
      if ( num % i === 0 ) {
          return false;
      }
  }
  return true;
}

function display(n) {
  let arr = [2];
  for ( var i = 3; i <= n; i+=2 ) {
      if ( isPrime(i) ) {
          arr.push(i);
      }
  }
  //console.log(arr); // use arr result on your own
  return arr;
}

function factorize(n) {
  const primenb = display(n);
  let dogshit = [];
  let bla  = n;
  for (let i = 0; i <= primenb.length; i++)
  {
    if(bla % primenb[i] == 0){
      dogshit.push(primenb[i]);
      bla /= primenb[i];
      i = -1;
    }
  }
  console.log('result here:')
  console.log(dogshit);
  return dogshit;
}



module.exports.display = display;
module.exports.factorize = factorize;

