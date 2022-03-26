// code your solution here
function saturdayFun(activity){
    let phrase = "This Saturday, I want to "
    if (activity == null){
        phrase = phrase + "roller-skate!"
    } else {
        phrase = phrase + activity + "!";
    }
    return phrase;
}
const mondayWork = function(activity){
    let phrase = "This Monday, I will "
    if (activity == null){
        phrase = phrase + "go to the office.";
    } else {
        phrase = phrase + activity + ".";
    }
    return phrase;
}
function wrapAdjective(highlight){
    return function(msg){
        let phrase = "You are "
    if (msg == null || highlight == null){
        phrase = phrase + "*special*.";
    } else {
        phrase = phrase + highlight + msg + highlight + "!";
    }
    return phrase;
    }
}