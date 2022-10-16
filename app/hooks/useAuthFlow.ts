import { useState } from 'react'
import { Alert } from 'react-native'


const useAuthFlow = () => {
    const [data, setData] = useState<any>()
    const [error, setError] = useState<unknown>()
    const [loading, setLoading] = useState<boolean>(false)

    const request = async (authFunc: Promise<any>) => {
        setLoading(true)
            try {
               const response = await authFunc
               setData(response)
            } catch ({message}) {
                setError(message)
                Alert.alert(`${message}`)
            }
            setLoading(false)
        }

    return { data, error, loading, request }
    
}

export default useAuthFlow