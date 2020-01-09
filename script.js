// API https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=30min&apikey=MCZULJ3C697MLMLI
// key MCZULJ3C697MLMLI

//https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=uxamqkqrR0mVG1S9qVCnhIRFXtn87oh5Bnd5CssxEfQmSrZA2rCTCJGtNjKR
// key uxamqkqrR0mVG1S9qVCnhIRFXtn87oh5Bnd5CssxEfQmSrZA2rCTCJGtNjKR
const intraDay = "https://api.worldtradingdata.com/api/v1/stock?symbol=" // first part that goes in the url
const enterStock = document.querySelector('.enter') //we select the input that goes in the middle of the url
enterStock.value.toUpperCase()
const intervalKey = '&api_token=uxamqkqrR0mVG1S9qVCnhIRFXtn87oh5Bnd5CssxEfQmSrZA2rCTCJGtNjKR' //last part of the url were the API key goes

const searchForm = document.querySelector('.searchForm') // the form as a whole in the HTML so we can press the button search, o press directly 'return/enter'

const PrintTickerInTable = document.querySelector('.tickerStock')
const PrintLinesInTable = document.querySelector('.line')
const PrintStockInTable = document.querySelector('.stockName') //select the class stockName and put it inside a variable and print it in the html
const PrintOpenPriceInTable = document.querySelector('.openPrice')
const PrintCurrentPriceInTable = document.querySelector('.currentPrice')
const PrintHighestPriceInTable = document.querySelector('.highestPrice')
const PrintLowestPriceInTable = document.querySelector('.lowestPrice')





//Beggining of the function getInfoStock
const getInfoStock = function (e) {  // this is what we are gonna to to 'e', that can be another parameter or argument
    e.preventDefault();

    enterStock.value = enterStock.value.toUpperCase() //we upperCase the value entered so we dont have problems with the API and the graphics
    PrintTickerInTable.innerHTML = ''
    PrintLinesInTable.innerHTML = ''
    PrintStockInTable.innerHTML = ''
    PrintOpenPriceInTable.innerHTML = ''         // we empty all the variables because the page doesnt refresh when we click Search
    PrintCurrentPriceInTable.innerHTML = ''
    PrintHighestPriceInTable.innerHTML = ''
    PrintLowestPriceInTable.innerHTML = ''






    const url = intraDay + enterStock.value + intervalKey
    console.log(enterStock.value)
    axios.get(url).then(axiosResults => {  //axios library inside url, creating a variable called axiosResults
        console.log(axiosResults) // we console log it, so we can see the actual data

        const TickerName = document.createElement('h1');
        TickerName.innerHTML = axiosResults.data.data[0].symbol  //we put the ticker inside the table
        PrintTickerInTable.append(TickerName);

        const line = document.createElement('h1');
        line.innerHTML = '-------------------------------------'; // I create a division line
        PrintLinesInTable.append(line);

        const StockName = document.createElement('h1');  // I create a variable, and inside it, I creat a h1 insise the DIV
        StockName.innerHTML = axiosResults.data.data[0].name // I take the axiosResults of the API and put it inside that H1
        PrintStockInTable.append(StockName); // I push that H1 inside the div that in the html is a class called PrintStockInTable

        const OpenPrice = document.createElement('h1');
        OpenPrice.innerHTML = "Yesterday's Price: " + '$' + axiosResults.data.data[0].price_open
        PrintOpenPriceInTable.append(OpenPrice);

        const CurrentPrice = document.createElement('h1');
        CurrentPrice.innerHTML = 'Current Price: ' + '$' + axiosResults.data.data[0].price
        PrintCurrentPriceInTable.append(CurrentPrice);

        const HighestPrice = document.createElement('h1');
        HighestPrice.innerHTML = 'Highest Price: ' + '$' + axiosResults.data.data[0].day_high
        PrintHighestPriceInTable.append(HighestPrice);

        const LowestPrice = document.createElement('h1');
        LowestPrice.innerHTML = 'Lowest Price: ' + '$' + axiosResults.data.data[0].day_low
        PrintLowestPriceInTable.append(LowestPrice);

        if (axiosResults.data.data[0].price >= axiosResults.data.data[0].price_open) {
            const arrowGreen = document.createElement('img')
            arrowGreen.src = './images/green_arrow.png'
            arrowGreen.style.height = '25px';
            TickerName.append(arrowGreen)
        }
        else if (axiosResults.data.data[0].price < axiosResults.data.data[0].price_open) {
            const arrowRed = document.createElement('img')
            arrowRed.src = './images/red_arrow.png'
            arrowRed.style.height = '25px';
            TickerName.append(arrowRed)
        }





    })

    // the iframe src='http://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=780C13631F2B498BB1F173C50474FA6D&symbol=stkl&days=1&width=800&height=420'
    // we are doing the same process with the api, but instead of printing individual data, we print the whole chart in a iframe on the html
    const graphic = document.querySelector('.graphic') // we select the graphic from the html
    const urlChart1 = 'https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=C9FCD96AAF9E435297DBCFF61E54D3E7&symbol='
    const urlChart2 = '&days=5&width=800&height=420'
    graphic.src = ''
    graphic.src = urlChart1 + enterStock.value + urlChart2 // we insert the graphic

    console.log(enterStock.value)

    enterStock.value = '' // and the end of the process we need to empty the value or it will keep that ticker on the searcher box



}
//The end of the funtion getInfoStock




