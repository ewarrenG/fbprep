var people = [
  {
    b: 2000,
    d: 2010
  },
  {
    b: 1975,
    d: 2005
  },
  {
    b: 1975,
    d: 2003
  },
  {
    b: 1803,
    d: 1809
  },
  {
    b: 1750,
    d: 1869
  },
  {
    b: 1840,
    d: 1935
  },
  {
    b: 1803,
    d: 1921
  },
  {
    b: 1894,
    d: 1921
  }
];

let birthDeathObj = {};
people.forEach(person => {
  if (birthDeathObj[person.b]) birthDeathObj[person.b] += 1;
  else birthDeathObj[person.b] = 1;
  if (birthDeathObj[person.d + 1]) birthDeathObj[person.d + 1] -= 1;
  else birthDeathObj[person.d + 1] = -1;
});

let cumulativeCounter = 0;
let cumulativeObj = {};
Object.keys(obj).map(key => {
  cumulativeCounter += birthDeathObj[key];
  cumulativeObj[key] = cumulativeCounter;
});
console.log('cumulativeObj', cumulativeObj);
let peakPop = 0;
let peakYear;
Object.keys(cumulativeObj).map(key => {
  if (cumulativeObj[key] > peakPop) {
    peakPop = cumulativeObj[key];
    peakYear = key;
  }
});

console.log('peakPop', peakPop);
console.log('peakYear', peakYear);
