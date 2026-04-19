// import { test, expect } from "@playwright/test";
// import { DASHBOARD } from "../login/login";
// test.use({
//   storageState: "auth/client.json",
// });

// test("test", async ({ page }) => {
//   await page.goto(DASHBOARD, { waitUntil: "networkidle" });

//   await page.getByTestId("menu-item-asset-management").click();
//   await page.waitForTimeout(500);
//   await page.getByTestId("submenu-item-asset-allocation").click();
//   await page.waitForTimeout(500)
//   // await page.getByTestId("AM-AA-A-search-allocations-input").click();
//   // await page.waitForTimeout(500)
//   // await page
//   //   .getByTestId("AM-AA-A-search-allocations-input")
//   //   .fill("TBC01HDMI1776078148606819");
//   //   await page.waitForTimeout(500)
//   await page.locator("li.px-3.py-2.hover").first().click();
//   await page.waitForTimeout(500)
//   await page.getByTestId("AM-AA-A-clear-search-button").click();
//   await page.waitForTimeout(500)
//   await page.getByTestId("AM-AA-AAM-users-tab").click();
//   await page.waitForTimeout(500)
//   await page
//     .getByTestId("AM-AA-U-user-name-0")
//     .getByText("Nagesh Sureshrao Kadam")
//     .click();
//     await page.waitForTimeout(500)
//     await page.getByTestId("AM-AL-asset-type-input").click();
//     await page.locator("li.px-3.py-2.hover").first().click();

//   // await page.getByTestId("AM-AA-UAA-pagination-page-2").click();
//   // await page.waitForTimeout(500)
//   // await page.getByTestId("AM-AA-UAA-pagination-page-3").click();
//   // await page.waitForTimeout(500)
//   // await page.getByTestId("AM-AA-UAA-pagination-page-4").click();
//   // await page.waitForTimeout(500)
//   // await page.getByTestId("AM-AA-UAA-back-button").click();
//   // await page.waitForTimeout(500)
//   // await page.getByTestId("AM-AA-AAM-users-tab").click();
//   // await page.waitForTimeout(500)
// });
