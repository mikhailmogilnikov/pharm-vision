import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface ModalStateI {
  modal: React.ReactNode | null;
  setModal: (value: React.ReactNode | null) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStateI>()(
  devtools(
    immer((set) => ({
      modal: false,
      setModal: (value) =>
        set((state) => {
          state.modal = value;
        }),
      closeModal: () =>
        set((state) => {
          state.modal = null;
        }),
    })),
  ),
);

export const useModal = () => useModalStore((state) => state);
