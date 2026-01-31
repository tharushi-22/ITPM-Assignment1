# Singlish to Sinhala Translator - Test Automation Suite

## 📋 Project Overview
Playwright-based automated testing suite for the SwiftTranslator website. Tests Singlish to Sinhala text conversion accuracy with comprehensive test cases.

## 🎯 Features
✅ 40+ Comprehensive Test Cases  
✅ Real-time Conversion Testing  
✅ Multiple Input Types  
✅ Automated Validation  

## 🛠️ Technologies
- Playwright
- Node.js
- JavaScript

## 📁 Project Structure
tests/test_cases.test.js # Main test file
package.json # Dependencies
package-lock.json # Lock file
README.md # Documentation

## 🚀 Quick Start

### 1. Clone Repository
git clone https://github.com/your-username/singlish-sinhala-tests.git
cd singlish-sinhala-tests

### 2. Install Playwright & Dependencies

# Install Node.js dependencies
npm install

# Install Playwright browsers
npx playwright install

### 3. Run Tests

# Run all tests
npm test

# Alternative command
npx playwright test

📊 Running Tests
Basic Commands
# Run with visible browser
npx playwright test --headed

# Run specific test file
npx playwright test tests/test_cases.test.js

# View HTML report
npx playwright show-report

🔧 Configuration
Timeout: 30 seconds per test
Browser: Chromium
Mode: Headless by default

🐛 Troubleshooting
Installation Issues
# Force browser installation
npx playwright install --force

# Increase timeout
npx playwright test --timeout=60000

# Debug mode
npx playwright test --debug

Prerequisites Check
Ensure:
Node.js v16+
Internet connection
Website accessible (https://www.swifttranslator.com/)

📈 Results
Console output during execution
HTML report: playwright-report/
Test artifacts: test-results/

📝 Notes
Tests require internet access
Sequential execution for reliability
Console shows input/output comparisons
