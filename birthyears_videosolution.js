//approach
//maxpop
//list of pple
//return array of deltas
//running sum

// var people = [
//   {
//     b: 2000,
//     d: 2010
//   },
//   {
//     b: 1975,
//     d: 2005
//   },
//   {
//     b: 1975,
//     d: 2003
//   },
//   {
//     b: 1803,
//     d: 1809
//   },
//   {
//     b: 1750,
//     d: 1869
//   },
//   {
//     b: 1840,
//     d: 1935
//   },
//   {
//     b: 1803,
//     d: 1921
//   },
//   {
//     b: 1894,
//     d: 1921
//   }
// ];

var people = [{ b: 2000, d: 2001 }, { b: 2001, d: 2002 }];

function getPopulationPeak(people) {
  let firstBirth = getMinBirth(people);
  let lastBirth = getMaxBirth(people);

  let deltaArr = getDeltas(people, firstBirth, lastBirth);
  // let peakYear = getMaxIndexOfRunningSum(deltaArr);
  // return peakYear;
}

function getMinBirth(people) {
  let minBith = people[0].b;
  people.forEach(person => {
    if (person.b < minBith) minBith = person.b;
  });
  return minBith;
}

function getMaxBirth(people) {
  let maxBirth = people[0].b;
  people.forEach(person => {
    if (person.b > maxBirth) maxBirth = person.b;
  });
  return maxBirth;
}

function getDeltas(people, min, max) {
  console.log('getDeltas');
  console.log('min', min);
  console.log('max', max);
  let deltasArr = [max - min];
  console.log('000 deltasArr', deltasArr);
  people.forEach(person => {
    addDelta(deltasArr, person.b - min, 1); //?
    addDelta(deltasArr, person.b - min, -1); //?
  });
  return deltasArr;
}

function addDelta(deltas, index, val) {
  console.log('addDelta');
  console.log('deltas', deltas);
  console.log('index', index);
  console.log('val', val);
}

function getMaxIndexOfRunningSum(deltas) {
  console.log('getMaxIndexOfRunningSum');
  let runningSum = 0;
  let maxRunningSum = 0;
  let yearOfPeak = 0;
  deltas.forEach((delta, year) => {
    runningSum += deltas;
    if (runningSum > maxRunningSum) {
      maxRunningSum = runningSum;
      yearOfPeak = year;
    }
  });
  return yearOfPeak;
}

getPopulationPeak(people);
