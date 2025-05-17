
export const SectionImgText = () => {
  return (
    <section className="h-[250vh]">
        <div>
            <div>
                <img src="./images/mobile/image-transform.jpg" alt="" />
            </div>
            <div className="p-3 pt-12 text-center flex flex-col gap-6">
                <h1 className="text-5xl text-gray-700 font-black">Transform your brand</h1>
                <p className="text-2xl text-gray-500 font-bold">We are a full-service creative agency specializing in helping brands grow fast. <br /> Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <div className="flex  justify-center w-[33%] m-auto flex-col">
                <a href="" className="font-black">LEARN MORE</a>
                <div className="h-[5px] bg-amber-200 w-[100%] rounded pb-1.5 opacity-50"></div>
                </div>
            </div>

        </div>
        <div>

            <div>
               <img src="./images/mobile/image-stand-out.jpg" alt="" />
            </div>
             <div className="p-3 pt-12 text-center flex flex-col gap-6">
                <h1 className="text-5xl text-gray-700 font-black">Stand out to the right audience</h1>
                <p className="text-2xl text-gray-500 font-bold">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we´ll build and extend your brand in digital places.</p>
                <div className="flex  justify-center w-[33%] m-auto flex-col">
                <a href="" className="font-black">LEARN MORE</a>
                <div className="h-[5px] bg-rose-200 w-[100%] rounded pb-1.5 opacity-50"></div>
                </div>
            </div>


            <div>
                <div className="bg-[url('./images/mobile/image-graphic-design.jpg')] h-[80vh] bg-cover bg-center">
                <div className="text-center pt-[45vh]">

                <h1 className="text-4xl font-black  text-gray-700 ">Graphic Design</h1>
                <p className="text-2xl text-gray-500 font-bold pt-4">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.</p>
                </div>
                </div>
                <div>
                <div className="bg-[url('./images/mobile/image-photography.jpg')] h-[100vh] bg-cover bg-center">
                <div className="text-center pt-[60vh]">

                <h1 className="text-4xl font-black  text-gray-700 ">Photography</h1>
                <p className="text-2xl text-gray-500 font-bold pt-4">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
