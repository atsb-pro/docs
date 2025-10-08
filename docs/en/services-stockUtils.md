# StockUtils

![](/images/hystorical_prices.jpg)


The `stockUtils` module is the backbone of ATSB’s trading system. It provides tools for loading, processing, and analyzing historical stock data, calculating technical indicators, and detecting actionable trends.

---

## Overview

`stockUtils` offers the following capabilities:

- **Historical Data Acquisition:** Fetch stock prices from APIs or local JSON files.
- **Data Parsing and Formatting:** Transform raw API responses into structured formats for analysis.
- **Moving Average Calculation:** Compute Simple Moving Average (SMA) or Exponential Moving Average (EMA) over custom periods.
- **Trend Detection:** Identify moving average intersections and direction changes.
- **Modular Design:** Functions are independent and reusable for backtesting or integration into larger systems.
- **Integration:** Provides the foundation for **backtesting strategies** in `runner.py` and feeds **trading.py** for automated Telegram alerts.

---

Reliable historical stock data is essential for analysis. The module supports both **API-based retrieval** and **local JSON parsing**.

## Loading Data in Chunks

For large datasets, the module can load data in increments to avoid API limitations:

```python
import requests

all_prices = []

def load_data_chunk(ticker, date_to):
    global all_prices
    results = requests.get(
        f"http://api.marketstack.com/v1/eod?access_key=YOUR_API_KEY&symbols={ticker}&date_to={date_to}"
    )
    data = results.json()
    all_prices += data['data']
    first_day = data['data'][-1]['date'][0:10]
    print(first_day)
    return first_day
```
Incremental Loading: Fetches data in multiple chunks to avoid hitting API rate limits.
Persistent Storage: Combines chunks into a single dataset for easy reuse.
Extended Coverage: Retrieves historical data across months or years automatically.

## Loading Full Historical Data
```python
from datetime import date

def load_historical_data(ticker):
    global all_prices
    first_day = date.today()
    for _ in range(5):
        first_day = load_data_chunk(ticker, first_day)
    
    with open(f'data/{ticker}.json', 'w') as file:
        file.write(json.dumps(all_prices))
    
    return all_prices
```

Efficiently retrieves and stores multiple years of data.
Simplifies repeated analysis without additional API requests.

## Parsing Local JSON Files
```python
import json

def parse(ticker):
    with open(f"data/{ticker}.json") as file:
        data = json.load(file)
    
    output = "Date,,Price\n\n"
    for day in data:
        output += f"{day['date'][:10]},,{day['close']}\n"
    
    return output
```
Converts JSON data into CSV-like format.
Useful for quick previews or exporting to other tools.


## Moving Averages
Moving averages are essential for smoothing price data and identifying trends.
Calculating Simple Moving Average (SMA)
```python
def average(day_period, stockdata):
    avg = []
    for counter in range(len(stockdata) - day_period):
        sum_prices = sum(stockdata[counter + i]["close"] for i in range(day_period))
        avg.append(round(sum_prices/day_period, 2))
    return avg
```

Supports any period length (short-term or long-term).
Helps identify overall market trends.

## Trend and Signal Detection

#### Detecting Crossovers
```python
def check_interception(stock_price, avg):
    prev_day_diff = stock_price[1] - avg[1]
    current_day_diff = stock_price[0] - avg[0]
    return current_day_diff * prev_day_diff < 0
```
Returns True if stock price crosses a moving average.
Useful for signaling potential buy or sell opportunities.

### Detecting Trend Reversals
```python
def check_direction_change(avg):
    return (avg[0] - avg[1]) * (avg[1] - avg[2]) < 0
```
Returns True if the moving average changes direction.
Helps detect emerging bullish or bearish trends.

### Integration Workflow
A typical workflow using stockUtils:
1. Load Historical Data
```python
data = load_historical_data("AAPL")
```
2. Compute Moving Averages
```python
sma_10 = average(10, data)
sma_50 = average(50, data)
```
3. Detect Signals
```python
if check_interception([data[0]['close'], data[1]['close']], sma_10[:2]):
    print("Crossover detected!")
```

4. Visualize Trends
Use Matplotlib, Plotly, or Seaborn to create charts for analysis.
Observe patterns and validate signals visually.

## Advantages
Efficient: Optimized for large datasets.
Flexible: Customizable moving averages and analysis windows.
Modular: Functions work independently for backtesting or live integration.
Reliable: Structured storage ensures data consistency.

## Use Cases
Backtesting trading strategies on historical data.
Real-time trend detection for live trade signals.
Educational purposes to understand trends and moving averages.
Integration with automated trading bots.

## Conclusion

The `stockUtils` module is the foundation of ATSB’s trading system. By combining **historical data acquisition**, **moving average calculations**, and **trend detection**, it provides a reliable toolkit for strategy development, backtesting, and real-time analysis.

It directly supports other parts of the system:  

- Feeds **`trading.py`** with clean and structured data for automated daily Telegram alerts.  
- Powers **`runner.py`** for backtesting multiple trading strategies across different timeframes and power levels.  
- Works with **`score.py`** to calculate optimal buying and selling power for each simulated trade.  

With these tools, traders and developers can make **data-driven decisions**, quickly identify trends, optimize trading strategies, and integrate seamlessly into automated or semi-automated trading workflows. The modular and reusable design ensures that StockUtils can evolve with the project and adapt to new trading strategies or analytical approaches in the future.
