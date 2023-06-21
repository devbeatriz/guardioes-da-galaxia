const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0
const images = document.getElementById('images')

function navigationMember(direction) {
  activeMember = activeMember + direction

  const member = members[activeMember]

  console.log(activeMember, member);

  images.style.transform = `translateY(${-100 * activeMember}vh)` 
}