# Watch My Conversion
This repository provides API documentation and examples to connection your conversion to the Watch My Conversion app.

<a target="_blank" href="https://apps.apple.com/us/app/watchmyconversion/id1536934658"><img src="docs/assets/img/apple-store-badge.png" alt="Download on the App Store" height="50"/></a>
<a target="_blank" href="https://play.google.com/store/apps/details?id=nl.wewantweb.watchmyconversion"><img src="docs/assets/img/google-play-badge.png" alt="Get on Google Play" height="50"/></a>


## General approach
1. Download the Watch My Conversion app and login
2. Add a conversion
3. Copy the conversion ID (tap will copy to clipboard)
4. Use this conversion ID to post your conversion to Watch My Conversion using the API or pre-build scripts
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