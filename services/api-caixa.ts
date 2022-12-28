import axios from "axios";
import https from 'https'


console.log({
  url: process.env.API_CAIXA_URL
})
const api = axios.create({
baseURL: process.env.API_CAIXA_URL,
withCredentials: false,
 headers:{
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
 },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, 
    keepAlive: true,
    host: 'servicebus2.caixa.gov.br'
  })
})

async function getLoteria(loteria: string): Promise<any> {  
  
  if(!loteria || loteria === "") return; 

  console.log('loteria**', loteria)

  try{
    const { data, request } = await api.get('lotomania'); 

      console.log({ data })

      return data
  }catch(err: any){
    console.log('err**', err)
    throw err;
    
  }
 
}

export { getLoteria };