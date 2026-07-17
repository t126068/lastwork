import eventList from "/lastwork/lib/data/eventList.js"

const Events = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-12 my-4 max-w-[800px]"> 
      {eventList.map((place, index) => {
        const { name, img, url } = place;
        return (
          <a 
            key={index} 
            className="relative overflow-hidden rounded-md aspect-square" 
            href={url}
          >
            <img src={img} className="object-cover w-full h-full" alt={name} />
            <div className="absolute bottom-0 w-full h-12 bg-[#00000040] z-[1]"></div> 
            <p className="absolute m-2 bottom-0 text-white text-lg font-bold z-[2]">{name}</p>
          </a>
        )
      })}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('events'));
root.render(<Events />)