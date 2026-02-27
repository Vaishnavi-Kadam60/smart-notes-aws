# Smart Notes Manager – AWS Full Stack Web Application

## 📌 Project Overview
Smart Notes Manager is a full-stack web application built using Next.js and AWS services.  
The application allows users to create, view, and delete notes.  

The project demonstrates serverless architecture using AWS Lambda, API Gateway, and DynamoDB.

---

## 🚀 Live Demo
Hosted on AWS Amplify:

🔗 https://main.d2iyg1yjz7jy3c.amplifyapp.com

---

## 🛠️ Tech Stack

### Frontend
- Next.js (React Framework)
- Fetch API for HTTP requests

### Backend (Serverless Architecture)
- AWS Lambda
- Amazon API Gateway (HTTP API)
- Amazon DynamoDB
- Amazon S3
- AWS Amplify (Frontend Hosting)

---

## 🏗️ Architecture

Frontend (Next.js)  
⬇  
API Gateway  
⬇  
AWS Lambda  
⬇  
DynamoDB  

---

## ✨ Features

- Add new notes
- View all saved notes
- Delete notes
- Persistent storage using DynamoDB
- Fully hosted on AWS
- No EC2 used (Serverless architecture)

---

## ⚙️ How It Works

1. User submits note from frontend.
2. API Gateway receives request.
3. Lambda function processes the request.
4. DynamoDB stores or retrieves note data.
5. Response is sent back to frontend.

---

## 📂 Repository Structure

src/app/page.js → Frontend UI & API Calls
Lambda Function → Backend logic
DynamoDB → Database


---

## 👩‍💻 Developed By

Vaishnavi Kadam  
Final Year Student-2026