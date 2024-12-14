import { test, expect } from "@playwright/test";

test.describe("Dashboard Page Tests", () => {
	test.beforeEach(async ({ page }) => {
		// TODO: Update when everything is merged to ensure E2E works with correct beforeEach
		await page.goto("http://localhost:3000/dashboard");
	});

	test("All dashboard components are displayed", async ({ page }) => {
		await expect(page.locator("text=Resume Fit Score")).toBeVisible();
		// FitScoreChart's Rating component
		await expect(page.locator(".MuiRating-root")).toBeVisible();
		// Skills and Keywords Matched
		await expect(
			page.locator("text=Skills and Keywords Matched"),
		).toBeVisible();

		// Improvement Suggestions
		await expect(
			page.locator("text=Improvement Suggestions"),
		).toBeVisible();

		// Checkboxes
		await expect(page.locator('label:has-text("All")')).toBeVisible();
		await expect(page.locator('label:has-text("skills")')).toBeVisible();
		await expect(
			page.locator('label:has-text("experience")'),
		).toBeVisible();
	});
});
