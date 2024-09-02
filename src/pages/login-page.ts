import { Page } from "@playwright/test";
import { BasePage } from "./base-page";


export class LoginPage extends BasePage{

    public url = '/login';
    public loginPath = '//*[@id="username"]';
    public passPath = '//*[@id="password"]';

}