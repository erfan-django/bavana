import { create } from "zustand"

const useAuthStore = create((set) => ({
    user: null,
    x:0,
    // action
    login: (userData) => set({ user: userData }),
    logout: () => set({ user: null }),
}))

export default useAuthStore
