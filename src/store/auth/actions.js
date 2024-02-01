import { _setCurrentAccount } from "."
import store from "../../store"



const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))


export default setCurrentAccount