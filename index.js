// code your solution here
//let activity = "roller-skate";
const saturdayFun =function (activity = "roller-skate"){
    
    return `This Saturday, I want to ${activity}!`;
   
    }

    const mondayWork =function (activity = "go to the office"){
       return `This Monday, I will ${activity}.`; 
    }

  function wrapAdjective(symbol = "*"){
    const emphatic =function (adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`;
        
    };
    return emphatic;

  }  


