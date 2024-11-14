import { createContext, ReactNode, useEffect, useState } from "react";

interface User {
    _id?: string;
    username: string;
    password: string;
    organization: string;
    zone?: string;
  }
 interface Props {
    children : ReactNode
 }

 export interface UserProps {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
 }

 export const UsersContext = createContext<UserProps>({
    users: [],
    setUsers: () => {}
  });
  
  const UserProvaider = ({ children }: Props) => {
    const [users, setUsers] = useState<User[]>([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/users")
        .then((respons) => respons.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fatch", error));
    }, []);
  
    return (
      <UsersContext.Provider value={{users,setUsers}}>
        {children}
      </UsersContext.Provider>
    );
  };
  
  export default UserProvaider;