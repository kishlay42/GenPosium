import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'

import {Home,About,Contact,UniSocial,Learning,Contests,UniInfo,ContestInfo,LearningInfo } from './components/index.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'



const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "uniSocial",
          element: <UniSocial />
        },
        {
          path: "learning",
          element: <Learning />
        },
        {
          path: "contests",
          element: <Contests />
        },
        {
          path: "uniInfo",
          element: <UniInfo />
        },
        {
          path: "contestInfo",
          element: <ContestInfo />
        },{
          path: "learningInfo",
          element: <LearningInfo />
        }

      ]
    }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
