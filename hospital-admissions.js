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


const displayAdmissions = () => {
  let i = 0;
  const log = admissions.length;
  console.log(
    "Patient Name         Attending     Admit Time      Discharge Time Physician\n===========================================================================\n")
  while (i < log) {
    console.log(admissions[i].patientName + '    ' + admissions[i].attendingPhysician + '    ' + admissions[i].admitTime + '    ' + admissions[i].dischargeTime);
    i += 1;
  }
}

displayAdmissions();
