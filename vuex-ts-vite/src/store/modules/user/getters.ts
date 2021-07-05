import { userState } from "./store";

const moduleGetters = {
  isLogin: (state: userState): string => {
    return 'login already'
  }
}

export default moduleGetters