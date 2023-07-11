import {Link} from 'react-router-dom'

const ServiceRow = (props) => {
  return (
    <div className="container mx-auto px-4 py-14">
      <div className={`flex flex-wrap gap-y-4 -mx-4 items-center text-center ${props.newClass}`}>
        <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-col gap-4">
                <h2 className='uppercase font-bold text-5xl text-blue'>{props.title}</h2>
                <p className='text-lg'>{props.para}</p>
                <ul className="flex flex-col gap-2">
                    <li className="text-blue text-xl font-bold">{props.one}</li>
                    <li className="text-blue text-xl font-bold">{props.two}</li>
                    <li className="text-blue text-xl font-bold">{props.three}</li>
                    <li className="text-blue text-xl font-bold">{props.four}</li>
                    <li className="text-blue text-xl font-bold">{props.five}</li>
                </ul>
                <div>
                    <Link to={'/contact-us'} className='px-8 py-2 inline-block bg-blue text-white hover:bg-orange'>Enquire Now</Link>
                </div>
            </div>
        </div>
        <div className="w-full md:w-6/12 px-4">
            <img src={props.img} alt="" className="mx-auto rounded-xl w-full" />
        </div>
      </div>
    </div>
  );
};

export default ServiceRow;
