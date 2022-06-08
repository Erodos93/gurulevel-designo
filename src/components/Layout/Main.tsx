import React from "react";

interface MainProps{
    idProp:string,
    children:JSX.Element
}
export const Main:React.FC<MainProps> = ({idProp,children}) =>{

    return (
    <main className="grid__container" id={idProp}>
       {children}
    </main>)
}
