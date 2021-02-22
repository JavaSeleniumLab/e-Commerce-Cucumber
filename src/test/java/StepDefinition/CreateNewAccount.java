package StepDefinition;

import POM.Pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class CreateNewAccount {

    LoginPage l2 = new LoginPage();


    @Given("^I click on Create New Account Button$")
    public void i_click_on_Create_New_Account_Button() throws InterruptedException {
        l2.clickCreateNewAccount();
        Thread.sleep(2000);



    }


    @Given("^New Sign Up Information Page opens$")
    public void new_Sign_Up_Information_Page_opens() {
        String text = l2.verifyText();
        Assert.assertEquals(text, "It’s quick and easy.");

    }



    @Then("^I verify text message$")
    public void i_verify_text_message() {




    }











}
