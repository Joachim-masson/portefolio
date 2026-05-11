import { StrictMode } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import Home from './pages/Home.tsx'
import LegalNotice from './pages/LegalNotice.tsx'
import Error404 from './pages/Error404.tsx'


const router = createBrowserRouter([
	{
		element: <App />, // Renders the App component for the home page
		errorElement: <Error404 />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
      {
				path: "/legalNotice",
				element: <LegalNotice />,
			},
    ]
  }
])

  const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document must contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
