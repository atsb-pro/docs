# Historical Data Storage - JSON Files

![dataJson](/images/databases.jpg)

The ATSB project relies on a structured JSON-based system to store historical stock data. This ensures that all trading modules, including `trading.py` and backtesting scripts, have consistent access to clean and organized information.

---

## JSON Structure

Each entry in the JSON file corresponds to a single trading day and contains essential fields such as:

* **open, high, low, close:** Standard price data for the day.
* **volume:** Number of shares traded.
* **adjusted values (adj_open, adj_close, etc.):** Prices adjusted for splits or dividends.
* **split_factor & dividend:** Information for accurate historical calculations.
* **symbol & exchange:** Identifies the stock and market.
* **date:** ISO formatted date of the trading day.

```json
{
  "open": 93.12,
  "high": 93.71,
  "low": 92.72,
  "close": 93.15,
  "volume": 7830000.0,
  "adj_high": 93.71,
  "adj_low": 92.72,
  "adj_close": 93.15,
  "adj_open": 93.12,
  "adj_volume": 7852882.0,
  "split_factor": 1.0,
  "dividend": 0.0,
  "symbol": "SBUX",
  "exchange": "XNAS",
  "date": "2023-10-30T00:00:00+0000"
}
```

---

## Benefits of JSON Storage

* **Standardized Data Format:** Easy to parse and use across Python scripts and web interfaces.
* **Efficient Updates:** Each night, the system updates the JSON file with the latest market data without overwriting historical information.
* **Flexibility:** Supports additional fields like technical indicators, ensuring compatibility with future strategy enhancements.
* **Seamless Integration:** Directly feeds `trading.py` for real-time analysis and [stockUtils](services-stockUtils.md) functions for historical computations.

## Data Pipeline Links

* Explore how the JSON data fuels real-time trading: [Feeding `trading.py`](services-trading.md)
* Review utility functions interacting with historical data: [StockUtils Module](services-stockUtils.md)
* Understand backtesting strategies using historical JSON data: [Backtesting Overview](strategy-discoverer.md)

---

This JSON-based storage system is the backbone of ATSB’s data management, providing a reliable, scalable, and accessible format for all trading operations.