searchForm.addEventListener('submit', getInfoStock) // we create a click that is gonna call a function, and in there we will right what is going in the section of the html
// the searchForm is independent of the footer menu, but we use the getInfoStock in the footer to have the same results


// we create a forEach to select all the classes of the menu and get the ID to insert the data and the charts
const stockMenu = document.querySelectorAll('.stockMenu')  // we select all the menu stockMenu class
console.log(stockMenu) //we see the data of stock menu that I put in the index one by one in the ID
stockMenu.forEach(function (element) { // for each NOD in html, element now holds all the stockMenu classes and ID individuals and I can access it
    console.log(element.id) // here I can see in console that element has the IDs and I can access to them
    console.log(element.innerHTML) // Here I can see the acutal text of the menu, that is in the html
    element.addEventListener('click', function (event) {  //Now, when we click those 'elements', we created inside another function and pass the same 'e' that getInfoStock
        console.log(event)
        enterStock.value = element.id // now we are putting the element id that we click, inside of enterStock.value, to pass it throw the whole getInfoStock
        getInfoStock(event) //and now we call the main function with the 'e' to preventDefault and keep the whole getInfoStock running
    })
})  //THIS IS THE MOST IMPORTANT PIECE OF CODE INSIDE THIS PROGRAM. IT SELECTS ALL THE MENU, AND WHEN YOU CLICK IN THE ID IT RETURNS ALL THE INFORMATION



// We are going to show a random chart every time we refresh the page
const randomChart = Math.floor(Math.random() * (stockMenu.length))
console.log(stockMenu[randomChart])
console.log(stockMenu[randomChart].id)

const randomGraphic = document.querySelector('.graphic') // we select the graphic from the html
const urlRandomChart1 = 'https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=C9FCD96AAF9E435297DBCFF61E54D3E7&symbol='
const urlRandomChart2 = '&days=5&width=800&height=420'
randomGraphic.src = ''
randomGraphic.src = urlRandomChart1 + stockMenu[randomChart].id + urlRandomChart2 // we insert the graphic

  


//Here are old code that we simplified in order to make more DRY


