import useStoreModal from "../../../store/useStoreModal"

export const HamburgerModal = () => {
  const {setShowModal} = useStoreModal()
  return (
    <div className="absolute right-0 top-0 bottom-0 bg-black w-[50%] opacity-70 flex align-middle justify-center text-center">
        <button className="bg-red-500 h-[30px] w-[30px] absolute right-0 mt-3 mr-5 text-white" onClick={() => setShowModal(false)} >X</button>
        <nav className="mt-12 flex flex-col gap-8 w-[100%]">
       <a className="text-white hover:bg-blue-300 hover:text-black font-bold p-2">About</a>
       <a className="text-white hover:bg-blue-300 hover:text-black font-bold p-2">Services</a>
       <a className="text-white hover:bg-blue-300 hover:text-black font-bold p-2">Projects</a>
       <a className="text-white hover:bg-blue-300 hover:text-black font-bold p-2">Contacts</a>
        </nav>

    </div>
  )
}
