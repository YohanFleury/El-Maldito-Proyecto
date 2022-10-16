import React from 'react'
import {fireEvent, render} from '@testing-library/react-native'

import AppTextInput from '../AppTextInput'


describe('AppTextInput', () => {
    it('renders the good placeholder', () => {
        const {getByText, getAllByPlaceholderText} = render(<AppTextInput placeholder='email' />)

        expect(getAllByPlaceholderText('email')).toBeDefined()
    })

    /* it('content writted in input field is displayed', () => {
        const {getByText, getAllByPlaceholderText, getByTestId} = render(<AppTextInput placeholder='email' />)
        
        const textInput = getByTestId('test')
        fireEvent.changeText(textInput, 'toto is bo')
        console.log('youhououu', textInput)
    }) */

})