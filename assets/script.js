
//Display current day and time
document.querySelector('#currentDay').textContent = moment().format('LLLL');

//Clear local storage at 24:59AM
var minuteOfHour = moment().format('m');
var hourOfDay = moment().format('H')
if ((hourOfDay == 24) && (minuteOfHour == 59)) {
    localStorage.clear();
    checkStorage();
}


// var rows = document.querySelector('.row')
// Row color change control
// var rowColor = document.querySelectorAll('[data-id]');
// console.log(rowColor)
// var rowColor_array = Array.from(rowColor);
// console.log(rowColor_array)

// rowColor_array.forEach(function(elem) {
//     if (elem.dataset.id > hourOfDay) {
//         rows.setAttribute("style", "background-color: grey;");
//     }
    
// });






// var rowColor = document.querySelector('.container');
// console.log(rowColor.childElementCount);

// if (hourOfDay == 9) {
//     question5.setAttribute("style", "visibility: hidden;");
// }


//Show existing text from storage. If blank show placeholder.
function checkStorage() {
    var storedText9 = localStorage.getItem("text9am");
    var storedText10 = localStorage.getItem("text10am");
    var storedText11 = localStorage.getItem("text11am");
    var storedText12 = localStorage.getItem("text12pm");
    var storedText1 = localStorage.getItem("text1pm");
    var storedText2 = localStorage.getItem("text2pm");
    var storedText3 = localStorage.getItem("text3pm");
    var storedText4 = localStorage.getItem("text4pm");

    if (storedText9) {
        document.querySelector('#textArea9').value = storedText9;
    } else {
        return;
    }
    if (storedText10) {
        document.querySelector('#textArea10').value = storedText10;
    } else {
        return;
    }
    if (storedText11) {
        document.querySelector('#textArea11').value = storedText11;
    } else {
        return;
    }
    if (storedText12) {
        document.querySelector('#textArea12').value = storedText12;
    } else {
        return;
    }
    if (storedText1) {
        document.querySelector('#textArea1').value = storedText1;
    } else {
        return;
    }
    if (storedText2) {
        document.querySelector('#textArea2').value = storedText2;
    } else {
        return;
    }
    if (storedText3) {
        document.querySelector('#textArea3').value = storedText3;
    } else {
        return;
    }
    if (storedText4) {
        document.querySelector('#textArea4').value = storedText4;
    } else {
        return;
    }
}


//Button variables
var button9 = $('#button9');
var button10 = $('#button10');
var button11 = $('#button11');
var button12 = $('#button12');
var button1 = $('#button1');
var button2 = $('#button2');
var button3 = $('#button3');
var button4 = $('#button4');

// Save to storage on click event
button9.on('click', function (event) {
    event.preventDefault();
    var textArea9 = $('textarea[name="textArea9"]').val();
    localStorage.setItem("text9am", textArea9);
});
button10.on('click', function (event) {
    event.preventDefault();
    var textArea10 = $('textarea[name="textArea10"]').val();
    localStorage.setItem("text10am", textArea10);
});
button11.on('click', function (event) {
    event.preventDefault();
    var textArea11 = $('textarea[name="textArea11"]').val();
    localStorage.setItem("text11am", textArea11);
});
button12.on('click', function (event) {
    event.preventDefault();
    var textArea12 = $('textarea[name="textArea12"]').val();
    localStorage.setItem("text12pm", textArea12);
});
button1.on('click', function (event) {
    event.preventDefault();
    var textArea1 = $('textarea[name="textArea1"]').val();
    localStorage.setItem("text1pm", textArea1);
});
button2.on('click', function (event) {
    event.preventDefault();
    var textArea2 = $('textarea[name="textArea2"]').val();
    localStorage.setItem("text2pm", textArea2);
});
button3.on('click', function (event) {
    event.preventDefault();
    var textArea3 = $('textarea[name="textArea3"]').val();
    localStorage.setItem("text3pm", textArea3);
});
button4.on('click', function (event) {
    event.preventDefault();
    var textArea4 = $('textarea[name="textArea4"]').val();
    localStorage.setItem("text4pm", textArea4);
});
// Execute function to check storage for existing saved text.
checkStorage()

