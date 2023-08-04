# Supa Strikas

This project demonstrates the use of shared data access hooks for Supabase using React Query in an Nx monorepo with a Next.js 13 web application and an Expo-powered React Native mobile app. Check out the accompanying blog article [here](https://dev.to/barakamwakisha/supabase-in-a-monorepo-reusable-data-access-hooks-for-next-13-and-expo-l4p).

### Technology Stack

- [Nx](https://nx.dev/): A smart, fast, extensible build system with first class monorepo support.
- [Next.js](https://nextjs.org/): The React Framework for the Web
- [Expo](https://expo.dev/): A framework for building React Native applications with ease.
- [Supabase](https://supabase.io/): An open-source alternative to Firebase that provides a scalable backend platform.
- [React Query](https://tanstack.com/query/v3/): Powerful asynchronous state management for React


### Get Started

Install all the dependencies. Run `npm install`. 

Create a `.env` file in the workspace root and copy the contents of the `.env.example` file into it. Replace the placeholders with your Supabase credentials.

To start the Next app, run:
```
npx nx serve supa-web
```

To start the Expo app, run:
```
npx nx start supa-mobile
```