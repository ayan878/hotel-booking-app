import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173";
test("should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("ayanraza197@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).fill("123456");

  await page.getByRole("button", { name: "Sign In" }).click();

  await expect(page.getByText("Sign In Successful")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});


test("should allow the user to register", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign In" }).click();

  await page.getByRole("link", { name: " Create an account here?" }).click();
  await expect(
    page.getByRole("heading", { name: "Create an Account" })
  ).toBeVisible();

  await page.locator('input[name="firstName"]').fill("Ayan");
  await page.locator('input[name="lastName"]').fill("Raza");

  await page
    .locator('input[ type="email"]')
    .fill(`ayanraza${Math.floor(Math.random()* 500 - 100) + 1}@gmail.com`);

  await page.locator('input[type="password"]').nth(0).fill("password123"); // First password input
  await page.locator('input[type="password"]').nth(1).fill("password123"); // confirm password input

  await page.getByRole("button", { name: "Create Account" }).click();
  await expect(page.getByText("Register Successful")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});
