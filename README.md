# Auth v5 Demo

This is a demonstration project showcasing the implementation of various authentication functionalities using Auth v5. The project includes the following features:

## Functionalities

1. **Social Media Login**
   - Users can sign in using their social media accounts, such as Facebook, Google, or Twitter.
   - Integration with OAuth 2.0 allows for a seamless and secure social media login experience.

2. **Email Verification**
   - New users are required to verify their email address upon registration.
   - A verification email is sent to the user's registered email address with a unique link for validation.

3. **Two-Factor Authentication**
   - Enhance account security with two-factor authentication (2FA).
   - Users have the option to enable 2FA, and they will need to provide a secondary verification code in addition to their password during login.

4. **Role-Based Verification**
   - Implement role-based access control for user accounts.
   - Assign different roles to users (e.g., admin, user, moderator), and control access to specific features or content based on their assigned roles.

## Getting Started

Follow these steps to set up the Auth v5 demo on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/auth-v5-demo.git

2. **Install Dependencies:**
   ```bash
   cd auth-v5-demo
   npm install

3. **Configure Environment Variables:**
    - Create a .env file in the root directory and set the required   environment variables. Sample variables include:
    ```bash
    DATABASE_URL=
    DIRECT_URL=
    AUTH_SECRET=
    GITHUB_CLIENT_ID=
    GITHUB_CLIENT_SECRET=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    RESEND_API_KEY=
    NEXT_PUBLIC_APP_URL=

## Access the Demo
Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to explore the Auth v5 demo.

## Technologies Used
- Next js
- Auth js (v5)
- Resend
- Your preferred database technology (e.g., MongoDB, PostgreSQL)

## Contributions
Feel free to contribute to the project by submitting issues or pull requests. Contributions are always welcome!

## License
This project is licensed under the MIT License
