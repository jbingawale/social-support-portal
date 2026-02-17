## 🧾 Project Overview

## This is a Multi-Step Financial Assistance Application Form built using:
* React + Vite
* Material UI (MUI)
* React Hook Form
* Redux Toolkit
* i18n (English + Arabic with RTL support)
* OpenRouter AI integration for AI-assisted writing

## The application allows users to:
* ✅ Fill a multi-step form
* ✅ Save progress automatically
* ✅ Get AI help to write responses
* ✅ Submit final application
* ✅ Support English & Arabic (RTL layout)

## 🚀 How to Run the Project
1️⃣ Install Dependencies

Open terminal inside project folder:
```
npm install
```
2️⃣ Create Environment File

Create a .env file in root:
```
VITE_OPENROUTER_KEY=your_api_key_here
```
3️⃣ Start Development Server
```
npm run dev
```

App will run at:
http://localhost:5173

## 🔑 How to Get OpenRouter API Key (FREE)

We used OpenRouter instead of OpenAI because: 
* OpenAI APIs are paid
* OpenRouter provides free AI models
* Same OpenAI-compatible API format
* Easy to integrate

Steps to Create Key
1. Visit: 👉 https://openrouter.ai/
2. Sign Up (Google/Github)
3. Go to API Keys
4. Dashboard → "API Keys"
5. Create New Key
6. Copy it.
7. Paste into .env
VITE_OPENROUTER_KEY=sk-xxxxx

## 🤖 AI Integration Details

We use OpenRouter API like OpenAI:
API Endpoint
```
https://openrouter.ai/api/v1/chat/completions
```
Implementation Features
✔ Plain-text responses (no markdown clutter)
✔ Error handling
✔ Loading state UI
✔ Modal preview before inserting text
✔ Short response constraints

Example Integration
```
const res = await axios.post(
  "https://openrouter.ai/api/v1/chat/completions",
  {
    model: "mistralai/mistral-7b-instruct",
    messages: [{ role: "user", content: prompt }],
  },
  {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
    },
  }
);
```

## 🏗️ Architecture Overview
Folder Structure
```
src/
 ├── components/
 │    ├── StepperForm
 │    ├── AIHelpModal
 │    ├── Header / Footer
 │
 ├── pages/
 │    ├── Step1.jsx
 │    ├── Step2.jsx
 │    ├── Step3.jsx
 │
 ├── redux/
 │    ├── formSlice.js
 │    ├── store.js
 │
 ├── services/
 │    ├── openaiService.js
 │    ├── apiService.js
 │
 ├── i18n/
 └── theme/
```
Key Design Decisions
1️⃣ Redux for Global Form State
Why?
* Persist data across steps
* Avoid prop drilling
* Easy localStorage persistence

2️⃣ React Hook Form
Chosen because:
* High performance
* Minimal re-renders
* Built-in validation

3️⃣ Controller Usage Strategy
Used only where necessary:
* Field Type	Reason
* Select	Needs controlled value
* Date Picker	Controlled component
* Text inputs	Used register()

## 📋 Form Flow & Validation
Step 1 — Personal Information
* Name
* National ID
* Date of Birth
* Gender
* Address
* City
* State
* Country
* Address
* Phone
* Email
  
Validations:
* ✔ Required fields
* ✔ Proper input types

Step 2 — Financial Details
* Marital Status
* Dependents
* Employment Status
* Income
* Housing

Validations:
* ✔ Required
* ✔ Numeric validations

Step 3 — AI Assisted Writing
* Financial Situation
* Employment Circumstances
* Reason for Applying

Reason for Applying
Features:
* ✔ AI Help button
* ✔ Modal preview
* ✔ Accept or discard suggestion

## 💾 Data Persistence
Form data is saved:
* In Redux store
* Synced to localStorage
  
This ensures:
* ✔ Data remains after refresh
* ✔ Multi-step continuity

## 🎯 Submission Flow
On successful submit:
* API call sent
* Success modal shown
* Redux reset
* localStorage cleared
* User returned to Step 1

## 🎨 UI / UX Design
Goals
* ✔ Clean layout
* ✔ Mobile friendly
* ✔ Clear step progression
* ✔ Minimal cognitive load

Implemented Features
* Centered card layout
* Responsive grid system
* Proper spacing
* Visual feedback for loading

## 📱 Mobile Responsiveness
Handled using:
* MUI Grid system
* Max width container
* Flexible typography

Works smoothly on:
* ✔ Mobile
* ✔ Tablet
* ✔ Desktop

## ♿ Accessibility Basics Implemented
ARIA Labels
Used for:
* Form inputs
* Buttons
* Regions
* Keyboard Navigation
* Tab focus supported
* Modal accessible
* RTL Language Support

Arabic mode:
* ✔ Layout direction switches
* ✔ Text alignment correct
* ✔ UI remains usable

## 🔒 Error Handling
Handled in:
* AI Requests
* Try/catch
* Fallback alerts
* Loading spinner
* Form Validation
* Inline error messages
* Prevent submission until valid

## 🚀 Possible Future Improvements
* Add backend database storage
* Implement authentication
* Add file upload support
* Improve AI prompt personalization
* Add form autosave indicator

## 🧑‍💻 Author Notes
This project demonstrates:
* Clean React architecture
* Real-world AI integration
* Proper form state management
* Accessibility awareness
* Production-ready UX patterns

## ✅ Summary
This project showcases a complete modern full-stack frontend pattern including:
* Multi-step forms
* AI integration
* Internationalization
* State persistence
* Accessibility
* Clean UX
