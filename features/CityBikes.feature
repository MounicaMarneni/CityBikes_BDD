Feature: City bikes API automation tests
 Background: Connecting to City bikes API endpoint
  Given I call city bikes API networks endpoint 'http://api.citybik.es/v2/networks?fields=location'
  Then I have a valid response from the API

 Scenario: As a user I want to verify that the city Frankfurt is in Germany and return their corresponded latitude and longitude
  Given I have a valid response from the API
  Then Verify that city 'Frankfurt' is in 'DE'
  And I receive it's corresponding latitude and longitude values
