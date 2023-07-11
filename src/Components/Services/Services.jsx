import ServiceRow from './ServiceRow'
import Team from '../../assets/img/creative-team.svg'
import Website from '../../assets/img/Website.svg'
import DigitalMarketing from '../../assets/img/DigitalMarketing.svg'
import Designing from '../../assets/img/Designing.svg'
import Branding from '../../assets/img/Branding.svg'

const Services = () => {
  return (
    <div className="font-body">
      <div className="container mx-auto px-4 py-14">
        <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full md:w-6/12 px-4">
                <img src={Team} alt="" className='mx-auto' />
            </div>
            <div className="w-full md:w-6/12 px-4 md:text-start text-center">
                <h3 className="font-head text-blue text-4xl font-bold mb-3">How can <span className="text-orange">we help</span></h3>
                <p className="text-xl">We are One Stop Shop for all your digital needs! From <strong>website to digital marketing,</strong> we introduce relevant and significant changes that allow you to express your <strong>brand authentically</strong>!</p>
            </div>
        </div>
      </div>

        <section className="bg-[#eee]">
            <ServiceRow newClass={'md:text-start'} title={'website'} para={'We create a website that reflects you and your business! From domain to hosting, let us handle everything for you. Our website services include'} one={'Wordpress website design services'} two={'Website maintainance services'} three={'PHP web design and development'} four={'UI & UX design services'} five={'E-commerce website and design services'} img={Website} />
        </section>

        <ServiceRow newClass={'md:flex-row-reverse md:text-right'} title={'marketing'} para={'We provide digital marketing services that yield results around the clock! From organic to paid optimization to social media influencing, we do it all. Our Digital Marketing services cover'} one={'Social Media Marketing'} two={'SEO Services'} three={'ORM Services'} four={'Influencer Marketing'} five={'Paid Ads'} img={DigitalMarketing} />

        <section className="bg-[#eee]">
            <ServiceRow newClass={'md:text-start'} title={'designing'} para={'Wish to have designs that leave everyone spellbound? Say no more! Our talented team of designers are here to curate designs in multiple domains. Our designing services cover:'} one={'Brochure Design'} two={'Catalogue Design'} three={'UI & UX design services'} four={'Email Designing'} five={'Portfolio Designing'} img={Designing} />
        </section>

        <ServiceRow newClass={'md:flex-row-reverse md:text-right'} title={'branding'} para={'Sell off your brand like never before! Become a label and let your brand speak for you while you work on the core areas. Have a look at our branding services:'} one={'Brand Consultation'} two={'Logo Design'} three={'Graphic Designing'} img={Branding} />
    </div>
  )
}

export default Services