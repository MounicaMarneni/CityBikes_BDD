$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CityBikes.feature");
formatter.feature({
  "line": 1,
  "name": "City bikes API automation tests",
  "description": "",
  "id": "city-bikes-api-automation-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "As a user I want to verify that the city Frankfurt is in Germany and return their corresponded latitude and longitude",
  "description": "",
  "id": "city-bikes-api-automation-tests;as-a-user-i-want-to-verify-that-the-city-frankfurt-is-in-germany-and-return-their-corresponded-latitude-and-longitude",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I call city bikes API networks endpoint \u0027http://api.citybik.es/v2/networks?fields\u003dlocation\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I receive a valid response from the API",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Verify that city \u0027Frankfurt\u0027 is in \u0027DE\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I receive it\u0027s corresponding latitude and longitude values",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://api.citybik.es/v2/networks?fields\u003dlocation",
      "offset": 41
    }
  ],
  "location": "StepDefinition.connectToCityBikesAPI(String)"
});
formatter.result({
  "duration": 1003828500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verifyCityBikesAPIResponse()"
});
formatter.result({
  "duration": 1178700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Frankfurt",
      "offset": 18
    },
    {
      "val": "DE",
      "offset": 36
    }
  ],
  "location": "StepDefinition.verifySpecifiedCityIsInSpecifiedCountry(String,String)"
});
formatter.result({
  "duration": 835300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.verifyNonNullLatitudeAndLongitudeValues()"
});
formatter.result({
  "duration": 260900,
  "status": "passed"
});
});