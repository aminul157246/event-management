
const Progress = () => {
    return (
        <div className='lg:flex bg-blue-50 mx-12 p-12 justify-center my-16 gap-16'>
            <div className='space-y-3'>
                <p className='text-[#F4A492] text-xl    '>Bridely Fun Facts</p>
                <h2 className='text-3xl lg:text-6xl font-bold'>Exploring our <br />  Wedding Service</h2>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipiscin gelit <br /> sed doeiusm tempor incididunt</p>

            </div>


            <div className='space-y-3 mt-12 lg:mt-0'>
                <div>
                    <p className="text-xl">Guarantee</p>
                    <progress className="progress progress-success lg:w-96" value="70" max="100"></progress>
                </div>

                <div>
                    <p className="text-xl">Experience And Quality</p>
                    <progress className="progress progress-success  lg:w-96" value="80" max="100"></progress>
                </div>

                <div>
                    <p className="text-xl">Food Ordering</p>
                    <progress className="progress progress-success lg:w-96" value="90" max="100"></progress>
                </div>

                <div>
                <p className="text-xl">Professionality</p>
                <progress className="progress progress-success lg:w-96" value="100" max="95"></progress>
                </div>
            </div>

        </div>
    );
};

export default Progress;