import { create } from "zustand"
import { persist } from "zustand/middleware"

interface User {
  name: string
  email: string
}

interface UserState {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
    },
  ),
)

interface FormState {
  formData: {
    name: string
    email: string
    password: string
  }
  setFormData: (data: Partial<FormState["formData"]>) => void
  clearFormData: () => void
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      formData: {
        name: "",
        email: "",
        password: "",
      },
      setFormData: (data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            ...data,
          },
        })),
      clearFormData: () =>
        set({
          formData: {
            name: "",
            email: "",
            password: "",
          },
        }),
    }),
    {
      name: "form-storage",
    },
  ),
)
