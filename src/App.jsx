import React, { useContext } from "react"
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
import {Profile} from "./components/Profile/Profile.jsx";
import {Community} from "./components/Community/Community.jsx"
import EditProfile from "./components/Profile/EditProfile.jsx"
import AllStocks from "./components/StockData/AllStocks.jsx";
import Learning from "./components/Learning/LearningPage.jsx"
import {CalcInv} from "./components/Wallet/CalcInv.jsx";
import Module1KnowMore from "./components/Learning/Module1/Module1KnowMore.jsx";
import Module1Chap1 from "./components/Learning/Module1/Modul1Chap1/Module1Chap1.jsx";
import StockChart from "./components/AI/StockChart.jsx";
import ChatBot from "react-simple-chatbot";

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
              <Route path='/profile' element={<Profile />} />
              {/*<Route path='/stock-data' element={<StockDetails />} />*/}
              <Route path='/community' element={<Community />} />
              <Route path="/stock-data-all" element={<AllStocks />}/>
              <Route path='/editProfile' element={<EditProfile />} />
              <Route path='/learning' element={<Learning />} />
              <Route path='/calcInv' element={<CalcInv />} />
              <Route path='/module1-knowmore' element={<Module1KnowMore />} />
              <Route path='/module1-chap1' element={<Module1Chap1 />} />
              <Route path='/stock-predictions' element={<StockChart />} />
            </Routes>
              <ChatBot
                  headerTitle="InvestBot"
                  speechSynthesis={{ enable: true, lang: 'en' }}
                  recognitionEnable={true}
                  steps={[
                    {
                      id: '0',
                      message: 'Hi investor!',
                      trigger: '1',
                    }, {
                      id: '1',
                      message: 'Please enter your username',
                      trigger: '2'
                    }, {
                      id: '2',
                      user: true,
                      trigger: '3',
                    }, {
                      id: '3',
                      message: " Hii {previousValue}, how can I help you?",
                      trigger: '4'
                    }, {
                      id: '4',
                      options: [
                        { value: 1, label: 'Read News' },
                        { value: 2, label: 'Simulator' },
                        { value: 3, label: 'Community' },
                      ],
                      end: true
                    }
                  ]}
                  floating
                  opened
              />
          </Layout>
      }
    </>
  )
}

export default App
