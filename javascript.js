 var mydata = JSON.parse(data);
// alert(mydata[0].name);
// alert(mydata[1].name);

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
//document.write(today);


const compareDates = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  if (date1 < date2) {
    console.log(`Etwas spät, oder?`);
  } else if (date1 > date2) {
    console.log(`Du bist zu früh dran.`);
  } else {
    console.log(`Bitte sehr`);
  }
};

var testDate = "12/01/2023";
const  result= compareDates(today, testDate);
alert(result);

