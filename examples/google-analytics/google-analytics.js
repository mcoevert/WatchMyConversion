function start() {
  // Profile ID of the analytics report (Not the UA-XXXXXX number!)
  var profileId = ""; //VIEW ID
  // Copy the conversion ID from the WatchMyConversion app
  var conversionIdToday = "";
  // Copy the conversion ID from the WatchMyConversion app
  var conversionIdYesterday = "";
  var transactionsTodayID = "";
  var transactionsYesterdayID = "";
  visitorsToday(profileId, conversionIdToday);
  visitorsYesterday(profileId, conversionIdYesterday);
  transactionsToday(profileId, transactionsTodayID);
  transactionsYesterday(profileId, transactionsYesterdayID);
}
function sendTowatchMyConversion(conversionId, label, value) {
  var data = {
    label: label,
    conversionId: conversionId,
    value: value,
  };

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(data),
  };
  UrlFetchApp.fetch(
    "https://europe-west1-watch-my-conversion.cloudfunctions.net/updateConversion?api_key=tXXLtWp3Yz6K7t3m",
    options
  );
  return value;
}

function visitorsToday(profileId, conversionId) {
  var start = new Date();
  start.setHours(0, 0, 0, 0);

  var end = new Date();
  end.setHours(23, 59, 59, 999);
  var visitors = getMetric(profileId, start, end, (metric = "ga:visitors"));

  sendTowatchMyConversion(conversionId, "Bezoekers vandaag", visitors);
}

function visitorsYesterday(profileId, conversionId) {
  var start = new Date();
  start.setDate(start.getDate() - 1);
  start.setHours(0, 0, 0, 0);

  var end = new Date();
  end.setDate(end.getDate() - 1);
  end.setHours(23, 59, 59, 999);
  // var visitors = getVisitors(profileId, start, end);
  var visitors = getMetric(profileId, start, end, (metric = "ga:visitors"));

  sendTowatchMyConversion(conversionId, "Bezoekers gisteren", visitors);
}

function transactionsToday(profileId, conversionId) {
  var start = new Date();
  start.setHours(0, 0, 0, 0);

  var end = new Date();
  end.setHours(23, 59, 59, 999);
  var transactions = getMetric(
    profileId,
    start,
    end,
    (metric = "ga:transactions")
  );

  sendTowatchMyConversion(conversionId, "Transacties Vandaag", transactions);
}

function transactionsYesterday(profileId, conversionId) {
  var start = new Date();
  start.setDate(start.getDate() - 1);
  start.setHours(0, 0, 0, 0);

  var end = new Date();
  end.setDate(end.getDate() - 1);
  end.setHours(23, 59, 59, 999);
  // var visitors = getVisitors(profileId, start, end);
  var transactions = getMetric(
    profileId,
    start,
    end,
    (metric = "ga:transactions")
  );

  sendTowatchMyConversion(conversionId, "Transacties Gisteren", transactions);

  // var visitors = getMetric(profileId, start, end, metric="ga:visitors")
  // sendTowatchMyConversion(conversionId, 'Bezoekers gisteren', visitors);
}

function getMetric(profileId, start, end, metric = "ga:visitors") {
  var startDate = Utilities.formatDate(
    start,
    Session.getScriptTimeZone(),
    "yyyy-MM-dd"
  );
  var endDate = Utilities.formatDate(
    end,
    Session.getScriptTimeZone(),
    "yyyy-MM-dd"
  );

  var tableId = "ga:" + profileId;
  // var metric = 'ga:visitors';
  // var metric = 'ga:transactions';

  var options = {};
  var report = Analytics.Data.Ga.get(
    tableId,
    startDate,
    endDate,
    metric,
    options
  );

  if (report.rows) {
    // Append the headers.
    var headers = report.columnHeaders.map(function (columnHeader) {
      return columnHeader.name;
    });
    var metricIndex = headers.indexOf(metric);
    Logger.log(metricIndex);
    Logger.log(report.rows[0][metricIndex]);
    Logger.log("Report headers:");
    Logger.log(headers.length);
    Logger.log(JSON.stringify(headers));
    Logger.log("Report rows:");
    Logger.log(report.rows.length);
    Logger.log(JSON.stringify(report.rows));
    return report.rows[0][metricIndex];
  } else {
    Logger.log("No rows returned.");
  }
  return 0;
}
