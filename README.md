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

```text
.
├── tests/
│   └── test_cases.test.js    # Main test automation script
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Locked versions of dependencies
└── README.md                 # Project documentation
```
## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone [https://github.com/tharushi-22/ITPM-Assignment1.git](https://github.com/tharushi-22/ITPM-Assignment1.git)
cd ITPM-Assignment1
```
### 2. Install Playwright & Dependencies

- Install Node.js dependencies

```bash
npm install
```
- Install Playwright browsers

```bash
npx playwright install
```
### 3. Run Tests

- Run all tests
```bash
npm test
```
- Alternative command
```bash
npx playwright test
```

## 📊 Running Tests
### Basic Commands
- Run with visible browser

```bash
npx playwright test --headed
```
- Run specific test file

```bash
npx playwright test tests/test_cases.test.js
```

- View HTML report

```bash
npx playwright show-report
```

## 🔧 Configuration
- Timeout: 30 seconds per test
- Browser: Chromium
- Mode: Headless by default

## 🐛 Troubleshooting
### Installation Issues
- Force browser installation
```bash
npx playwright install --force
```
- Increase timeout
```bash
npx playwright test --timeout=60000
```
- Debug mode
```bash
npx playwright test --debug
```

## ⚙️ Prerequisites Check
Ensure:
- Node.js v16+
- Internet connection
- Website accessible (https://www.swifttranslator.com/)

## 📈 Results
- Console output during execution
- HTML report: playwright-report/
- Test artifacts: test-results/

## 📝 Notes
- Tests require internet access
- Sequential execution for reliability
- Console shows input/output comparisons
