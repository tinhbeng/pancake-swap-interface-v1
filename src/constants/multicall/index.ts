import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xb67D7a6644d9E191Cac4DA2B88D6817351C7fF62', // TODO
  [ChainId.TESTNET]: '0x5841809531EB0708eED95c5D4Ba513595eC17C97'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
