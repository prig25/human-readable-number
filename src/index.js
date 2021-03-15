module.exports = function toReadable (number) {
  let one = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let dec = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let i;
  let j;
  let k;
  let n;
  if (String(number).length==1) return one[number];
  if (String(number).length==2) {
    i=Math.floor(number/10);
    j=number%10;
      if (number<20) {
          return one[number];
      }
      if (j!=0) {          
        return dec[i] + " " + one[j];
      } else {
        return dec[i];
      }
  }
  if (String(number).length==3) {
      i=Math.floor(number/100);
      j=number%100;
      if (j!=0) {
          k=Math.floor(j/10);
          n=j%10;
          if (j<20) {
            return one[i] + " hundred" + " " + one[j];
          }  
          if (j>=20 && n==0) {
            return one[i] + " hundred" + " " + dec[k];
          } else {
          return one[i] + " hundred" + " " + dec[k] + " " + one[n];
          }
      } else {
          return one[i] + " hundred";
      }
  }
}