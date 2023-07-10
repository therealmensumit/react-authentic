const Card = (props) => {
  return (
    <div className='col-span-3 lg:col-span-1 p-4 shadow-2xl shadow-[#0000004a] rounded-2xl text-center flex flex-col items-center gap-4 group hover:bg-blue'>
        <img className="w-24 group-hover:invert" src={props.img} alt={props.alt} />
        <h3 className="font-head text-blue text-2xl font-bold group-hover:text-orange">{props.title}</h3>
        <p className="text-blue group-hover:text-white">{props.para}</p>
    </div>
  )
}

export default Card