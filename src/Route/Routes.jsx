// //Samp lePage
import SamplePage from '../Components/Pages/PageLayout/SimplePage';
import Form from '../Components/Forms/form'

// //SomeColors
import RedColor from '../Components/Colors/red'
import GreenColor from '../Components/Colors/green'

export const routes = [
  // //page
  { path: `${process.env.PUBLIC_URL}/pages/sample-page/:layout`, Component: <SamplePage /> },
  { path: `${process.env.PUBLIC_URL}/pages/form/:layout`, Component: <Form/>},

  { path: `${process.env.PUBLIC_URL}/colors/colorr/:layout`, Component: <RedColor/>},
  { path: `${process.env.PUBLIC_URL}/colors/colorg/:layout`, Component: <GreenColor/>}
];