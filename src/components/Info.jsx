function Info(){
    return(
        <div className="flex flex-col justify-center items-center  bg-Mirage mx-auto text-white ">
            <figure >
                <img className="h-auto  max-w-full rounded-lg" src="/girl.svg" alt="image description"/> 
            </figure>
            <h1 className="text-2xl font-bold mt-5">Laura Smith</h1>
            <h3 className="text-sm text-Cashmere  ">Fronted Developer</h3>
            <a href="www.google.com" className="my-2 text-xs">laurasmit.website</a>
            <div className="flex flex-row gap-2 mt-2 mx-auto mb-4">
                <a href="http://www.gmail.com"><button className="px-7 py-2  mb-2 inline-flex hover:shadow-md  shadow-sm hover:shadow-gray-700  focus:outline-none  items-center rounded-lg bg-white text-black "><img className="pr-2" src="/Mail.svg" alt="mail-logo"  /><span>Email</span></button></a>
                <a href="http://www.linkedin.com"><button className="px-5 mb-2  py-2 inline-flex hover:shadow-md  shadow-sm hover:shadow-gray-700  focus:outline-none  items-center bg-blue-500 rounded-lg transition duration-150 ease-in-out"><img className='pr-2' src="/linkedin.svg" alt="mail-logo" /><span>LinkedIn</span></button></a>
            </div>
        </div>
    )
}

export default Info