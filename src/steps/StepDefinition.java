package steps;

import model.Location;
import model.Network;
import model.Networks;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;

import static org.junit.Assert.assertTrue;

public class StepDefinition {

   Networks apiResponse;
   Network network;

   @Given("^I call city bikes API networks endpoint '(.*)'$")
   public void connectToCityBikesAPI(String cityBikesApiUrl) {
      RestTemplate restTemplate = new RestTemplate();
      apiResponse = restTemplate.getForObject(cityBikesApiUrl, Networks.class);
   }

   @When("^I have a valid response from the API$")
   public void verifyCityBikesAPIResponse() {
      assertTrue(apiResponse.getNetworks() != null);
   }

   @Then("^Verify that city '(.*)' is in '(.*)'")
   public void verifySpecifiedCityIsInSpecifiedCountry(String city, String country) {
      Optional<Network> networkOptional = apiResponse.getNetworks().stream()
            .filter(network ->
                  (city.equalsIgnoreCase(network.getLocation().city)
                        && country.equalsIgnoreCase(network.getLocation().country)))
            .findFirst();
      assertTrue(networkOptional.isPresent() == true);

      if (networkOptional.isPresent()) {
         network = networkOptional.get();
      }
   }

   @Then("^I receive it's corresponding latitude and longitude values")
   public void verifyNonNullLatitudeAndLongitudeValues() {
      Location location = network.getLocation();
      assertTrue(location.getLatitude() != null);
      assertTrue(location.getLongitude() != null);
      System.out.println("Latitude: " + location.getLatitude());
      System.out.println("Longitude: " + location.getLongitude());
   }

}
