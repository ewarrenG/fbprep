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

// var people = [
//   {
//     b: 1900,
//     d: 1975
//   },
//   {
//     b: 1970,
//     d: 2000
//   },
//   {
//     b: 1950,
//     d: 1985
//   },
//   {
//     b: 1900,
//     d: 1920
//   },
//   {
//     b: 1910,
//     d: 1920
//   },
//   {
//     b: 1919,
//     d: 1925
//   }
// ];

//proposed approach
//iterate through each person in people
//for current person, see if other people were alive in that same year as there born year
//add counter to obj where key is birthyear, value is counter

function getPeakPopulation(people) {
  let pplAliveByBirthYear = calculatePplAliveEachYear(people);
  let maxObj = getMaxValFromObj(pplAliveByBirthYear);
  console.log('maxYear', maxObj.year);
}

function calculatePplAliveEachYear(people) {
  let pplAliveByBirthYear = {};
  for (let i = 0; i < people.length; i++) {
    let thisYearCounter = 0;
    for (let j = 0; j < people.length; j++) {
      if (people[j].b <= people[i].b && people[j].d >= people[i].b) {
        thisYearCounter += 1;
      }
    }
    pplAliveByBirthYear[people[i].b] = thisYearCounter;
  }
  return pplAliveByBirthYear;
}

function getMaxValFromObj(obj) {
  let max = 0;
  let associatedYear;
  Object.keys(obj).map(item => {
    if (obj[item] > max) {
      max = obj[item];
      associatedYear = item;
    }
  });

  return { val: max, year: associatedYear };
}

getPeakPopulation(people);
