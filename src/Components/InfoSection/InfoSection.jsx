import chefServiceImage from '../../assets/home/chef-service.jpg';

const InfoSection = () => {
    return (
        <div className="bg-cover h-[532px] py-40 bg-center mb-10" style={{backgroundImage: `url(${chefServiceImage})`}}>
            <div className='w-9/12 mx-auto bg-white py-10 px-8 text-center space-y-2'>
                <h3 className='text-3xl'>Bistro Boss</h3>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default InfoSection;