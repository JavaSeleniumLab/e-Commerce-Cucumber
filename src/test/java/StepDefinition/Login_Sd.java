package StepDefinition;

import DriverWrapper.DriverWrapper;
import POM.Pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class Login_Sd {

    LoginPage l1= new LoginPage();

    @Given("^Im on Login Page$")
    public void loginWebPage() {
        DriverWrapper.initDriver();
    }

    @And("^I enter (.*) in email tab$")
    public void enterEmail(String email) {
        l1.enterEmailOrPhoneNumber(email);

    }

    @And("^I enter (.*) in password tab$")
    public void enterPassword(String password) throws InterruptedException {
       l1.enterNewPassword(password);
       Thread.sleep(5000);
    }

    @And("^I click on Submit button$")
    public void clickLogin() throws InterruptedException {
        l1.clickSignInButton();
        Thread.sleep(5000);
    }


    @Then("^I verify invalid credential message$")
    public void invalidCredential(){
        String errorMsg2= "The password you’ve entered is incorrect. ";
        String errorMsg= l1.getErrorText();
        Assert.assertEquals(errorMsg, errorMsg2, "Error message isn't correct");
    }
    @And("^Close the browser$")
    public void closeBrowser(){
        DriverWrapper.quitBrowser();
    }











}
