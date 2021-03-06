  export function dateStart(e){
   // e.preventDefault();
    let d = new Date();
    console.log(" start date"+d)
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
    console.log(" start formate"+ newDate)
    document.getElementById('start').min=newDate;
  }


  export function dateReturn(e){
    // e.preventDefault();
     let d = document.getElementById('start').value;
     console.log("return start date"+d)
     
     document.getElementById('return').min=d;
   }
 
   export function format(date){
     console.log("formate edditing")
     let d=date.split("-");
     const year=d[0];
     const mon=d[1];
     const day=d[2];
     return `${d[1]}-${d[2]}-${d[0]}`
   }