# WatchMyConversion
This repository provides API documentation and examples to connection your conversion to the WatchMyConversion app.

## General approach
1. Download the WatchMyConversion app and login
2. Add a conversion
3. Copy the conversion ID (tap will copy to clipboard)
4. Use this conversion ID to post your conversion to WatchMyConversion using the API or pre-build scripts
5. The conversion will be shown in the app

## API
*Method*: POST

*URL*: https://europe-west1-watch-my-conversion.cloudfunctions.net/updateConversion?api_key=tXXLtWp3Yz6K7t3m

*Headers*: Content-Type: application/json

*Body*: {"conversionId": "conversion ID", "value": 3255.89, "label": "Today's conversion"}


## Pre-build scripts
- [Google Analytics](examples/google-analytics/README.md)
- Google BigQuery

## Contribution
Feel free to submit issues, feature requests or questions!