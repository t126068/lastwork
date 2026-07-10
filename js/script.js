const placeList = [
  {
    name: '高島城',
    img: 'images/bl-023-1.webp',
    url: 'place/takashimajou/',
  },
  {
    name: '諏訪大社下社秋宮',
    img: 'images/bl-035-1.webp',
    url: 'place/suwa-shrine/',
  },
  {
    name: '諏訪湖',
    img: 'images/34623407_m.webp',
    url: 'place/suwalake/',
  },
  {
    name: 'SUWAガラスの里',
    img: 'images/bl-027-1.webp',
    url: 'place/suwa-glass/',
  },
]

const eventList = [
  {
    name: '茅野どんばん',
    img: 'images/noimage.webp',
    url: 'place/tino-donban/',
  },
  {
    name: '諏訪湖祭湖上花火大会',
    img: 'images/hnb0034-049.webp',
    url: 'events/suwa-lake-hanabi/',
  },
]

const places = document.querySelector('#places')
const events = document.querySelector('#events')

for(let i = 0; i < 4; i++) {
  const {name, img, url} = placeList[i]
  const content = `<a class="relative overflow-hidden rounded-md aspect-square" href="${url}"><img src="${img}" class="object-cover w-full h-full"/><div class="absolute bottom-0 w-full h-12 bg-[#00000040] z-1"></div> <p class="absolute m-2 bottom-0 text-white text-lg font-bold z-2">${name}</p></a>`
  places.insertAdjacentHTML('beforeend', content)
}

for(let i = 0; i < 2; i++) {
  const {name, img, url} = eventList[i]
  const content = `<a class="relative overflow-hidden rounded-md aspect-square" href="${url}"><img src="${img}" class="object-cover w-full h-full"/><div class="absolute bottom-0 w-full h-12 bg-[#00000040] z-1"></div> <p class="absolute m-2 bottom-0 text-white text-lg font-bold z-2">${name}</p></a>`
  events.insertAdjacentHTML('beforeend', content)
}