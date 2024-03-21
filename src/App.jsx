import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "../src/components/Layout/Layout"
import News from "../src/components/News/News"
import StockDetails from "../src/components/Stocks/StocksComponents/StockDetails"
import StockList from '../src/components/Stocks/Stoks'
import Investments from "./components/Investments/Investments"
import Overview from "./components/Overview/Overview"
import Wallet from "./components/Wallet/Wallet"
import { Welcomme } from "./components/Welcomme/Welcomme"
import { DataContext } from "./context/data.context"
import Ai from "./components/AI/Ai.jsx";
import {Profile} from "./components/Profile/Profile.jsx";
import {Community} from "./components/Community/Community.jsx"
import EditProfile from "./components/Profile/EditProfile.jsx"
import AllStocks from "./components/StockData/AllStocks.jsx";
import Learning from "./components/Learning/LearningPage.jsx"
import {CalcInv} from "./components/Wallet/CalcInv.jsx";

function App() {
  const { user } = useContext(DataContext)
  return (
    <>
      {
        user.userName === ''
          ? <Welcomme />
          : <Layout>
            <Routes>
              <Route path='/overview' element={<Overview />} />
              <Route path='/investments' element={<Investments />} />
              <Route path='/stocks' element={<StockList />} />
              <Route path='/stocks/:symbol' element={<StockDetails />} />
              <Route path='/wallet' element={<Wallet />} />
              <Route path='/news' element={<News />} />
              <Route path='*' element={<Overview />} />
              <Route path='/ai' element={<Ai />} />
              <Route path='/profile' element={<Profile />} />
              {/*<Route path='/stock-data' element={<StockDetails />} />*/}
              <Route path='/community' element={<Community />} />
              <Route path="/stock-data-all" element={<AllStocks />}/>
              <Route path='/editProfile' element={<EditProfile />} />
              <Route path='/learning' element={<Learning />} />
              <Route path='/calcInv' element={<CalcInv />} />

            </Routes>
          </Layout>
      }
    </>
  )
}

export default App
