
class NetworkUtil{
    async post(url, body){ 
        var json;
        // console.log(body);
        var headers = {'Content-Type': 'application/json'};
        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
            }
        try {
            const response = await fetch(url, requestOptions);
            json = await response.json();
        } catch (error) {
            console.log(error);
            throw error;
        }
        return json;
        
    }
    async get(url) {
        var json;
        var headers = {'Content-Type': 'application/json'};
        const requestOptions = {
            method: 'GET',
            headers: headers
            }
        try {
            const response = await fetch(url, requestOptions);
            json = await response.json();
        } catch (error) {
            console.log(error);
            throw error;
        }
        return json;
    }
    async update(url, body){ 
        var json;
        // console.log(body);
        var headers = {'Content-Type': 'application/json'};
        const requestOptions = {
            method: 'GET',
            headers: headers,
            body: JSON.stringify(body)
            }
        try {
            const response = await fetch(url, requestOptions);
            json = await response.json();
        } catch (error) {
            console.log(error);
            throw error;
        }
        return json;
    }
    async delete(url) {
        var json;
        var headers = {'Content-Type': 'application/json'};
        const requestOptions = {
            method: 'DELETE',
            headers: headers
            }
        try {
            const response = await fetch(url, requestOptions);
            json = await response.json();
        } catch (error) {
            console.log(error);
            throw error;
        }
        return json;
    }
}
export default NetworkUtil;
