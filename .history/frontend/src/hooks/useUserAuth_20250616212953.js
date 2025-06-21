import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const useUserAuth = () => {
    const {user, updateUser, clearUser } = useContext(UserContext)
    const navigate = use
}