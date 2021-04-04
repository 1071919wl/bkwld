import axios from 'axios';

export const fetchContent = () =>{
  return axios.get("https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json")
  .then(res => {
    return res.data.pages
  })
}