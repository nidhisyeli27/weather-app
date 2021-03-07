export function dateStart(e){
  let d = new Date();
  let date=d.getDate().toString();
  let mon=(d.getMonth() + 1).toString() ;
  let year=d.getFullYear().toString();
  if(date.length==1){
    date=`0${date}`
  }
  if(mon.length==1){
    mon=`0${mon}`
  }
  let newDate = year +'-'+mon+ '-' + date ; 
  document.getElementById('start').setAttribute('min',newDate);
}


export function dateReturn(e){
   let d = document.getElementById('start').value;     
  document.getElementById('return').setAttribute('min',d);
}
 
export function format(date){
  let d=date.split("-");
  const year=d[0];
  const mon=d[1];
  const day=d[2];
  return `${d[1]}-${d[2]}-${d[0]}`
}