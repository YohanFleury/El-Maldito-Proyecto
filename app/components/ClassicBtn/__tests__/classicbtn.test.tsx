import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'

import ClassicBtn from '../ClassicBtn'

const mockOnclick = jest.fn()

describe('ClassicBtn', () => {
    it('renders the good title', () => {
        const {getByText} = render(<ClassicBtn title='My button' onPress={mockOnclick} />)

        expect(getByText('My button')).toBeDefined()
    })

    it('calls the onPress fonction when button pressed', () => {
        const {getByText} = render(<ClassicBtn title='My button' onPress={mockOnclick} />)

        fireEvent.press(getByText('My button'))
        expect(mockOnclick).toHaveBeenCalledTimes(1)
    })
})