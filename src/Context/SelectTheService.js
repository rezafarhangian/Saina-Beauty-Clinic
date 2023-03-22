import { createContext, useState, useContext } from "react";


const SelectTheService = createContext()


export default function SelecTheService({ children }) {
    const [servicesDesc, setServicesDesc] = useState(1)
    return (
        <SelectTheService.Provider value={{ servicesDesc, setServicesDesc }}>
                {children}
        </SelectTheService.Provider>
    )
}


export const useSelectTheService = () => useContext(SelectTheService)
