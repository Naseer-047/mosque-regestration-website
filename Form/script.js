let Members = [];
let allData=JSON.parse(localStorage.getItem("mosquedata")) || [];
let regNo,mosquename, district, ward, phone, email, address,pdf;
function getRandomDecimal(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(); 

function memberaddn() {
  let membdat = {
    name: document.querySelector('#membername').value.trim(),
    Numbe: document.querySelector('#memberpn').value.trim(),
  };

  if (membdat.name && membdat.Numbe) {
    Members.push(membdat);
    displayMembers();
    console.log(Members);
    document.querySelector('#membername').value = '';
    document.querySelector('#memberpn').value = '';
  }
}


function displayMembers() {
  let dispMember = ``;

  Members.forEach((memb, index) => {
    dispMember += `
      <div class="flex items-center justify-between bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 mb-2 transition-all hover:shadow-md">
        <div class="flex items-center space-x-3">
          <span class="text-xl font-semibold text-blue-600">${index + 1}</span>
          <h1 class="font-bold text-lg text-gray-800">${memb.name}</h1>
          <h3 class="text-gray-600">${memb.Numbe}</h3>
        </div>
        <div class="flex gap-2">
          <input type="button" value="Edit"
            class="border px-4 py-1 rounded border-gray-400 text-gray-700 hover:bg-gray-100 cursor-pointer"
            onclick="editMember(${index})">
          <input type="button" value="Delete"
            class="border px-4 py-1 rounded border-red-500 text-red-600 hover:bg-red-100 cursor-pointer"
            onclick="deleteMember(${index})">
        </div>
      </div>
    `;
  });

  document.querySelector('#memb').innerHTML = dispMember;
}


function takeInputDataAndDisplay() {
  mosquename = document.querySelector('#mname').value;
  district = document.getElementById('mdistrict').value;
  ward = document.getElementById('mward').value;
  phone = document.getElementById('mphone').value;
  email = document.getElementById('memale').value;
  address = document.getElementById('maddress').value;
  pdf=document.getElementById('pdf').value;
  console.log(mosquename, district, ward, phone, email, address);

 
  document.getElementById('pname').innerText = mosquename;
  document.getElementById('pstate').innerText = district;
  document.getElementById('pward').innerText = ward;
  document.getElementById('pno').innerText = phone;
  document.getElementById('pemail').innerText = email;
  document.getElementById('padd').innerText = address;
  if (pdf!='') {
    document.getElementById('pdfstatus').innerText='True'
    pdfstatus.style.color='green';
  }
  else{
    document.getElementById('pdfstatus').innerText='False'
    pdfstatus.style.color='red';
  }

  
  let clutter = ``;
  Members.forEach((mem, i) => {
    clutter += `
      <div class="member1 flex justify-evenly font-semibold ">
        <h1 class="w-[50%]"><span class="mr-2 font-bold ">${i + 1}</span> ${mem.name}</h1>
        <h3 class="w-[50%]">${mem.Numbe}</h3>
      </div>`;
  });
  document.getElementById('membersofprewiew').innerHTML = clutter;
}


function deleteMember(index) {
  Members.splice(index, 1);
  displayMembers();
}


function editMember(index) {
  document.querySelector('#membername').value = Members[index].name;
  document.querySelector('#memberpn').value = Members[index].Numbe;
  Members.splice(index, 1);
  displayMembers();
}


function previvewClick() {
  if (address==''||mosquename==''||phone=='') {
    alert('plese fill the required fielsd')
  }
  else{
  document.querySelector('#main').style.display = 'none';
  const preview = document.querySelector('#preview');
  preview.classList.remove('hidden'); 
  preview.style.display = 'block';
  }
}
regNo=parseInt(getRandomDecimal(250001000,567990345 ))
  console.log(regNo);
  document.getElementById('appid').innerText=regNo;
function finalSubmit(){
  previvewClick()
let fdata=
  {
    appid:regNo,
    mname:mosquename,
    mdist:district,
    mwardno:ward,
    mcontactno:phone,
    memailid:email,
    maddress:address,
    mmembers:Members,
    approvalstatus:'',
  }

  allData.push(fdata);
localStorage.setItem('mosquedata',JSON.stringify(allData))
console.log(allData);
window.location.reload()
}


function prewEditClick() {
  const preview = document.querySelector('#preview');
  preview.style.display = 'none';
  document.querySelector('#main').style.display = 'block';
  
  
}


function convertPdf() {
  if (!window.domtoimage) {
    alert("PDF library not loaded. Please check your script include.");
    return;
  }

  const element = document.getElementById('pdfsection');
  domtoimage.toPng(element, { quality: 1, bgcolor: 'white' })
    .then(function (dataUrl) {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Mosque_Registration.pdf');
    })
    .catch(function (error) {
      console.error('PDF generation failed:', error);
    });
}

(function () {
  if (typeof LocomotiveScroll !== 'undefined') {
    const locomotiveScroll = new LocomotiveScroll();
  }
})();
