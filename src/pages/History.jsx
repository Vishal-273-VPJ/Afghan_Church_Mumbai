import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HistoryContent from '../components/HistoryContent/HistoryContent'
import HistoryQuote from '../components/HistoryQuote/HistoryQuote'

const History = () => {
  return (
    <div>
        <Header />
        <HistoryContent />
        <HistoryQuote />
        <Footer />
    </div>
  )
}

export default History