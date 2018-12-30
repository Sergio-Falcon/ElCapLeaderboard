import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newClimber = () => {
  return {
    id: Math.floor(Math.random() * 100),
    username: namor.generate({ words: 1, numbers: 0 }),
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    height: Math.floor(Math.random() * 7000)
  };
};

export function makeData(len = 100) {
  return range(len).map(d => {
    return {
      ...newClimber()
    };
  });
}


export function splitData(users, column) {
  //take in array of users
  //split into 4 different arrays depending on height

  let firstColumn = [];   //1st array: height 0-1500m
  let secondColumn = [];  //2nd array: height 1501-3000m
  let thirdColumn = [];   //3rd array: height 3001m-4500m
  let fourthColumn = [];  //4th array: height 4501m-6000m
  
  for (const user of users) {
    if (user.height < 1500) {
      firstColumn.push(user)
    } else if (user.height > 1500 && user.height <= 3000){
      secondColumn.push(user)
    } else if (user.height > 3000 && user.height <= 4500){
      thirdColumn.push(user)
    }
    else {
      fourthColumn.push(user)
    }
  }

  firstColumn.sort(function(a,b) {
      return b.height-a.height;
  });
  secondColumn.sort(function(a,b) {
      return b.height-a.height;
  });
  thirdColumn.sort(function(a,b) {
      return b.height-a.height;
  });
  fourthColumn.sort(function(a,b) {
      return b.height-a.height;
  });
  if (column === 1){
    return firstColumn;
  } else if (column === 2) {
    return secondColumn;
  } else if (column === 3) {
    return thirdColumn;
  } else {
    return fourthColumn;
  }
};

export function getPitch(height){
  let pitch;
  let start;

  if (height < 1500) {
    //console.log(height)
    start = 0;
    pitch = (height - start) / 100;
  } else if (height > 1500 && height <= 3000){
    start = 1500;
    pitch = (height - start) / 100;
  } else if (height > 3000 && height <= 4500){
    start = 3000;
    pitch = (height - start) / 100;
  }
  else {
    start = 4500;
      pitch = (height - start) / 100;
  }
  if (pitch < 1) {
    pitch = 1;
  }
  return Math.floor(pitch);
};