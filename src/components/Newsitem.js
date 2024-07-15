import React from 'react'


const Newsitem=(props)=> {
   
        // we are using props here 
        let { title, description, imageurl, newsurl, author, publishedAt } = props;
        return (

            <div className="  relative flex w-[370px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  mt-12 ">
                <div className="sm:mx-0 lg:relative mx-4 mt-5 h-[12rem] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img className='h-[inherit]'

                        src={!imageurl ? "https://img.etimg.com/thumb/msid-100396258,width-1070,height-580,imgsize-455926,overlay-etmarkets/photo.jpg" : imageurl}
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {description}...
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <a
                        href={newsurl}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                        data-ripple-light="true"
                    >
                        Read More
                    </a>
                    <p className="block font-sans  text-sm leading-relaxed text-inherit antialiased mt-4 ">
                        By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}
                    </p>
                </div>
            </div>
        )
    }


export default Newsitem
