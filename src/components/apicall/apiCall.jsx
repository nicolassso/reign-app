
import axios from 'axios'

export default{
    getData: async(q, p) =>
    await axios.get('https://hn.algolia.com/api/v1/search_by_date?query='+q+'&page='+p)
}