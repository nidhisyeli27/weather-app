let d = new Date();
let newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();

// Event listener to add function to existing HTML DOM element

// Function called by event listener
export async function handleSubmit(e){
    const city=document.getElementById('city').value;  
    let startdate=document.getElementById('start').value;  
    let returnDate=document.getElementById('return').value;  

    
    const tripStart = Date.parse(startdate);
    const tripEnd = Date.parse(returnDate);
    const today =Date.parse(newDate);
    const tripCount = tripEnd - tripStart;
    const noOfDays = Math.ceil(tripCount / 86400000)+1;
    const countDown = tripStart-today;
    const daysLeft=Math.ceil(countDown / 86400000);
    startdate=Client.format(startdate);
    returnDate=Client.format(returnDate);
    console.log("days"+daysLeft);

    e.preventDefault();
    
    fetch("http://localhost:8000/add", {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
         "Content-Type": "application/json",
            },
            body: JSON.stringify({ city,startdate,returnDate,noOfDays,daysLeft}),
        })

      console.log("data is sent");
      await callServer(`http://localhost:8000/geonames`);
      console.log("data is found")
      await callServer(`http://localhost:8000/weatherbit`);
      await callServer(`http://localhost:8000/pixabay`);
      
      const getPlanData = await callServer(`http://localhost:8000/load`);

      console.log(getPlanData);
      updateUI(getPlanData)
     console.log("::: Form Submitted :::")

    set.reset();
      
}



// Function to GET Project Data 
async function updateUI(res) {
  console.log("final update"+res)
  document.getElementById('section2').style.display='block';
  document.querySelector('.city1').innerHTML=` ${res.city},`;
  document.querySelector('.state').innerHTML=` ${res.state},`;
  document.querySelector('.country').innerHTML=` ${res.country}`;
  document.querySelector('.startdate').innerHTML=`Start Date: ${res.startdate}`;
  document.querySelector('.returnDate').innerHTML=`End Date: ${res.returnDate}`;
  document.querySelector('.noOfDays').innerHTML=` Duration of the trip ${res.noOfDays} days`;
  document.querySelector('.daysLeft').innerHTML=`Trip starts in ${res.daysLeft} days`;
  document.querySelector('.temp').innerHTML=`${Math.floor(res.temp)} °C`;  
  document.querySelector('.desc').innerHTML=`Mostly ${res.desc}`;   
  document.querySelector('.icon').setAttribute('src',`./imgs/${res.icon}.png`);  
  document.querySelector('.image1').setAttribute('alt',`Photo of ${res.city} `);  
  document.querySelector('.icon').setAttribute('alt',"icon"); 
  document.querySelector('.image1').setAttribute('src',res.image1); 

}


export const callServer = async(url) => {
console.log("start of call");

  const asyncParams = {
    
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
  };
  console.log("mid of call");
    const res = await fetch(url, asyncParams);
      try{
        const data = await res.json();
        console.log("end of call"+data);
        return data;
        
      } 
      catch {
        console.log(`Error: ${res.statusText}`)
      }
}
