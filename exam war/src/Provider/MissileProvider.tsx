import { createContext, ReactNode, useEffect, useState } from "react";

interface Missiles {
    _id?: string;
    name: string;
    description: string;
    speed: number;
    intercepts?: [string]
    price : number
  }
 interface Props {
    children : ReactNode
 }

 interface MissilesProps {
    missiles: Missiles[];
    setMissiles: React.Dispatch<React.SetStateAction<Missiles[]>>;
 }

 export const MissilesContext = createContext<MissilesProps>({
    missiles: [],
    setMissiles: () => {}
  });
  
  const MissilesProvaider = ({ children }: Props) => {
    const [missiles, setMissiles] = useState<Missiles[]>([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/missiles")
        .then((respons) => respons.json())
        .then((data) => setMissiles(data))
        .catch((error) => console.error("Error fatch", error));
    }, []);
  
    return (
      <MissilesContext.Provider value={{missiles,setMissiles}}>
        {children}
      </MissilesContext.Provider>
    );
  };
  
  export default MissilesProvaider;