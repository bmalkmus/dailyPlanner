var now = moment().format("hA")
console.log(now);
let currentID;
let inputID;
let saveInput;
let inputEL = document.getElementById(inputID);
let time;
let timeArr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
let currentDate = moment().format("dddd, MMMM Do YYYY")
$("#current-date").html(currentDate);

for (i = 0; i < timeArr.length; i++){
time = timeArr[i];
time = moment('\"'+time+'\"', 'HH').format('hA');
console.log(now > time);
    $ ('#mytable > tbody:last-child').append ('<tr class =' + time + '><td  class = "time-display" id =' + time + '>' + time + '</td><td><input type ="text" name ="' + time + '"  id ="text' + time + '"><button type="button"  class="btn" id= "'+time+'">Save Task</button>');
    if (now > time){
    // if (now.isAfter(time)) {
        $('input[name="'+time+'"]').css("background-color", "#cccccc");
    }
    else if ( now == time){
        $('input[name="'+time+'"]').css("background-color", "#f14d57");
    }

    else {
        $('input[name="'+time+'"]').css("background-color", "#74e96d");
    }


}

$( "button" ).click(function() {
currentID = this.id;
inputID = "text"+currentID;
inputID= "#" +inputID;
console.log(inputID);


// let inputEL = document.getElementById(inputID);
input= $(inputID).val();

localStorage.setItem(inputID, input);

saveInput = localStorage.getItem(inputID);
console.log(saveInput);
input = saveInput;
getSavedValue();

});
function getSavedValue  (inputID){
    if (!localStorage.getItem(inputID)) {
        return "";
    }
    return localStorage.getItem(inputID);
    location.reload(true);

}
getSavedValue();