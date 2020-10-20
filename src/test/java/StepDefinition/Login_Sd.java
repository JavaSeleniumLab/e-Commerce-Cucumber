package StepDefinition;

import DriverWrapper.DriverWrapper;
import POM.Pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class Login_Sd {

    LoginPage l1= new LoginPage();

    @Given("^Im on Login Page$")
    public void loginWebPage() {
        DriverWrapper.getDriver();
    }

    @And("^I enter (.*) in email tab$")
    public void enterEmail(String email) {
        l1.enterEmailOrPhoneNumber(email);

    }

    @And("^I enter (.*) in password tab$")
    public void enterPassword(String password){
       l1.enterNewPassword(password);
    }

    @And("^I click on Submit button$")
    public void clickLogin(){
        l1.clickSignInButton();
    }













}
