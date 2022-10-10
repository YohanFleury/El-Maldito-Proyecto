import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'

import NotifCard from '../NotifCard'

const onPressMock = jest.fn()
const onPressAvatarMock = jest.fn()

describe('NotifCard', () => {
    it('renders good data props',  () => {
        const { getByText } = render(<NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={onPressMock}
            onPressAvatar={onPressAvatarMock}
            source={'test'}
             />)
        
        expect(getByText("Avatars are found all over ui design from lists to profile screens. They are commonly used to represent")).toBeDefined()
        expect(getByText('6h')).toBeDefined()
    })

    it('call the onPress functions',  () => {
        const { getByText, } = render(<NotifCard 
            content='Avatars are found all over ui design from lists to profile screens. They are commonly used to represent'
            time='6h'
            onPress={onPressMock}
            onPressAvatar={onPressAvatarMock}
            source={'test'}
             />)
        
        fireEvent.press(getByText("Avatars are found all over ui design from lists to profile screens. They are commonly used to represent"))
        expect(onPressMock).toHaveBeenCalledTimes(1)
        
    })
})