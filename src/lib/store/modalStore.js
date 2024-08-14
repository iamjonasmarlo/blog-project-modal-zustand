import { create } from 'zustand';

const useModalStore = create((set) => ({
    open: false,
    setOpen: (status) => set({ open: status }),
}));

export default useModalStore;
