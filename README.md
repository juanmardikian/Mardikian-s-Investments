My first project at GA

App title: YourPersonalFinances

App Description: It would give you the actual price of any financial instrument

API: .alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo

API snippet:  "Meta Data": {         "1. Information": "Intraday (5min) open, high, low, close prices and volume",         "2. Symbol": "MSFT",         "3. Last Refreshed": "2020-01-02 11:00:00",         "4. Interval": "5min",         "5. Output Size": "Compact",         "6. Time Zone": "US/Eastern"     },

Wireframes: A website were you can search for a financial instrument and gives you the information in real time, and even a graphic of a period of time

MVP:  a search bar and a panel with a result of the search

Post-MVP:  graphics or multiple graphics of different instruments

Goals: first day add the api, work on the search bar, use a lot of css. No idea how much would be the time

Priority Matrix: I dont know how to do a graphic here, but I guess that the hard parts will take longer than the easy parts

Timeframes:  Same as the priority matrix

# Project Overview

## Project Name

Your Fiancial Freedom

## Project Description

It would give you the actual price of any financial instrument

## Deployed Site
[Mardikian Investments](https://pages.git.generalassemb.ly/juanmardikian/MardikianInvestments/)

## API and Data Sample

https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo
API snippet:  "Meta Data": {         "1. Information": "Intraday (5min) open, high, low, close prices and volume",         "2. Symbol": "MSFT",         "3. Last Refreshed": "2020-01-02 11:00:00",         "4. Interval": "5min",         "5. Output Size": "Compact",         "6. Time Zone": "US/Eastern"     },

## Wireframes

![alt text](https://git.generalassemb.ly/juanmardikian/YourFinancialFreedom/blob/master/YourFinacialFreedom/pre_images/wireframes.jpg)
![alt text](https://git.generalassemb.ly/juanmardikian/YourFinancialFreedom/blob/master/YourFinacialFreedom/pre_images/warframes2.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Find and use external api 
- Render data on page 
- A search bar and a panel with a result of the search


#### PostMVP 

- Add second API with some news
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 2rd| Project Prompt | Incomplete
|Jan 3rd| Core Application Structure (HTML, CSS, etc.) 
|Jan 5th| JV with all the proyect | Incomplete
|Jan 6th| Keep doing CSS and | Incomplete
|Jan 7th| Initial Clickable Model  | Incomplete
|Jan 8th| MVP | Incomplete
|Jan 9th| Present | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

Find the API, put the stock data on the website, the search bar to find some specific stock, a side bar with the news

## Timeframes

First day for the readme.md 
Wireframes about one day and half
HTML and CSS I have the base, so about 2 days
MVP one day


## API Data Sample

Show us a snippet of JSON returned by your API so we know you can access it and get the info you need

API snippet:  "Meta Data": {         "1. Information": "Intraday (5min) open, high, low, close prices and volume",         "2. Symbol": "MSFT",         "3. Last Refreshed": "2020-01-02 11:00:00",         "4. Interval": "5min",         "5. Output Size": "Compact",         "6. Time Zone": "US/Eastern"     },



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  