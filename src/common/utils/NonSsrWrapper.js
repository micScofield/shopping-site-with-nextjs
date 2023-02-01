import dynamic from 'next/dynamic'

const NonSSRWrapper = ({ children }) => <div>{children}</div>

export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
})
