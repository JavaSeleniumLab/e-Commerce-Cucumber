package POM.Pages;

import org.openqa.selenium.By;

public class LoginPage extends basePage{

    private By firstNameLocator = By.xpath("//input[@name='firstname']");
    private By lastNameLocator = By.xpath("//input[@name='lastname']");
    private By emailOrPhoneNumberLocator = By.xpath("//input[@name='email']");
    private By newPasswordLocator = By.xpath("//input[@name='pass']");
    private By dateDropdownLocator = By.id("day");
    private By monthDropdownLocator = By.id("month");
    private By yearDropdownLocator = By.id("year");
    private By femaleRadioLocator = By.xpath("//input[@value='1']");
    private By signUpLocator = By.xpath("//button[@name='websubmit' and text()='Sign Up']");
    private By errorMsgLocator = By.xpath("//div[text() = 'Please enter a valid mobile number or email address.']");
    private By newAccountButtonLocator = By.xpath("//a[@data-testid='open-registration-form-button']");

    private By signInEmailOrPhoneLocator = By.id("email");
    private By signInPasswordLocator = By.id("pass");
    private By signInButtonLocator = By.name("login");
    private By errorMessage = By.xpath("//div[@class='_9ay7']");

    //Methods
    //@Step("Sign In: Enter email or phone number as {0}")
    public void enterSignInEmailOrPhone(String emailOrPhone) {
        type(signInEmailOrPhoneLocator, emailOrPhone);
    }
    //@Step("Sign In: Enter password as {0}")
    public void enterSignInPassword(String password) {
        type(signInPasswordLocator, password);
    }

   // @Step("Sign In: Click Login button")
    public void clickSignInButton() {
        clickThis(signInButtonLocator);
    }

    public void enterFirstname(String fname) {
        type(firstNameLocator, fname);
    }

    public void enterLastname(String lname) {
        type(lastNameLocator, lname);
    }

    public void enterEmailOrPhoneNumber(String emailOrPhone) {
        type(emailOrPhoneNumberLocator, emailOrPhone);
    }

    public void enterNewPassword(String newPassword) {
        type(newPasswordLocator, newPassword);
    }

    public void selectDate(String date) {
        selectText(dateDropdownLocator, date);
    }

    public void selectMonth(String month) {
        selectText(monthDropdownLocator, month);
    }

    public void selectYear(String year) {
        selectText(yearDropdownLocator, year);
    }

    public void selectFemale() {
        clickThis(femaleRadioLocator);
    }

    public boolean isFemaleSelected() {
        return isSelected(femaleRadioLocator);
    }

    public void clickSignUp() {
        clickThis(signUpLocator);
    }

    public boolean isEmailOrPhoneErrorDisplayed() {
        return isElementDisplayed(errorMsgLocator);
    }

    public void clickCreateNewAccount() {
        clickThis(newAccountButtonLocator);
    }

    public String getErrorText (){
        return getText(errorMessage);
    }

}