// // Here we are gonna create the variables for the navigator on the footer
// const AAPL = function (e) { enterStock.value = 'AAPL'; getInfoStock(e) } // we need to call 'e' in both functions in order to getInfoStock working and the actual function of the stock
// const GOOG = function (e) { enterStock.value = 'GOOG'; getInfoStock(e) }
// const FB = function (e) { enterStock.value = 'FB'; getInfoStock(e) }
// const MSFT = function (e) { enterStock.value = 'MSFT'; getInfoStock(e); }
// const AMZN = function (e) { enterStock.value = 'AMZN'; getInfoStock(e); }
// // we have created a fucntion for each element of the menu, putting enterStock.value with the string we need, and we call the getInfoStock to de the whole process
// const KO = function (e) { enterStock.value = 'KO'; getInfoStock(e); }
// const PEP = function (e) { enterStock.value = 'PEP'; getInfoStock(e); }
// const MCD = function (e) { enterStock.value = 'MCD'; getInfoStock(e); }
// const SBUX = function (e) { enterStock.value = 'SBUX'; getInfoStock(e); }
// const PG = function (e) { enterStock.value = 'PG'; getInfoStock(e); }

// const PFE = function (e) { enterStock.value = 'PFE'; getInfoStock(e); }
// const JNJ = function (e) { enterStock.value = 'JNJ'; getInfoStock(e); }
// const ABBV = function (e) { enterStock.value = 'ABBV'; getInfoStock(e); }
// const NVS = function (e) { enterStock.value = 'NVS'; getInfoStock(e); }
// const SNY = function (e) { enterStock.value = 'SNY'; getInfoStock(e); }

// const IBM = function (e) { enterStock.value = 'IBM'; getInfoStock(e); }
// const NVDA = function (e) { enterStock.value = 'NVDA'; getInfoStock(e); }
// const TSLA = function (e) { enterStock.value = 'TSLA'; getInfoStock(e); }
// const INTC = function (e) { enterStock.value = 'INTC'; getInfoStock(e); }
// const BABA = function (e) { enterStock.value = 'BABA'; getInfoStock(e); }

// const BAC = function (e) { enterStock.value = 'BAC'; getInfoStock(e); }
// const C = function (e) { enterStock.value = 'C'; getInfoStock(e); }
// const GS = function (e) { enterStock.value = 'GS'; getInfoStock(e); }
// const HSBC = function (e) { enterStock.value = 'HSBC'; getInfoStock(e); }


// // we select each item with their unique Id, and we click on them calling a function
// document.querySelector('#AAPL').addEventListener('click', AAPL)
// document.querySelector('#GOOG').addEventListener('click', GOOG)
// document.querySelector('#FB').addEventListener('click', FB)
// document.querySelector('#MSFT').addEventListener('click', MSFT)
// document.querySelector('#AMZN').addEventListener('click', AMZN)

// document.querySelector('#KO').addEventListener('click', KO)
// document.querySelector('#PEP').addEventListener('click', PEP)
// document.querySelector('#MCD').addEventListener('click', MCD)
// document.querySelector('#SBUX').addEventListener('click', SBUX)
// document.querySelector('#PG').addEventListener('click', PG)

// document.querySelector('#PFE').addEventListener('click', PFE)
// document.querySelector('#JNJ').addEventListener('click', JNJ)
// document.querySelector('#ABBV').addEventListener('click', ABBV)
// document.querySelector('#NVS').addEventListener('click', NVS)
// document.querySelector('#SNY').addEventListener('click', SNY)

// document.querySelector('#IBM').addEventListener('click', IBM)
// document.querySelector('#NVDA').addEventListener('click', NVDA)
// document.querySelector('#TSLA').addEventListener('click', TSLA)
// document.querySelector('#INTC').addEventListener('click', INTC)
// document.querySelector('#BABA').addEventListener('click', BABA)

// document.querySelector('#BAC').addEventListener('click', BAC)
// document.querySelector('#C').addEventListener('click', C)
// document.querySelector('#GS').addEventListener('click', GS)
// document.querySelector('#HSBC').addEventListener('click', HSBC)
// // Here we are gonna create the variables for the navigator on the footer


