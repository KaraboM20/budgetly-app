import { useContext } from "react"

export const useUserAuth = () => {
    const {user, updateUser, clearUser } = useContext()
}