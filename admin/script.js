let displaydata = JSON.parse(localStorage.getItem('mosquedata')) || [];
console.log(displaydata);

function displayingdata() {
  let clutter = ``;
  displaydata.forEach((element, index) => {
    clutter += `
      <div class="flex items-center justify-center">
        <div class="appstatus md:mt-10 mt-5 w-full bg-gray-100 shadow-xl p-5 md:w-[80%] md:flex rounded">
          <div class="md:w-[80%] justify-center items-center flex-col md:justify-start items-start">
            <h1 class="text-xl md:text-2xl font-bold text-blue-600">Mosque Details</h1>
            <div class="statustextview mt-2 md:block flex flex-col w-full">
              <div><h2 class="inline-block font-bold">Application Id :</h2> <span>${element.appid}</span></div>
              <div><h2 class="inline-block font-bold">Mosque Name :</h2> <span>${element.mname}</span></div>
              <div><h2 class="inline-block font-bold">District :</h2> <span>${element.mdist}</span></div>
              <div><h2 class="inline-block font-bold">Contact Phone :</h2> <span>${element.mcontactno}</span></div>
              <button class="border-2 p-2 mt-5 rounded border-blue-600 text-blue-600 hover:bg-blue-100 cursor-pointer">View Members details</button>
              <button class="border-2 p-2 mt-5 rounded border-orange-600 text-orange-600 hover:bg-orange-100 cursor-pointer md:ml-5">View Documentations</button>
            </div>
          </div>
          <div class="flex justify-center items-end gap-5 md:w-[60%]">
            <button class="border-2 flex justify-center items-center w-[50%] h-10 p-2 mt-5 rounded border-green-600 text-green-600 hover:bg-green-100 cursor-pointer font-semibold"
              onclick="updateStatus(${index}, 'approved')">ACCEPT</button>
            <button class="border-2 flex justify-center items-center w-[50%] h-10 p-2 mt-5 rounded border-red-600 text-red-600 hover:bg-red-100 cursor-pointer font-semibold"
              onclick="updateStatus(${index}, 'rejected')">REJECT</button>
          </div>
        </div>
      </div>`;
  });
  document.querySelector('.dispalydata').innerHTML = clutter;
}

function updateStatus(index, status) {
  // update the status in the array
  displaydata[index].approvalstatus = status;

  // update the same data in localStorage
  localStorage.setItem('mosquedata', JSON.stringify(displaydata));

  console.log(`Application ${displaydata[index].appid} marked as ${status}`);
}

displayingdata();
