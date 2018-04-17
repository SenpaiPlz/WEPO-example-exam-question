import data from '../Resources/employes.json'
const fetchFromData = () => new Promise((resolve, reject) => { resolve(data)})
export default fetchFromData