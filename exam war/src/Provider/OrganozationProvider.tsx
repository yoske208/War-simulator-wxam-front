import { createContext, ReactNode, useEffect, useState } from "react";

interface Organization {
    _id?: string;
    name: string 
    budget : number
    resources : [{name:string,amount:number}]
  }
 interface Props {
    children : ReactNode
 }

 interface OrganizationProps {
    organization: Organization[];
    setOrganization: React.Dispatch<React.SetStateAction<Organization[]>>;
 }

 export const OrganizationContext = createContext<OrganizationProps>({
    organization: [],
    setOrganization: () => {}
  });
  
  const OrganizationProvaider = ({ children }: Props) => {
    const [organization, setOrganization] = useState<Organization[]>([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/organization")
        .then((respons) => respons.json())
        .then((data) => setOrganization(data))
        .catch((error) => console.error("Error fatch", error));
    }, []);
  
    return (
      <OrganizationContext.Provider value={{organization,setOrganization}}>
        {children}
      </OrganizationContext.Provider>
    );
  };
  
  export default OrganizationProvaider;