var people = [
  {
    name: 'Nicolas',
    birth: 1900,
    death: 1975
  },
  {
    name: 'Vladimir',
    birth: 1970,
    death: 2000
  },
  {
    name: 'Julius',
    birth: 1950,
    death: 1985
  },
  {
    name: 'Alexander',
    birth: 1900,
    death: 1920
  },
  {
    name: 'Obama',
    birth: 1910,
    death: 1920
  },
  {
    name: 'Benjamin',
    birth: 1919,
    death: 1925
  }
];

//desired output: year
//iterate through ppl get maxdeath, minbirth
//create range for maxdeath and minbirth
//iterate through each year and check if each person was alive
//add as key, value pair to obj: year: numPplAlive

function getMaxYearOfPplAlive(people) {
  // console.log('getMaxYearOfPplAlive');
  let rangeArr = getYearRange(people); //good to here, e.g. [1900, 1901, ... , 2000]
  let rangeObj = computePplAlivePerYear(rangeArr, people); //{1900: 3}
  //what if instead, key, value was numPplAlive, year
  // console.log('rangeObj', rangeObj);
  let maxFromObj = getMaxFromObj(rangeObj);
  console.log('maxFromObj', maxFromObj);
  console.log('latest year with max number of ppl alive', maxFromObj.year);
}

function getYearRange(people) {
  let minYearBorn = people[0].birth;
  let maxYearDeath = people[0].death;
  people.forEach(person => {
    if (person.birth < minYearBorn) {
      minYearBorn = person.birth;
    }
    if (person.death > maxYearDeath) {
      maxYearDeath = person.death;
    }
  });
  // return { minYearBorn: minYearBorn, maxYearDeath: maxYearDeath };
  let rangeArr = [];
  for (i = minYearBorn; i <= maxYearDeath; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
}

function computePplAlivePerYear(rangeArr, people) {
  // console.log('computePplAlivePerYear');
  let pplAlivePerYearObj = {};
  for (let i = 0; i < rangeArr.length; i++) {
    let pplAliveThisYear = 0;
    people.forEach(person => {
      if (person.birth < rangeArr[i] && person.death > rangeArr[i]) {
        pplAliveThisYear += 1;
      }
    });
    pplAlivePerYearObj[pplAliveThisYear] = rangeArr[i];
    //pplAlivePerYearObj[rangeArr[i]] = pplAliveThisYear;
  }
  return pplAlivePerYearObj;
}

function getMaxFromObj(rangeObj) {
  let returnObj = {
    numberOfPpl: 0,
    year: 0
  };
  Object.keys(rangeObj).map(year => {
    if (year > returnObj.numberOfPpl) {
      returnObj.numberOfPpl = year;
      returnObj.year = rangeObj[year];
    }
  });
  return returnObj;
}

getMaxYearOfPplAlive(people);
