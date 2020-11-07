package TestRunner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        // path of your feature files
        features = {"src/main/resources/Login.feature"},

        // Specify the step definition package
        glue = {"StepDefinition", "DriverPkg"},

        // create cucumber reports
        plugin = {"pretty", "html:Reports/Default/"},

        snippets = cucumber.api.SnippetType.CAMELCASE,

        //tags = {"@login1"},

        monochrome = true

)
public class testRunner {
}
