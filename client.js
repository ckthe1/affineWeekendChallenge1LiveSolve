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
    // update Monthly salaries on DOM
    let el = $( '#monthlyOut' );
    el.empty();
    el.append( totalMonthlySalaries.toFixed( 2 ) );
    // update DOM
} // end add Employee

function readyNow(){
    $( '#addEmployeeButton' ).on( 'click', addEmployee );
} // end readyNow