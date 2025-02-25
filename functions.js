/**
* @name: Assignement1
* @Course Code: SODV1201 - 
* @class: Software Development Diploma program.
* @author: Wesley Lomazzi e Souza  / email: w.lomazziesouza407@mybvc.ca
* @description: This is the script file for the Assignment 1. Contains the functions to calculate the grade, display the staff list and convert temperature.
*/

/*------------------------------------------------------------------------------------------------------------------------------------------------------------
* @description: This function is to calculate the grade based on the mark input. The grade is classified as A, B, C, D, or F.
* The grade is displayed in a box with a green background if the mark is greater than 50 (APPROVED) and with a red background if the mark is 50 or less (REPROVED).
*/
function MarkToGrade() {
    // Get the mark input value
    var markInput = document.getElementById("mark-input-box").value;
    var validationMessageElement = document.getElementById("validationmessage");
    var resultElement = document.getElementById("result");
  
    // Clear previous results
    validationMessageElement.innerHTML = "";
    resultElement.innerHTML = "";
  
    try {
      
      //Check if the field is empty
      if (markInput.trim() === "") {
        throw "Please type a Mark Between 1 and 100.";
      }
  
      // Check if the input contains only numeric digits
      if (!/^\d+$/.test(markInput.trim())) {
        throw "Type a number between 1 and 100.";
      }
  
      // Convert the input to an integer
      var mark = parseInt(markInput, 10);
  
      // Check if the mark is negative
      if (mark < 0) {
        throw "The mark can't be a nagative number.";
      }
  
      // Check if the mark is greater than 100
      if (mark > 100) {
        throw "The Mark must be between 1 and 100.";
      }
  
      // Classify the grade based on the mark
      var grade = "";
      if (mark > 90) {
        grade = "A";
      } else if (mark > 80) {
        grade = "B";
      } else if (mark > 70) {
        grade = "C";
      } else if (mark > 50) {
        grade = "D";
      } else { // If the mark is 50 or less - SET as REPROVED
        grade = "F";
      }
  
      // Create a box with the grade - APPROVED
      if (mark > 50) {
        var resultBox = document.createElement("div");
        resultBox.classList.add("result-box");
        resultBox.innerHTML = "Grade [ Approved ]:<br>" + grade;
        resultElement.appendChild(resultBox);
      }else{
        // Create a box with the grade - REPROVED message
        var errorBox = document.createElement("div");
        errorBox.classList.add("result-box", "reproved");
        errorBox.innerHTML = "Grade [ Reproved ]:<br>" + grade;
        resultElement.appendChild(errorBox);  
      }
  
    } catch (error) {
      // In case of error, create a box with the error message
      var errorBox = document.createElement("div");
      errorBox.classList.add("result-box", "error");
      errorBox.innerHTML = "Error:<br>" + error;
      resultElement.appendChild(errorBox);
    }
  }
  

/*------------------------------------------------------------------------------------------------------------------------------------------------------------
  * @description: Function to display the staff list as an HTML table with the name, position, office, ID, hire date, salary, and a delete button.
  * The "Name" and "Salary" headers are clickable for sorting.
*/
// JSON data provided as an array of arrays
var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

/**
 * Displays the staff data as an HTML table within the #staffList element.
 * The "Name" and "Salary" headers are clickable for sorting.
 * An extra column with a delete button is added to each row.
 */
function displayStaffList() {
  $("#staffList").empty();
  
  // Create the table and header row
  var table = $("<table>").addClass("staff-table");
  var headerRow = $("<tr>");
  
  var nameHeader = $("<th>")
    .text("Name")
    .addClass("clickable")
    .click(function(){
      sortStaffByName();
      displayStaffList();
    });
  
  var positionHeader = $("<th>").text("Position");
  var officeHeader = $("<th>").text("Office");
  var idHeader = $("<th>").text("ID");
  var hireDateHeader = $("<th>").text("Hire Date");
  
  var salaryHeader = $("<th>")
    .text("Salary")
    .addClass("clickable")
    .click(function(){
      sortStaffBySalary();
      displayStaffList();
    });
  
  // Extra header for the delete action (non-clickable) - PLUS
  var actionHeader = $("<th>")
    .text("Action")
    .addClass("action-header");
  
  headerRow.append(nameHeader, positionHeader, officeHeader, idHeader, hireDateHeader, salaryHeader, actionHeader);
  table.append(headerRow);
  
  // Loop through dataSet and create a row for each staff member
  dataSet.forEach(function(staff, index) {
    var row = $("<tr>")
      .append($("<td>").text(staff[0]))
      .append($("<td>").text(staff[1]))
      .append($("<td>").text(staff[2]))
      .append($("<td>").text(staff[3]))
      .append($("<td>").text(staff[4]))
      .append($("<td>").text(staff[5]));
    
    // Create the delete button and attach a click event to remove the staff member
    var deleteBtn = $("<button>")
      .text("Delete")
      .addClass("delete-btn")
      .click(function(){
        removeStaff(index);
      });
    
    // Append the delete button in its own cell
    row.append($("<td>").append(deleteBtn));
    table.append(row);
  });
  
  $("#staffList").append(table);
}

/**
 * Sorts the dataSet by staff name (alphabetically).
 */
function sortStaffByName() {
  dataSet.sort(function(a, b) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
  });
}

/**
 * Converts a salary string (e.g. "$372,000") into a number.
 */
function parseSalary(salaryStr) {
  return parseFloat(salaryStr.replace(/[\$,]/g, ""));
}

/**
 * Sorts the dataSet by staff salary (ascending).
 */
function sortStaffBySalary() {
  dataSet.sort(function(a, b) {
    var salaryA = parseSalary(a[5]);
    var salaryB = parseSalary(b[5]);
    return salaryA - salaryB;
  });
}

/**
 * Removes a staff member from the dataSet by index and refreshes the table. When click on Delete button.
 * @param {number} index - The index of the staff member to remove.
 */
function removeStaff(index) {
  dataSet.splice(index, 1);
  displayStaffList();
}





/*------------------------------------------------------------------------------------------------------------------------------------------------------------
  * @description: Function to convert a temperature in Fahrenheit to Celsius and Kelvin.
*/
function convertTemperature() {
// Get the temperature input value in Farhenheit
var tempFStr = $("#tempInput").val();

// Clear previous results
$("#result").empty();

try {
    // Validation: can't be empty
    if (tempFStr.trim() === "") {
    throw "Please, insert a temperature value.";
    }
    
    // Convert the input to a number
    var tempF = parseFloat(tempFStr);
    if (isNaN(tempF)) {
    throw "Invalid input: only numbers are allowed.";
    }
    
    // Fomrula to Convert Fahrenheit to Celsius: (F - 32) * 5/9
    var tempC = (tempF - 32) * 5 / 9;
    // Celsius to Kelvin: Celsius + 273.15
    var tempK = tempC + 273.15;
    
    // Round the results to two decimal places
    tempC = tempC.toFixed(2);
    tempK = tempK.toFixed(2);
    
    // Create a box for each calculated temperature
    var celsiusBox = $("<div>")
    .addClass("result-box")
    .html("Celsius:<br>" + tempC + " °C");
    
    var kelvinBox = $("<div>")
    .addClass("result-box")
    .html("Kelvin:<br>" + tempK + " K");
    
    // Add the boxes to the result element
    $("#result").append(celsiusBox, kelvinBox);
    
} catch (err) {
    // If an error occurs, display it in a box with an error style
    $("#result").html("<div class='result-box error'>Erro:<br>" + err + "</div>");
}
}