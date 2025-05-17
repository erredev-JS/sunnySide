import {create} from 'zustand'



interface useStoreModal {
    showModal : boolean,
    setShowModal: (state: boolean) => void
}


const useStoreModal = create<useStoreModal>((set) => ({
    showModal : false,
    setShowModal: (state) => set(() => ({ showModal: state}))

}))

export default useStoreModal