# City Bikes API BDD Automation testing with JAVA

#### Purpose of this application
Handles testing of City bikes API with BDD scenarios.

Tests if the received response from API has Frankfurt city in Germany and it's latitude and longitude values are returned.

### Pre-requisites to run this project
- Any IDE like intelliJ or Eclipse.
- 'Cucumber for Java' plugin installed on IntelliJ. 'Cucumber Eclipse' if it's eclipse.


### Running this application
This project can be run locally in an IDE like intelliJ.

1. Import as Java project
2. Configure build path, For intelliJ, File > Project Structure > Modules > Dependencies > click on '+' and all jars from project's lib folder
3. Then open CucumberRunner.java > Right click and run. You can also run Citybikes.feature directly.
4. Results can be seen in intelliJ and also on browser with Cucumber reports.
5. For cucumber reports, open index.html in cucumber-reports from target folder in browser.