import placeList from "../lib/data/placeList.js"
import eventList from "../lib/data/eventList.js"

const places = document.querySelector('#places')
const events = document.querySelector('#events')

for(let i = 0; i < 2; i++) {
  const {name, img, url} = placeList[i]
  const content = `<a class="relative overflow-hidden rounded-md aspect-square" href="${url}"><img src="${img}" class="object-cover w-full h-full"/><div class="absolute bottom-0 w-full h-12 bg-[#00000040] z-1"></div> <p class="absolute m-2 bottom-0 text-white text-lg font-bold z-2">${name}</p></a>`
  places.insertAdjacentHTML('beforeend', content)
}

for(let i = 0; i < 2; i++) {
  const {name, img, url} = eventList[i]
  const content = `<a class="relative overflow-hidden rounded-md aspect-square" href="${url}"><img src="${img}" class="object-cover w-full h-full"/><div class="absolute bottom-0 w-full h-12 bg-[#00000040] z-1"></div> <p class="absolute m-2 bottom-0 text-white text-lg font-bold z-2">${name}</p></a>`
  events.insertAdjacentHTML('beforeend', content)
}