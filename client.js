$( document ).ready( readyNow );

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
    // calculate monthly salary
} // end add Employee

function readyNow(){
    $( '#addEmployeeButton' ).on( 'click', addEmployee );
} // end readyNow