# Final Assessment Quiz

A modern, responsive, and high-performance web application for administering the **Final Assessment Quiz** (100 questions). Designed to run client-side with zero server load, effortlessly handling 30–40+ concurrent students with anti-cheat shuffling and instant results.

## 🚀 Key Features

- **100 Comprehensive Questions**:
  - Programming Basics (Questions 1–12)
  - Dart (Questions 13–25)
  - Flutter (Questions 26–38)
  - Android Development (Questions 39–50)
  - Git & GitHub (Questions 51–63)
  - Swift (Questions 64–75)
  - HTML & CSS (Questions 76–88)
  - Figma (Questions 89–100)
- **Anti-Cheat Randomization**:
  - Every time a user opens or starts the quiz, the **order of all 100 questions is shuffled**.
  - For every question, the **4 option choices (A, B, C, D) are also independently shuffled**.
  - No two students sitting together will see the same question or option letters at the same time.
- **Zero Friction**:
  - No login or student ID required.
  - No strict timer countdown.
  - Click **"Start Quiz"** and begin immediately.
- **Evaluation Loader**:
  - Smooth loading animation on submission calculating the final score.
- **Instant Answer Review**:
  - Instant score out of 100 and percentage.
  - Performance breakdown by subject (Dart, Flutter, Figma, etc.).
  - Side-by-side answer key review (Correct, Incorrect, Skipped).
- **Share Options**:
  - One-click quiz link sharing.
  - Formatted WhatsApp/Slack score summary generator.

## 📁 Tech Stack

- **HTML5**: Semantic structure.
- **CSS3**: Custom modern theme with responsive layout.
- **JavaScript (ES6)**: Lightweight client-side engine with Fisher-Yates shuffle algorithm.

## 🌐 How to Deploy for Live Students

### Option 1: GitHub Pages (Recommended - 1 Click)
1. In your GitHub repository (`https://github.com/mudasirunar/quiz`), go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Select branch: `main` and folder: `/ (root)`.
4. Click **Save**. In ~1 minute, GitHub provides your live URL:
   `https://mudasirunar.github.io/quiz/`
5. Share this link with all 30–40 students!

### Option 2: Vercel / Netlify
1. Import `https://github.com/mudasirunar/quiz.git` into Vercel or Netlify.
2. Deploy directly with default static settings.

## 💻 Local Testing

You can run a local server:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.
