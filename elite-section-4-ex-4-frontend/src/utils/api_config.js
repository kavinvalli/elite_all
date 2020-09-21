const TESTDOMAIN = 'http://localhost:5000/'

const URLUSE = TESTDOMAIN

class ApiConfig {
    dweetsList = `${URLUSE}dweet/s`;
    specificDweet = id => {return `${URLUSE}dweet/${id}`};
    updateSpecificDweet = id => {return `${URLUSE}dweet/${id}/update`}
    createDweet = `${URLUSE}dweet/create`
}

export default ApiConfig;