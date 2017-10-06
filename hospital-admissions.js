class Admission {
  constructor(patientName, attendingPhysician, admitTime, dischargeTime = null){
    this.patientName = patientName;
    this.attendingPhysician = attendingPhysician;
    this.admitTime = admitTime;
    this.dischargeTime = dischargeTime;
  }
}

const amanuel = new Admission('Amanuel Yihdego', 'Elesa Mengesha',"2016-01-01 16:45");

console.log(amanuel.patientName);
console.log(amanuel.attendingPhysician);
console.log(amanuel.admitTime);
console.log(amanuel.dischargeTime);
