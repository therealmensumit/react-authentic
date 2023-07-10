import { Link } from "react-router-dom";

const Card2 = (props) => {
  return (
    <div className='col-span-4 md:col-span-2 lg:col-span-1 rounded-3xl border-2 border-white overflow-hidden even:mt-12 odd:self-start'>
        <img className="w-full rounded-xl" src={props.img} alt={props.alt} />
        <div className="p-4">
            <h3 className="font-head text-white text-2xl font-semibold mb-1">{props.title}</h3>
            <p className="text-white">{props.para} <Link to={props.read} className="text-orange inline hover:opacity-75">Read More...</Link></p>
        </div>
    </div>
  )
}

export default Card2