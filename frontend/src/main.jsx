import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import TodaysAttendance from './components/TodaysAttendance.jsx';
import AttendanceForm from './components/AttendanceForm.jsx';
import SucccesfulAttendance from './components/SuccessfulAttendance.jsx';
import QrCode from './components/QrcodeScanner.jsx';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file');
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='todays-attendances' element={<TodaysAttendance />} />
        <Route path='attendance-form' element={<AttendanceForm />} />
        <Route path='successful-attendance' element={<SucccesfulAttendance />} />
        <Route path='qr-code' element={<QrCode />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router}>
      </RouterProvider>
    </ClerkProvider>
  </StrictMode>,
)
