var now = moment().format("hA")
// console.log(now);
let currentID;
let inputID;
let saveInput;
let inputEL = document.getElementById(inputID);
let time;
let timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let currentDate = moment().format("dddd, MMMM Do YYYY")
$("#current-date").html(currentDate);

for (i = 0; i < timeArr.length; i++){
time = timeArr[i];
    $ ('#mytable > tbody:last-child').append ('<tr class =' + time + '><td id =' + time + '>' + time + '</td><td><input type ="text" name ="' + time + '"  id ="text' + time + '"><button type="button" id = "'+time+'">Save Task</button>');
    if (now > time){
        $('.'+time).css("background-color", "grey");
        $('input[name="'+time+'"]').css("background-color", "grey");
    }
    else if ( now == time){
        $('.'+time).css("background-color", "red");
        $('input[name="'+time+'"]').css("background-color", "red");
    }

    else {
        $('.'+time).css("background-color", "green");
        $('input[name="'+time+'"]').css("background-color", "green");
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