import useStoreModal from "../../../store/useStoreModal"


export const Header = () => {
  const {setShowModal, showModal} = useStoreModal()
  return (
    <>
    <header className="py-3 px-6 justify-between items-center bg-transparent absolute top-0 flex w-[100%]">
        <h1 className="text-white font-bold text-xl">sunnyside</h1>
        <nav>
          {!showModal && <img src="/images/icon-hamburger.svg" alt="" onClick={() => setShowModal(true)}/>}
          
          </nav>
    </header>
    <h2 className="absolute top-[25%] left-1/2 -translate-x-1/2 text-white text-6xl font-extrabold">
    WE ARE <span className="tracking-wide">CREATIVES</span> <span className="opacity-35 tracking-wide">CREATIVES</span> <span className="opacity-15 tracking-wide">CREATIVES</span>
    </h2>


        <img src="/images/mobile/image-header.jpg" alt="" className="h-[100dvh] w-[100%] object-cover"/>
    </>
  )
}
