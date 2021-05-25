import { useEffect, useState } from 'react'

// type ApiResponse = {
  // updated_at: string
  // data: {
    // [key: string]: {
    //   name: string
    //   symbol: string
    //   price: string
    //   price_BNB: string
    // }
    // usdPrice: string
  // }
// }
// https://api.pancakeswap.info/api/tokens
const api = 'https://wallet.tomochain.com/api/luaswap/tomochain/price/LUA'

const useGetPriceData = () => {
  const [data, setData] = useState<number | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        
        const res = await response.json()
        const price = res.usdPrice
        setData(price)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])
  return data
}

export default useGetPriceData
