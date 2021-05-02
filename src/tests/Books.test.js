import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Books from '../components/Books'
import {ContextProvider} from '../Context'
import Context from '../Context'


afterEach(cleanup)

test('take a snapshot of Books', () => {
    const { asFragment } = render(<ContextProvider><Books /></ContextProvider>)
    expect(asFragment(<Books />)).toMatchSnapshot()
})





test('check book component render', () => {
    render(<ContextProvider><Books /></ContextProvider>)
})



describe('check each subcomponent renders', () => {
        test('handshakefiveBooks render', () => {
        const { queryByTitle } = render(<ContextProvider><Books /></ContextProvider>)
        const handShakeFive = queryByTitle('handShakeFiveBooks')
        expect(handShakeFive).toBeTruthy()
    })
    test('currently reading render', () => {
        const { queryByTitle } = render(<ContextProvider><Books /></ContextProvider>)
        const currentlyReading = queryByTitle('currentlyReading')
        expect(currentlyReading).toBeTruthy()
    })
    test('recentlyRead render', () => {
        const { queryByTitle } = render(<ContextProvider><Books /></ContextProvider>)
        const recentlyRead = queryByTitle('recentlyRead')
        expect(recentlyRead).toBeTruthy()
    })
})