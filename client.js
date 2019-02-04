$( document ).ready( readyNow );

let employees = [];

function addEmployee(){
    console.log( 'in addEmployee' );
    // create a new employee object with user input
    let newEmployee = {
        firstName: $( '#firstNameIn' ).val(),
        lastName: $( '#lastNameIn' ).val(),
        id: $( '#idIn' ).val(),
        title: $( '#titleIn' ).val(),
        annualSalary: $( '#annualSalaryIn' ).val()
    } // end newEmployee
    console.log( 'newEmployee:', newEmployee );
    // clear input fields
    $( '#firstNameIn' ).val( '' );
    $( '#lastNameIn' ).val( '' );
    $( '#idIn' ).val( '' );
    $( '#titleIn' ).val( '' );
    $( '#annualSalaryIn' ).val( '' );
    // push that employee into an array
    employees.push( newEmployee );
    // calculate monthly salary
    let totalSalaries = 0;
    // loop through employees
    for( let i =0; i< employees.length; i++ ){
        // add employee's salary to total
        totalSalaries += Number( employees[ i ].annualSalary );
    } // end for
    // divide total salaries by 12
    const totalMonthlySalaries = totalSalaries / 12;
    console.log( 'totalMonthlySalaries:', totalMonthlySalaries );
    // if expensive, toggle "expensive" class on element with id of "totalMonthly"
    if( totalMonthlySalaries > 20000 ){
        $( '#totalMonthly' ).toggleClass( 'expensive' );
    } // end expensive check
    // update Monthly salaries on DOM
    let el = $( '#monthlyOut' );
    el.empty();
    el.append( totalMonthlySalaries.toFixed( 2 ) );
    // update DOM
    displayEmployees();
} // end add Employee

function displayEmployees(){
    console.log( 'in displayEmployees' );
    let el = $( '#employeeTable' );
    // empty table
    el.empty();
    // append table headers
    el.append( `<tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>ID</th>
            <th>Annual Salary</th>
            <th>Remove?</th>
        </tr>`);
    // loop through employees
    for( let i=0; i<employees.length; i++ ){
        // display a row 
        el.append( `<tr>
            <td>${ employees[i].firstName }</td>
            <td>${ employees[i].lastName }</td>
            <td>${ employees[i].title }</td>
            <td>${ employees[i].id }</td>
            <td>$${ Number( employees[i].annualSalary ).toFixed( 2 ) }</td>
            <td><button class="removeEmployeeButton">Remove</button></td>
        </tr>`);
    } // end for
} // end displayEmployees

function readyNow(){
    $( '#addEmployeeButton' ).on( 'click', addEmployee );
    $( '#employeeTable' ).on( 'click', '.removeEmployeeButton', removeEmployee );
} // end readyNow

function removeEmployee(){
    console.log( 'in removeEmployee:', $( this ) );
    $( this ).parent().parent().fadeOut( 500 );
} // end removeEmployee