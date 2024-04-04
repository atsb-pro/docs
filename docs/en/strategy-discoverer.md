# Strategies

![](/images/hystorical_prices.jpg)


In this part of our project we are trying to find the most profitable strategy possible with our idea. We engage with diffirent functions from several directories to avoid repeating, mostly with files from stockutils. The directory itself contains two files. The one is `runner.py`. There we are analysing the past running through plenty of stocks and comming up with the best strategy possible. Of course, we take into account that in order to improve the chances for successful strategy, we have to run each one of them on a different time period. `score.py` contains a function to calculate the power with which we must sell or buy a stock. `runner.py` uses this function in its system.

_To find out which functions `runner.py` uses, click here_ - Utility functions