import { test, expect } from "playwright/test";
import PO from '../Pages/PO';
import Login from "../Pages/Login.Js";

test("PO Test Case", async ({ page }) => {
  const po = new PO(page);
  const login = new Login(page);

  await login.goto();
  await expect(page).toHaveURL("https://stage.loadsecuresystems.com/?filterBy=active");

  await po.completePOFlow();
});