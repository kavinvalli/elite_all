import NetworkUtil from '../utils/network_util';
import ApiConfig from '../utils/api_config';

const networkUtil = new NetworkUtil();
const apiConfig = new ApiConfig();

class DweetApi {
    // List all the Dweets
    async dweetsList() {
        var result = null;
        try {
            result = await networkUtil.get(apiConfig.dweetsList);
          } catch (error) {
              console.log(error)
          }
          return result;
    }
    // Specific Dweet
    async dweetSpecific(id) {
        var result = null;
        try {
            result = await networkUtil.get(apiConfig.specificDweet(id));
        } catch (error) {
            console.log(error)
        }
        return result;
    }

    // Delete Specific Dweet
    async deleteDweet(id) {
        var result = null;
        try {
            result = await networkUtil.delete(apiConfig.specificDweet(id));
        } catch (error) {
            console.log(error)
        }
        return result;
    }

    // Update Specific Dweet
    async updateDweet(id, data) {
        var result = null;
        try {
            result = await networkUtil.update(apiConfig.updateSpecificDweet(id), data);
        } catch (error) {
            console.log(error)
        }
        return result;
    }

    // Create Dweet
    async createDweet(data) {
        var result = null;
        try {
            result = await networkUtil.post(apiConfig.createDweet, data, true);
            if (result.message == "Created dweet"){
                console.log(result)
            } else {
                alert(result.message)
                return false;
            }
        } catch (error) {
            console.log(error)
        }
        return result;
    }
}

export default DweetApi;