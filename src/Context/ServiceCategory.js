import React, { createContext, useState, useContext } from 'react'

const ChooseServiceCategory = createContext()

export default function Context({ children }) {
    const [serviceSelection, setServiceSelection] = useState("1")
    return (
        <ChooseServiceCategory.Provider value={{ serviceSelection, setServiceSelection }}>
                {children}
        </ChooseServiceCategory.Provider>
    )
}


export const useChooseServiceCategory = () => useContext(ChooseServiceCategory)