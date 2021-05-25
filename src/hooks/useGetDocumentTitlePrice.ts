import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
// import { LUA } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()
  const cakePriceUsd = priceData || 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `LuaSwap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
