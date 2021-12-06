
import axios from 'axios'

export default{
    getData: async() =>
    await axios({
        'method':'GET',
        'url':'https://hn.algolia.com/api/v1/search_by_date',        
        'params': {
            'query':'angular',
            'page' : '2'
        },
    })
}


