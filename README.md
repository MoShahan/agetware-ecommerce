# E-Commerce App with Next.js

# Live Link - https://agetware-ecommerce.vercel.app/

This is a fully functional e-commerce web application built using Next.js, Material UI (MUI), Firebase Authentication, and other modern web technologies. The app allows users to browse products, add them to their cart, checkout, and even manage products in the admin panel.

## Features

- **Product Listing**: View a list of products with price and rating on the homepage.
- **Product Details**: View detailed information about a product, select quantity, and add it to your cart.
- **Shopping Cart**: View all added products, check the total amount, and proceed to checkout.
- **Admin Panel**: Manage products (add, edit, delete) through a simple table interface.
- **Authentication**: Secure login and signup using Firebase Authentication.
- **Mobile Responsive Design**: The app is fully responsive and optimized for mobile devices.
- **Toast Messages**: Instant notifications for user actions (e.g., product added to cart, successful login).
- **Test Cases**: Unit and integration test cases to ensure the reliability of the application.

## Technologies Used

- **Next.js**: React framework for building server-side rendered applications.
- **Material UI**: A React UI framework to create a modern and responsive design.
- **Firebase Authentication**: Authentication service for secure login and signup functionality.
- **React Testing Library / Jest**: For writing and running test cases.

## Pages

- **Root (`/`)**: Displays a list of products with price and rating.
- **Product Detail (`/product/[id]`)**: Shows detailed product information where users can select quantity and add the item to their cart.
- **Cart (`/cart`)**: Shows all products added to the cart, displays the total amount, and has a checkout button.
- **Admin (`/admin`)**: Allows admins to view, add, edit, or delete products.

## Installation

To get started with this project, follow the steps below:

### 1. Clone the repository

```
git clone https://github.com/MoShahan/agetware-e-commerce.git
cd agetware-e-commerce
```

### 2. Install dependencies

```
npm install
```

### 3. Set up Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable **Email/Password Authentication** in Firebase Authentication settings.
- Obtain your Firebase config keys and add them to a `.env.local` file in the root of the project:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 4. Run the app

Start the development server:

```
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Panel Usage

1. Go to `/admin` after logging in with an admin account.
2. You will see a table of all products with options to:
   - **Add** a new product.
   - **Edit** existing products.
   - **Delete** a product.

## Authentication

- **Login**: Use Firebase Email/Password authentication to log into the app.
- **Signup**: Users can register via Firebase authentication.
- Authentication-related functionalities are present in `/login` and `/signup` pages.

## Testing

To run the test cases:

```
npm run test
```

This will run the Jest and React Testing Library test suites to ensure the application behaves as expected.

## Mobile Responsiveness

The application is designed to be fully responsive, ensuring that users have an optimal experience across various devices, including mobile phones and tablets. MUI's responsive grid system is utilized to handle layout changes based on screen size.

## Toast Notifications

Toast messages are displayed for:

- Adding a product to the cart.
- Successful login/signup.
- Any error messages or actions that require user attention.
