/*
var Person = function(firstName) {
    this.firstName = firstName;
}

person = new Person("John");

Person.prototype.sayHello = function() {
    console.log("Hello "+this.firstName);
}



var person =  {firstName: "John"}

person.sayHello = function() {
    console.log("Hello "+this.firstName);
}


person.sayHello();
*/

/*
function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var arr = userDate.split("/");
    var result = arr[2].concat(arr[0].padStart(2,0),arr[1].padStart(2,0));
    return result;
  }
  
  
  console.log(formatDate("2/1/2014"));
  */

/*
 var person =  {
     firstName: "John",
     lastName: "Doe",
     age: 23,
     height: 173,
     weight: 71
 }

 var removeProperty = (obj, prop) => { delete obj[prop]; return obj;}

 console.log(person);
 removeProperty(person, 'weight');
 console.log(person);

 removeProperty(person, 'height');
 console.log(person);
 */

function createCheckDigit(membershipId) {
    // Write the code that goes here.
    /*
    if (isNaN(parseInt(membershipId))) {
      throw "Not a number";
      return;
    }
    */
    
    if (membershipId < 10) {
      return membershipId;
      
    } else {
      
      var dArr = membershipId.split('');
      var checkDigit = 0;
      for(var i = 0; i < dArr.length; i++) {
        checkDigit = checkDigit + parseInt(dArr[i]);
      }
      return createCheckDigit(checkDigit.toString());
    }
  }
  
  console.log(createCheckDigit("5888558"));


     


