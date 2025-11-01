
let displaydata = JSON.parse(localStorage.getItem('mosquedata')) || [];
console.log("Loaded Mosque Data:", displaydata);


function displayingdata() {
  let clutter = ``;

  displaydata.forEach((element, index) => {
   
    let membersHTML = ``;
    if (Array.isArray(element.mmembers)) {
      element.mmembers.forEach(mem => {
        membersHTML += `<div class="memb1">${mem.name} <span class="ml-5">${mem.Numbe}</span></div>`;
      });
    }

  
    clutter += `
      <div class="flex items-center justify-center">
        <div class="appstatus md:mt-10 mt-5 w-full bg-gray-100 shadow-xl p-5 md:w-[80%] md:flex rounded">
          <div class="md:w-[80%] justify-center items-center flex-col md:justify-start md:items-start">
            <h1 class="text-xl md:text-2xl font-bold text-blue-600">Mosque Details</h1>
            <div class="statustextview mt-2 md:block flex flex-col w-full">
              <div><h2 class="inline-block font-bold">Application Id :</h2> <span>${element.appid}</span></div>
              <div><h2 class="inline-block font-bold">Mosque Name :</h2> <span>${element.mname}</span></div>
              <div><h2 class="inline-block font-bold">District :</h2> <span>${element.mdist}</span></div>
              <div><h2 class="inline-block font-bold">Contact Phone :</h2> <span>${element.mcontactno}</span></div>
              <div id="moredetails" class="hidden transition ease-in">
                <div><h2 class="inline-block font-bold">Ward :</h2> <span>${element.mwardno}</span></div>
                <div><h2 class="inline-block font-bold">Email :</h2> <span>${element.memailid}</span></div>
                <div><h2 class="inline-block font-bold">Address :</h2> <span>${element.maddress}</span></div>
                <div><h2 class="inline-block font-bold">Members :</h2> 
                  <div class="members flex flex-col">
                    ${membersHTML || '<div class="text-gray-500">No members listed</div>'}
                  </div>
                   <p class="mt-3"><strong>Status:</strong> <span class="text-blue-700">${element.approvalstatus}</span></p>
                </div>
              </div>
             
              <button class="border-2 p-2 mt-5 rounded border-blue-600 text-blue-600 hover:bg-blue-100 cursor-pointer hover:shadow-xl/20 shadow-blue-600 " onclick="showdetails()">More Details</button>
              <button class="border-2 p-2 mt-5 rounded border-orange-600 text-orange-600 hover:bg-orange-100 cursor-pointer md:ml-5 hover:shadow-xl/20 shadow-orange-600">View Documentations</button>
            </div>
          </div>
          <div class="flex justify-center items-end gap-5 md:w-[60%]">
            <button class="border-2 flex justify-center items-center w-[50%] h-10 p-2 mt-5 rounded border-green-600 text-green-600 hover:bg-green-100 cursor-pointer font-semibold hover:shadow-xl/20 shadow-green-600"
              onclick="updateStatus(${index}, 'approved')">ACCEPT</button>
            <button class="border-2 flex justify-center items-center w-[50%] h-10 p-2 mt-5 rounded border-red-600 text-red-600 hover:bg-red-100 cursor-pointer font-semibold hover:shadow-xl/20 shadow-red-600"
              onclick="updateStatus(${index}, 'rejected')">REJECT</button>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.dispalydat').innerHTML = clutter;
}


function updateStatus(index, status) {
  displaydata[index].approvalstatus = status;
  localStorage.setItem('mosquedata', JSON.stringify(displaydata));
  console.log(`Application ${displaydata[index].appid} marked as ${status}`);
  displayingdata();
}


function showdetails(){
  
  document.querySelector('#moredetails').style.display="block";
}
function membdata() {
  
  displaydata.forEach(mosque => {
    console.log("Mosque:", mosque.mname);
    if (Array.isArray(mosque.mmembers)) {
      mosque.mmembers.forEach(member => {
        console.log("Member Name:", member.name, " | Number:", member.Numbe);
      });
    }
  });
}


membdata();
displayingdata();
