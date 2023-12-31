import { Link } from "react-router-dom";

const Card2 = (props) => {
  return (
    <div className='col-span-4 md:col-span-2 lg:col-span-1 rounded-3xl border-2 border-white overflow-hidden lg:even:mt-12 lg:odd:self-start group'>
        <img className="w-full rounded-xl group-hover:scale-110 transition-all" src={props.img} alt={props.alt} />
        <div className="p-4">
            <h3 className="font-head text-white text-2xl font-semibold mb-1">{props.title}</h3>
            <p className="text-white">{props.para} <Link to={'/services'} className="text-orange inline hover:opacity-75">Read More...</Link></p>
        </div>
    </div>
  )
}

export default Card2