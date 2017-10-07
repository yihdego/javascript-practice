class Person {
  constructor(name){
    this.name = name;
  }
}

class Employee extends Person {
  constructor(name, position){
    super(name)
    this.position = position;
  }
}

const admissions = [];
class Admission {
  constructor(patientName, attendingPhysician, admitTime, dischargeTime = "" ){
    this.patientName = patientName;
    this.attendingPhysician = attendingPhysician;
    this.admitTime = admitTime;
    this.dischargeTime = dischargeTime;
    admissions.push(this);
  }
}

const amanuel = new Admission('Amanuel Yihdego', 'Elesa Mengesha',"2016-01-01 16:45");

const taylor = new Admission('Taylor Whathisname', 'Dr. Suess', "friday the 13ths", "thursday the 12th")

const mcdonald = new Admission('Old McDonald', 'Elesa Mengesha', "April Fools", "April 4th")

const displayAllAdmissions = () => {
  let i = 0;
  const log = admissions.length;
  console.log(
    "Patient Name         Attending     Admit Time      Discharge Time Physician\n===========================================================================\n")
  while (i < log) {
    console.log(admissions[i].patientName + '    ' + admissions[i].attendingPhysician + '    ' + admissions[i].admitTime + '    ' + admissions[i].dischargeTime);
    i += 1;
  }
}

displayAllAdmissions();

const displaySomeAdmissions = (some) => {
  let i = 0;
  const log = some.length;
  console.log(
    "Patient Name         Attending     Admit Time      Discharge Time Physician\n===========================================================================\n")
  while (i < log) {
    console.log(some[i].patientName + '    ' + some[i].attendingPhysician + '    ' + some[i].admitTime + '    ' + some[i].dischargeTime);
    i += 1;
  }
}

const findAttribute = (attribute, value) => {
  let i = 0;
  const some = [];
  const log = admissions.length;
  while (i < log ) {
    if (admissions[i][attribute] === value) {
      some.push(admissions[i])
    }
      i += 1;
  }
  displaySomeAdmissions(some);
}

findAttribute('attendingPhysician', "Elesa Mengesha")
findAttribute('patientName', 'Amanuel Yihdego')
