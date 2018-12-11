<!--Javascript taget fra https://www.codingforums.com/javascript-programming/222935-automatically-changing-text-daily-code.html-->
    var scheduleDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    onload = function() {
        var today = new Date();
        var DOW = today.getDay();
        document.getElementById(scheduleDays[DOW]).style.display = 'block';
    }
