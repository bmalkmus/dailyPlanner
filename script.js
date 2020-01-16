var now = moment()
console.log(now);
let currentID;
let inputID;
let saveInput;
let inputEL = document.getElementById(inputID);
let time;
let input;
let timeArr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
let currentDate = moment().format("dddd, MMMM Do YYYY")
$("#current-date").html(currentDate);

for (i = 0; i < timeArr.length; i++){
time = timeArr[i];
time = moment('\"'+time+'\"', 'HH');

    console.log(time.isBefore(now))
    strTime = time.format('hA')
    let row = $('<tr class =' + strTime + '></tr>');
    let TDa = $('<td  class = "time-display" id =' + strTime + '>' + strTime + '</td>');
    let TDb = $('<td><input type ="text" name ="' + strTime + '"  id ="text' + time + '"</td>')
    let TDc = $('<button type="button"  class="btn btn-outline-info" id= "'+time+'">Save Task</button>')
    $(row).append(TDa, TDb, TDc);
    $('#mytable').append(row);
    console.log({now, time, bool: now > time, moment: moment(now).isSameOrAfter(moment(time)) });
    

    if (now.isAfter(time, 'hour')){
    $('input[name="'+strTime+'"]').css("background-color", "#cccccc");
    }
    else if (now.isSame(time, 'hour')){
        $('input[name="'+strTime+'"]').css("background-color", "#f14d57");
    }

    else {
        $('input[name="'+strTime+'"]').css("background-color", "#74e96d");
    }

    if (!localStorage.getItem("#text"+time)) {
        $('input[name="'+strTime+'"]').val("")
    }
    else {
        $('input[name="'+strTime+'"]').val(localStorage.getItem("#text"+time))
}}

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
})