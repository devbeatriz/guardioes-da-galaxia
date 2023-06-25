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

function changeStatusButtons() {
  const prev = document.getElementById('button__prev')
  const isFirst =  activeMember == 0
  prev.disabled =  isFirst

  const next = document.getElementById('button__next')
  const isLast = activeMember == members.length - 1
  next.disabled = isLast
}

function navigationMember(direction) {
  activeMember = activeMember + direction

  const member = members[activeMember]

  console.log(activeMember, member);

  images.style.transform = `translateY(${-100 * activeMember}vh)`

  changeStatusButtons()
}