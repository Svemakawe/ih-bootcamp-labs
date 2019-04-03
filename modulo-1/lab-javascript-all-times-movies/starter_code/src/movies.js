/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// const movies = require('./data.js');

const movieTest = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h',
    genre: ['Crime', 'Drama'],
    rate: '9.7'
  },
  {
    title: 'The Godfather',
    year: '1997',
    director: 'Francis Ford Coppola',
    duration: '55min',
    genre: ['Crime', 'Drama'],
    rate: '9.7'
  },
  {
    title: 'The Godfather: Part II',
    year: '1997',
    director: 'Francis Ford Coppola',
    duration: '3h 2min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    rate: '9.0'
  },
  {
    title: '12 Angry Men',
    year: '1994',
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  },
  {
    title: 'Schindler\'s List',
    year: '1997',
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    rate: '9.5'
  },
  {
    title: 'Raiders of the Lost Ark',
    year: '1994',
    director: 'Steven Spielberg',
    duration: 100,
    genre: ['Action', 'Adventure'],
    rate: '9.5'
  }
];

function turnHoursToMinutes(array) {
  const copyArr = JSON.parse(JSON.stringify(array));
  copyArr.forEach((item) => {
    let arr = [];
    if (item.duration.length === 2) {
      arr = item.duration.split('h');
      item.duration = parseInt(arr[0], 10) * 60;
    } else if (item.duration.length === 5) {
      arr = item.duration.split('min');
      item.duration = parseInt(arr[0], 10);
    } else if (item.duration.length > 5) {
      arr = item.duration.split('h ');
      item.duration = parseInt(arr[0], 10) * 60 + parseInt(arr[1], 10);
    }
  });
  return copyArr;
}

function turnHoursToMinutes2(array) {
  const copyArr = JSON.parse(JSON.stringify(array));
  copyArr.forEach((item) => {
    if (item.duration.length === 8) {
      item.duration = parseInt(item.duration.substring(0, 1), 10) * 60 + parseInt(item.duration.substring(3, 5), 10);
    } else if (item.duration.length === 7) {
      item.duration = parseInt(item.duration.substring(0, 1), 10) * 60 + parseInt(item.duration.substring(3, 4), 10);
    } else if (item.duration.length === 5) {
      item.duration = parseInt(item.duration.substring(0, 2), 10);
    } else if (item.duration.length === 2) {
      item.duration = parseInt(item.duration.substring(0, 1), 10) * 60;
    }
  });
  return copyArr;
}

// console.log(turnHoursToMinutes(movieTest));

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  const x = array.map((element) => {
    if (element.rate === '') {
      return 0;
    }
    return parseFloat(element.rate);
  });
  return parseFloat((x.reduce((acc, item) => acc + item, 0) / x.length).toFixed(2));
}

// console.log(ratesAverage(movieTest));

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  const dramaArr = array.filter(item => item.genre.includes('Drama'));
  if (dramaArr.length !== 0) {
    return ratesAverage(dramaArr);
  }
  return undefined;
}
// console.log(dramaMoviesRate(movieTest));

// Order by time duration, in growing order
function orderByDuration(array) {
  const newArray = turnHoursToMinutes(array);
  return newArray.sort((a, b) => {
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.duration < b.duration) {
      return -1;
    }
    return a.title.localeCompare(b.title);
  });
}

// console.log(orderByDuration(movieTest);

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  const filteredArray = array.filter(item => item.director === 'Steven Spielberg' && item.genre.includes('Drama'));
  return array.length === 0 ? undefined : `Steven Spielberg directed ${filteredArray.length} drama movies!`;
}

// console.log(howManyMovies(movieTest));

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const titleArray = array.map(elem => elem.title);
  const sortedArray = titleArray.sort((a, b) => a.localeCompare(b));
  const result = [];
  for (let i = 0; i < 20; i += 1) {
    if (!sortedArray[i]) {
      return result;
    }
    result.push(sortedArray[i]);
  }
  return result;
}

// console.log(orderAlphabetically(movieTest));
// console.log(orderAlphabetically(movies));

// Best yearly rate average
function bestYearAvg(array) {
  if (array.length === 0) {
    return undefined;
  }
  const obj = {};
  array.forEach((element) => {
    if (obj[element.year] === undefined) {
      obj[element.year] = [parseFloat(element.rate)];
      obj[element.year].push(1);
    } else {
      obj[element.year][0] += parseFloat(element.rate);
      obj[element.year][1] += 1;
    }
  });
  // console.log('OBJ ==>', obj);
  const result = Object.keys(obj).sort((a, b) => {
    const avgA = obj[a][0] / obj[a][1];
    const avgB = obj[b][0] / obj[b][1];
    if (avgA > avgB) {
      return 1;
    }
    if (avgA < avgB) {
      return -1;
    }
    return parseInt(b, 10) - parseInt(a, 10);
  });
  // console.log('RESULT ==>', result);
  // console.log('HIGHEST AVG RATE YEAR ==>', result[result.length - 1]);
  // console.log('HIGHEST AVG RATE ARRAY ==>', obj[result[result.length - 1]]);
  const highestGrade = obj[result[result.length - 1]][0] / obj[result[result.length - 1]][1];
  return `The best year was ${result[result.length - 1]} with an average rate of ${highestGrade}`;
}

// console.log(bestYearAvg(movieTest));
