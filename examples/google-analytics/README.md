# Google Analytics integration for WatchMyConversion
This examples explains how to intergrate Google Analytics with WatchMyConversion using a scheduled script hosted on http://script.google.com/

# Implementation steps
1. Go to http://script.google.com/
2. Make sure you are logged in to the same account which has access to the Google Analytics report you wish to integrate
3. Create new project
4. On the left, add a new Service: Google Analytics API
5. Use the example script [google-analytics.js](google-analytics.js) and set the profile ID [How yo find your profile ID](#how-to-find-your-profile-id) and conversion ID's
6. Save the script, select `start()` in the topbar and press the play button
7. You will be redirected to provide access to the report

# Schedule script
After you've successfully implemented the script, you can schedule it.
1. In the menu on the left, go to 'Triggers'
2. In the bottom right, click 'Add trigger'
3. Select the function `start()`
4. Setup your update interval

[# How yo find your profile ID](#how-to-find-your-profile-id)