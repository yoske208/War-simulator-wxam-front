import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import UserProvaider from './Provider/UserProvider.tsx';
import MissilesProvaider from './Provider/MissileProvider.tsx';
import OrganizationProvaider from './Provider/OrganozationProvider.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvaider>
    <MissilesProvaider>
      <OrganizationProvaider>
      <App />
      </OrganizationProvaider>
    </MissilesProvaider>
    </UserProvaider>
    </BrowserRouter>
  </StrictMode>
)
