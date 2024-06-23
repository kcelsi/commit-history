# Git Commit History App

This is a simple application to display the git commit history of the repository.

Link to app: https://commit-history-delta.vercel.app/

## 🧑‍🔧 Technologies Used

- React with TypeScript
- Next.js 14 with App Router
- Tailwind CSS
- dayjs

## 🎉 Features

- Display git commit history
- Auto-update commit timestamps
- Refresh commit list with a button click

## 👩‍💻 How to Run Locally

1. Clone the repository
2. Install dependencies:
    ```
    npm install
    ```
3. Create a .env.local file in the root of the project and add your GitHub personal access token:
    ```
    GITHUB_ACCESS_TOKEN=your_github_token
    GITHUB_USERNAME=your_name
    REPO_NAME=your_repo
    ```
4. Run the development server:
    ```
    npm run dev
    ```
 

## 📋 Need TODO
- Add routing /USER_NAME/PROJECT?count="20" 🛣️
- Make universal service for load data 💾
- Add pagination and intersection-observer
- Add more smart loader 🙃
- Process errors 🐞
- Maybe need to optimize some components  ⏱️
- Think about cache data 🤔


