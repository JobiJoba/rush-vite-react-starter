// Imports
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

// To Test
import App from '../App'

// Tests
test('Renders main page correctly', async () => {
    // Setup
    render(<App />)
    const buttonCount = await screen.findByRole('button')

    // Pre Expecations
    expect(buttonCount.innerHTML).toBe('0')
    // Instead of:
    // expect(codeCount).toBeNull();

    // Init
    await user.click(buttonCount)
    await user.click(buttonCount)

    // Post Expectations
    expect(buttonCount.innerHTML).toBe('2')
})
