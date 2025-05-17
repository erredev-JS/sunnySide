import useStoreModal from "../../store/useStoreModal";
import { HamburgerModal } from "../ui/HamburgerModal/HamburgerModal";
import { Header } from "../ui/Header/Header";
import { SectionImgText } from "../ui/SectionImgText/SectionImgText";




export const MainScreen = () => {

  const {showModal} = useStoreModal()

  return (
    <div>
        <Header/>




        <SectionImgText/>



        {showModal && <HamburgerModal/>}

        
    </div>
  );
};