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
    height: Math.floor(Math.random() * 1100) //meters
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

  let firstColumn = [];   //Buttress 1st array: height 0-1199ft
  let secondColumn = [];  //Dolt 2nd array: height 1200-2399ft
  let thirdColumn = [];   //Roof 3rd array: height 2400-3449ft
  let fourthColumn = [];  //Summit 4th array: height 3450+ft
  
  for (const user of users) {
    let height = getHeight(user.height);

    if (height <= 1199) {
      //Buttress Column
      firstColumn.push(user)
    } else if (height > 1200 && height <= 2399){
      //Dolt Column
      secondColumn.push(user)
    } else if (height > 2400 && height <= 3449){
      //Roof Column
      thirdColumn.push(user)
    }
    else {
      //Summit Column
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
  //height is in feet
  let pitch = 0; //31 total pitches totals to 3450ft
  
  //returns pitch #
  switch(true) {
    case (height <= 0):
      //0 0
      pitch = "Pitch " + 0;
      break;
    case (height > 0 && height <= 130):
      //1 130
      pitch = "Pitch " + 1;
      break;
    case (height > 130 && height <= 220):
      //2 90
      pitch = "Pitch " + 2;
      break;
    case (height > 220 && height <= 320):
      //3 100
      pitch = "Pitch " + 3;
      break;
    case (height > 320 && height <= 420):
      //4 100
      pitch = "Pitch " + 4;
      break;
    case (height > 420 && height <= 540):
      //5 120
      pitch = "Pitch " + 5;
      break;
    case (height > 540 && height <= 620):
      //6 80
      pitch = "Pitch " + 6;
      break;
    case (height > 620 && height <= 720):
      //7 100
      pitch = "Pitch " + 7;
      break;
    case (height > 720 && height <= 860):
      //8 140
      pitch = "Pitch " + 8;
      break;
    case (height > 860 && height <= 930):
      //9 70
      pitch = "Pitch " + 9;
      break;
    case (height > 930 && height <= 1060):
      //10  130
      pitch = "Pitch " + 10;
      break;
    case (height > 1060 && height <= 1200):
      //11  140
      pitch = "Pitch " + 11;
      break;
    case (height > 1200 && height <= 1300):
      //12  100
      pitch = "Pitch " + 12;
      break;
    case (height > 1300 && height <= 1400):
      //13  100
      pitch = "Pitch " + 13;
      break;
    case (height > 1400 && height <= 1500):
      //14  100
      pitch = "Pitch " + 14;
      break;
    case (height > 1500 && height <= 1610):
      //15  110
      pitch = "Pitch " + 15;
      break;
    case (height > 1610 && height <= 1740):
      //16  130
      pitch = "Pitch " + 16;
      break;
    case (height > 1740 && height <= 1830):
      //17  90
      pitch = "Pitch " + 17;
      break;
    case (height > 1830 && height <= 1950):
      //18  120
      pitch = "Pitch " + 18;
      break;
    case (height > 1950 && height <= 2070):
      //19  120
      pitch = "Pitch " + 19;
      break;
    case (height > 2070 && height <= 2170):
      //20  100
      pitch = "Pitch " + 20;
      break;
    case (height > 2170 && height <= 2280):
      //21  110
      pitch = "Pitch " + 21;
      break;
    case (height > 2280 && height <= 2400):
      //22  120
      pitch = "Pitch " + 22;
      break;
    case (height > 2400 && height <= 2510):
      //23  110
      pitch = "Pitch " + 23;
      break;
    case (height > 2510 && height <= 2620):
      //24  110
      pitch = "Pitch " + 24;
      break;
    case (height > 2620 && height <= 2730):
      //25  110
      pitch = "Pitch " + 25;
      break;
    case (height > 2730 && height <= 2880):
      //26  150
      pitch = "Pitch " + 26;
      break;
    case (height > 2880 && height <= 3030):
      //27  150
      pitch = "Pitch " + 27;
      break;
    case (height > 3030 && height <= 3130):
      //28  100
      pitch = "Pitch " + 28;
      break;
    case (height > 3130 && height <= 3260):
      //29  130
      pitch = "Pitch " + 29;
      break;
    case (height > 3260 && height <= 3330):
      //30  70
      pitch = "Pitch " + 30;
      break;
    case (height > 3330 && height <= 3450):
      //31  120
      pitch = "Pitch " + 31;
      break;
    default:
      pitch = "Summited";
      break;
  }
  return pitch;
};


export function getHeight(height){
  //height is in meters, we need to convert to feet
  //1 meter = 3.28 ft
  return Math.floor(height * 3.28);
};