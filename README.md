# Longest Valid Parentheses

Given a string containing just the characters `'('` and `')'`, find the length of the longest valid (well-formed) parentheses substring.

## Examples

### Example 1:
- **Input:** `s = "(()"`
- **Output:** `2`
- **Explanation:** The longest valid parentheses substring is `"()"`.

### Example 2:
- **Input:** `s = ")()())"`
- **Output:** `4`
- **Explanation:** The longest valid parentheses substring is `"()()"`.

### Example 3:
- **Input:** `s = ""`
- **Output:** `0`

### Example 4:
- **Input:** `s = "()(())"`
- **Output:** `6`

## Solution Approach (Stack)
Using a stack initialized with `-1` as a baseline boundary:
- Push indices of `'('` onto the stack.
- When encountering `')'`, pop the top index from the stack.
- If the stack becomes empty, push the current index as the new baseline boundary.
- Otherwise, update `maxLength` with `i - stack[top]`.

**Time Complexity:** $\mathcal{O}(n)$  
**Space Complexity:** $\mathcal{O}(n)$
