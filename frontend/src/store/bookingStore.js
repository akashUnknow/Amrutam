// store/bookingStore.js
import { create } from "zustand";

export const useBookingStore = create((set) => ({
  selectedSlot: null,
  lockId: null,
  setSlot: (slot) => set({ selectedSlot: slot }),
  setLockId: (lockId) => set({ lockId }),
  reset: () => set({ selectedSlot: null, lockId: null }),
}));
