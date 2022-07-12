import React, { useState } from 'react'
import './QuoteBox.css'

const QuoteBox = () => {
const [newQuotes , setNewQuotes] = useState({text: 'Believe in yourself everyday',author:"BC THE GREAT"})
  
async function getNewQuotes(){
  try{
      let response = await fetch('https://type.fit/api/quotes');
      let  apiQuote =  await response.json();
       let quotes = apiQuote[Math.floor(Math.random() * apiQuote.length)]
       setNewQuotes({
        text: quotes.text,
        author: quotes.author
       })
       

      
    } catch(err){
      console.log(err)
    }
    
  }






  return (
<div id='quote-box'>
    <div className='quote'>
        <h2 id = 'text'>{newQuotes.text}</h2>
        <p id='author'> {newQuotes.author}</p>
    </div>
    <div className='links'>
        <button id = 'new-quote' onClick={getNewQuotes}>New Quote</button>
         <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${newQuotes.text} - ${newQuotes.author}`} target = {'_blank'}>Tweet Quote</a>
    </div>
        
  </div>
  )
}

export default QuoteBox

