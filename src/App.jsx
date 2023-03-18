import './App.css'
import axios from 'axios'
import { useQuery } from 'react-query'

const App = () => {
  // const [count, setCount] = useState(0)
  const { isLoading, error, data } = useQuery(
    'cats', () => axios.get('https://api.thecatapi.com/v1/images/search?limit=22&breed_ids=beng&api_key=live_gd5UyXVtejgw3oLmOaXRdpMRip9ZypOjL752MPA4P280C0nl3MNbId4kPi7IP0VR')
      .then((res) => res.data)
  )
console.log(data)
  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return (
    <div>
      {/* <img src={data[2].url} alt="cat-img" height={data.height} width={data.width}/> */}
      { data.map(cat => (
        <div key={cat.id}>
          <img src={cat.url} alt="cat-img" />
          <p>Name: {cat.breeds[0].name}</p>
          <p>Description: {cat.breeds[0].description}</p>
          <p>Temperament: {cat.breeds[0].temperament}</p>
          <p>Imperial:{cat.breeds[0].weight.imperial} - Metric:{cat.breeds[0].weight.metric}</p>
          <p>{cat.breeds[0].wikipedia_url}</p>
        </div>
      ))}
    </div>
  )
}

export default App