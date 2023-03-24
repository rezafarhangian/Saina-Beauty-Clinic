import Home from "./Pages/Home"
import ServicePage from "./Pages/ServicesPage"
import FAQPage from "./Pages/FAQPage"


const routs = [
    { path: '/', element: <Home/> },
    { path: '/services', element: <ServicePage/> },
    { path: '/questions', element: <FAQPage/> },
   
]

export default routs