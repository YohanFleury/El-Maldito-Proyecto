import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'

import AppTextInput from '../AppTextInput'

const mockOnclick = jest.fn()

describe('AppTextInput', () => {
    it('renders the good placeholder', () => {
        const {getByText, getAllByPlaceholderText} = render(<AppTextInput placeholder='email' />)

        expect(getAllByPlaceholderText('email')).toBeDefined()
    }),

    it('content writted in input field is displayed', () => {
        const {getByText, getAllByPlaceholderText} = render(<AppTextInput placeholder='email' />)
       
        fireEvent.changeText(getAllByPlaceholderText('email'), 'toto is bo')
        expect('toto is bo').toBeDefined()
    })

})