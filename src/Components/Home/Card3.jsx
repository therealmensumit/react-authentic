const Card3 = (props) => {
  return (
    <div className='col-span-3 p-4 bg-blue lg:col-span-1 rounded-tl-[50px] rounded-br-[50px] text-center relative before:absolute before:w-full before:h-full before:border-2 before:border-orange before:-z-[1] md:before:left-5 before:left-2 md:before:top-6 before:top-4 before:rounded-br-[50px]'>
        <img className="mx-auto" src={props.img} alt={props.alt} />
        <div className="p-4">
            <h3 className="font-head text-white text-2xl font-semibold mb-1">{props.title}</h3>
            <p className="text-white">{props.para}</p>
        </div>
    </div>
  )
}

export default Card3