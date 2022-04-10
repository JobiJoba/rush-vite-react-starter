// Imports
import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"

// To Test
import App from "../App"

// Tests
test("Renders main page correctly", async () => {
  // Setup
  render(<App />)
  const buttonCount = await screen.findByRole("button")

  // Pre Expecations
  expect(buttonCount.innerHTML).toBe("count is: 0")
  // Instead of:
  // expect(codeCount).toBeNull();

  // Init
  user.click(buttonCount)
  user.click(buttonCount)

  // Post Expectations
  expect(buttonCount.innerHTML).toBe("count is: 2")
  expect(await screen.queryByText(/count is:/)).toBeInTheDocument()
})
