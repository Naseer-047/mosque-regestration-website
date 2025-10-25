let Members = [];

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
function previvewClick(){
    document.querySelector('#main').style.display='none'
    document.querySelector('#preview').style.display='block'
}
function prewEditClick(){
    document.querySelector('#preview').style.display='none'
     document.querySelector('#main').style.display='block'
}
(function () {
  if (typeof LocomotiveScroll !== 'undefined') {
    const locomotiveScroll = new LocomotiveScroll();
  }
})();
