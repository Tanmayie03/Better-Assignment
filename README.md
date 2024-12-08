# Sign-Up and Login Form Application

This project provides an accessible and user-friendly interface for signing up and logging in.

## Table of Contents

1. [How to Run the Project](#how-to-run-the-project)
2. [Design Choices Made](#design-choices-made)
3. [Assumptions and Limitations](#assumptions-and-limitations)

---

## How to Run the Project

### Prerequisites

1. Install [Node.js](https://nodejs.org/)
2. Install a code editor like [VS Code](https://code.visualstudio.com/).

### Installation Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-repo-name
   ```
2. Run project:
   ```bash
   npm install
   npm run dev
   ```

## Design Choices Made

1. Responsive Design
   CSS Frameworks: Utilized TailwindCSS for rapid styling and consistency across components.
2. User Experience
   Validation: Integrated Formik with Yup for schema-based form validation for instant feedback.
   Password Strength Indicator enhanced the sign-up process by providing a visual password strength meter.

## Assumptions and Limitations

1. Assumptions
   The application assumes that the user inputs valid email and password formats as required.

2. Backend Integration:
   Currently, there’s no backend system thus the application displays alerts for successful actions but does not stores user data.
