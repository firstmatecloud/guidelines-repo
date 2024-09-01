import api from "./api";


export default class BackendService {

    //USER
    async getMe() {
        const resp = await api.get('/users/me')
        return resp.data
    }
}