import NetworkUtil from '../utils/network_util';
import ApiConfig from '../utils/api_config';

const networkUtil = new NetworkUtil();
const apiConfig = new ApiConfig();

class AuthenticationApi {
    async login(data) {
        var result = null;
        try {
            result = await networkUtil.post(apiConfig.loginApi, data, false);
            if (result.message == "Logged In"){
                console.log(result)
            } else {
                alert(result.message)
                return false;
            }
        } catch (error) {
            alert(error)
        }
        return result;
    }
    async register(data) {
        var result = null;
        try {
            result = await networkUtil.post(apiConfig.registerApi, data, false);
        } catch (error) {
            console.log(error)
        }
        return result;
    }
}

export default AuthenticationApi;