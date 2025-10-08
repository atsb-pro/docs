# Feeding `trading.py` with Real-Time Insights

<span style="font-size: 18px;">In the ever-changing world of finance, having access to the latest market data is crucial for making informed trading decisions. That's why our project incorporates a sophisticated nightly data pipeline. This automated system operates behind the scenes, silently ensuring that trading.py, the core of your trading strategy analysis, is always working with the freshest market information. Every night, this pipeline swings into action, performing a critical refresh that guarantees your trading decisions are based on the most up-to-date insights. Let's delve deeper and explore the inner workings of this vital process...</span>
<br>

![runner-power](/images/check-stock-trading.jpg)

## Under the hood

* **Scheduled Script Execution:** 
     * Launch an EC2 instance and install the script on it.
     * Use the built-in cron scheduler on Linux/Unix systems within the EC2 instance to run the script at the desired time.
     * This approach requires managing the EC2 instance lifecycle (start, stop, updates).

* **API Connection and Data Retrieval:** The script establishes a secure connection to a financial data API (e.g., Alpha Vantage, IEX Cloud) using appropriate authentication credentials.
* **Stock Data Acquisition:** It retrieves the latest stock data for your chosen symbols, potentially including historical closing prices, trading volumes, technical indicators, or other relevant financial metrics.
* **Data Validation and Cleaning:** The script may perform basic data validation to ensure consistency and handle any missing values or outliers.
* **JSON Transformation:** The retrieved data is formatted into JSON (JavaScript Object Notation) format, a structured and human-readable data interchange format.
data.json Update: The script writes the newly formatted JSON data to the data.json file, effectively overwriting the previous day's data.


![AWS server](/images/aws.jpg)

## Advantages of this Technical Approach

**Automated Efficiency -** Eliminates manual data updates, saving time and effort.

**Scalability -** The pipeline can be easily adapted to handle a larger number of stocks or additional data sources.

**Flexibility -** Different data APIs can be integrated based on specific requirements and data availability.

**Data Consistency -** Standardized JSON format ensures smooth data exchange between the pipeline and trading.py.