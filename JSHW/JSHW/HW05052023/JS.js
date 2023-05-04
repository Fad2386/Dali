
function arrayNumbers(num1, num2) {
  for (let i = num1; i >= num2; --i) {
    if(i % 2 == 0) {
      console.log(i)
    }
  }
}
arrayNumbers(15, 2)
   


function power(x, y) {
  const total = x**y
  if (y === 2)
  return total;
}
console.log(power(3, 2))

function number(num) {
  let sum = 0
  for(let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum
}
console.log(number(3))

function summ(n, m) {
  let n1 = 0;
  let n2 = 0;
  if (n <= m) {
    for (let i = n; i <= m; i++) {
      if (i % 2 == 0) {
        n1 += i;
      } else {
        n2 += i;
      }
    }
  }
  if (n > m) {
    for (let i = m; i <= n; i++) {
      if (i % 2 == 0) {
        n1 += i;
      } else {
        n2 += i;
      }
    }
  }

  console.log(n1);
  console.log(n2);
}
summ(3, 8)

function str(s){
  if(s.length == "") {
    return null
  }
  let maxString = s[0]
  for(let i = 0; i < s.length; i++) {
    if(s[i].length > maxString.length) {
      maxString = s[i]
    }
  }
  return maxString
}
console.log(str(["Dali", "Arsen", "Nic"]))
console.log(str([]))
