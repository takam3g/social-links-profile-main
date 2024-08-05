function Card({ profile }) {
const { avaterImg, name, location, subline, sns } = profile;

  return (
    <div className="flex flex-col items-center bg-secondary-darkgrey text-white rounded px-12 py-8 justify-self-center">
      <img src={avaterImg} alt={`avatar of ${name}`} className="rounded-full size-20 mb-4"/>
      <h2 className="text-2xl mb-2">{name}</h2>
      <p className="font-bold text-primary text-xs mb-6">{location}</p>
      <p className="text-xs mb-4">&quot;{subline}&quot;</p>
      <ul className="space-y-4 w-full">
        {sns.map(item => <li key={item.platform} className="btn"><a href={item.link} target="_blank">{item.platform}</a></li>)}
      </ul>
    </div>
  )
}

export default Card