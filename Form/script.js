let Members = [];
let mosquename, district, ward, phone, email, address;


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

  console.log(mosquename, district, ward, phone, email, address);

  // 🧩 Update Preview fields
  document.getElementById('pname').innerText = mosquename;
  document.getElementById('pstate').innerText = district;
  document.getElementById('pward').innerText = ward;
  document.getElementById('pno').innerText = phone;
  document.getElementById('pemail').innerText = email;
  document.getElementById('padd').innerText = address;

  
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
  document.querySelector('#main').style.display = 'none';
  const preview = document.querySelector('#preview');
  preview.classList.remove('hidden'); // Important fix for Tailwind 'hidden'
  preview.style.display = 'block';
}

// 🧩 Back to Edit
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
