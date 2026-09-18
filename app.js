/**
 * Final Assessment Quiz - Application Engine
 * 100 Questions Shuffled for Every User
 * Features: Student Name capture, anti-cheat shuffling, instant loader on submit,
 * red/green answer review, and static shareable results page with student name & answers.
 */

let activeQuestions = [];
let currentStudentName = '';
let evaluatedStats = null;

// ============================================================================
// 1. INITIALIZATION & SHARED RESULT ROUTING
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Check if URL has ?student=...&score=...
  if (checkUrlResultParams()) {
    return;
  }

  // Pre-fill previously entered student name if available
  const savedName = localStorage.getItem('atc_student_name');
  if (savedName) {
    const input = document.getElementById('student-name');
    if (input) input.value = savedName;
  }
});

function checkUrlResultParams() {
  const params = new URLSearchParams(window.location.search);
  const student = params.get('student');
  const scoreParam = params.get('score');

  if (student && scoreParam !== null) {
    const score = parseInt(scoreParam, 10) || 0;
    renderCleanScorecardView(decodeURIComponent(student), score);
    return true;
  }
  return false;
}

// ============================================================================
// 2. FISHER-YATES SHUFFLE ALGORITHM
// ============================================================================

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Prepares the 100 questions fresh for every student attempt:
 * - Shuffles the 100 questions
 * - Shuffles the 4 options (A, B, C, D) for each question
 */
function buildShuffledQuiz() {
  if (typeof QUIZ_QUESTIONS === 'undefined' || !Array.isArray(QUIZ_QUESTIONS)) {
    alert('Questions could not be loaded. Please refresh the page.');
    return [];
  }

  // 1. Shuffle questions order
  const shuffledList = shuffle(QUIZ_QUESTIONS);

  // 2. Shuffle options for each question
  return shuffledList.map((q, idx) => {
    return {
      index: idx,
      originalId: q.id,
      section: q.section,
      question: q.question,
      options: shuffle(q.options),
      answer: q.answer, // exact string of correct answer
      selectedIndex: null, // student selected option (0..3)
      resultStatus: null // 'CORRECT', 'INCORRECT', 'SKIPPED'
    };
  });
}

// ============================================================================
// 3. START ASSESSMENT
// ============================================================================

function startQuiz() {
  const input = document.getElementById('student-name');
  const name = input ? input.value.trim() : '';

  if (!name) {
    if (input) input.focus();
    showToast('Please enter your full name to begin.');
    return;
  }

  currentStudentName = name;
  localStorage.setItem('atc_student_name', name);

  // Initialize fresh shuffled questions
  activeQuestions = buildShuffledQuiz();

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');

  // Update header with student name
  const headerName = document.getElementById('header-student-name');
  if (headerName) headerName.textContent = currentStudentName;

  renderQuestionsList();
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestionsList() {
  const container = document.getElementById('questions-list');
  container.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];

  activeQuestions.forEach((q, qIdx) => {
    const card = document.createElement('article');
    card.className = 'card q-card';
    card.id = `q-card-${qIdx}`;

    let optionsHtml = '';
    q.options.forEach((optText, optIdx) => {
      const isSelected = q.selectedIndex === optIdx;
      optionsHtml += `
        <div class="opt-card ${isSelected ? 'selected' : ''}" onclick="pickOption(${qIdx}, ${optIdx})">
          <span class="opt-letter">${letters[optIdx]}</span>
          <span class="opt-text">${escapeHtml(optText)}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="q-card-head">
        <span class="q-index-pill">Question ${qIdx + 1} of ${activeQuestions.length}</span>
        <span class="q-section-badge">${escapeHtml(q.section)}</span>
      </div>
      <div class="q-title">${escapeHtml(q.question)}</div>
      <div class="q-options-grid" id="q-options-${qIdx}">
        ${optionsHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

function pickOption(qIdx, optIdx) {
  const q = activeQuestions[qIdx];
  if (!q) return;

  if (q.selectedIndex === optIdx) {
    q.selectedIndex = null; // deselect
  } else {
    q.selectedIndex = optIdx;
  }

  const optContainer = document.getElementById(`q-options-${qIdx}`);
  if (optContainer) {
    optContainer.querySelectorAll('.opt-card').forEach((el, i) => {
      if (q.selectedIndex === i) {
        el.classList.add('selected');
      } else {
        el.classList.remove('selected');
      }
    });
  }

  updateProgress();
}

function updateProgress() {
  const answered = activeQuestions.filter(q => q.selectedIndex !== null).length;
  const total = activeQuestions.length;
  const pct = Math.round((answered / total) * 100);

  const text = `${answered} / ${total} Answered`;
  document.getElementById('header-answered-text').textContent = text;
  document.getElementById('progress-bar-fill').style.width = `${pct}%`;
  document.getElementById('bottom-answered-title').textContent = `${answered} of ${total} Questions Answered (${pct}%)`;
}

// ============================================================================
// 4. SUBMISSION & LOADER
// ============================================================================

function promptSubmit() {
  const answered = activeQuestions.filter(q => q.selectedIndex !== null).length;
  const unans = activeQuestions.length - answered;

  if (unans > 0) {
    const proceed = confirm(`You have answered ${answered} of 100 questions (${unans} unanswered).\n\nDo you want to submit and view your results?`);
    if (!proceed) return;
  }

  // Show evaluation loader
  const loader = document.getElementById('loader-overlay');
  loader.classList.remove('hidden');

  setTimeout(() => {
    evaluateResults();
    loader.classList.add('hidden');
  }, 1200);
}

// ============================================================================
// 5. SCORING & FINAL ANSWERS EVALUATION
// ============================================================================

function evaluateResults() {
  let correct = 0;
  let incorrect = 0;
  let skipped = 0;

  const sectionStats = {};

  activeQuestions.forEach(q => {
    if (!sectionStats[q.section]) {
      sectionStats[q.section] = { total: 0, correct: 0 };
    }
    sectionStats[q.section].total++;

    if (q.selectedIndex === null) {
      skipped++;
      q.resultStatus = 'SKIPPED';
    } else {
      const chosen = q.options[q.selectedIndex];
      if (chosen === q.answer) {
        correct++;
        sectionStats[q.section].correct++;
        q.resultStatus = 'CORRECT';
      } else {
        incorrect++;
        q.resultStatus = 'INCORRECT';
      }
    }
  });

  const total = activeQuestions.length;
  const score = correct;
  const pct = Math.round((score / total) * 100);

  let grade = 'F';
  if (pct >= 90) grade = 'A+';
  else if (pct >= 80) grade = 'A';
  else if (pct >= 70) grade = 'B';
  else if (pct >= 60) grade = 'C';
  else if (pct >= 50) grade = 'D';

  const todayStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  evaluatedStats = {
    studentName: currentStudentName,
    score,
    total,
    pct,
    grade,
    correct,
    incorrect,
    skipped,
    date: todayStr,
    sectionStats
  };

  displayResultsScreen(evaluatedStats, false);
}

function displayResultsScreen(stats, isSharedView) {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');

  // Student info on scorecard
  document.getElementById('res-student-title').textContent = `${stats.studentName}'s Scorecard`;
  document.getElementById('res-date').textContent = stats.date;

  // Score Hero
  document.getElementById('res-score-number').textContent = stats.score;
  document.getElementById('res-pct-tag').textContent = `${stats.pct}%`;
  document.getElementById('res-grade-tag').textContent = `Grade: ${stats.grade} (${stats.pct >= 50 ? 'PASSED' : 'NEEDS RETAKE'})`;

  // Metric counts
  document.getElementById('res-correct-num').textContent = stats.correct;
  document.getElementById('res-incorrect-num').textContent = stats.incorrect;
  document.getElementById('res-skipped-num').textContent = stats.skipped;

  // Filter tab counts
  document.getElementById('rf-inc').textContent = stats.incorrect;
  document.getElementById('rf-cor').textContent = stats.correct;
  document.getElementById('rf-skp').textContent = stats.skipped;

  // Render Subject Breakdown
  const secContainer = document.getElementById('subject-breakdown-grid');
  secContainer.innerHTML = '';
  for (const [secName, stat] of Object.entries(stats.sectionStats)) {
    const secPct = Math.round((stat.correct / stat.total) * 100);
    const row = document.createElement('div');
    row.className = 'breakdown-row';
    row.innerHTML = `
      <div class="breakdown-row-head">
        <span class="sec-name">${escapeHtml(secName)}</span>
        <span class="sec-score">${stat.correct} / ${stat.total} (${secPct}%)</span>
      </div>
      <div class="breakdown-track">
        <div class="breakdown-fill" style="width: ${secPct}%"></div>
      </div>
    `;
    secContainer.appendChild(row);
  }

  // Render Detailed Answers Review
  renderReviewList('ALL');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// 6. DETAILED ANSWERS REVIEW RENDERER
// ============================================================================

function renderReviewList(filterMode) {
  const container = document.getElementById('review-questions-container');
  container.innerHTML = '';

  const list = activeQuestions.filter(q => {
    if (filterMode === 'ALL') return true;
    return q.resultStatus === filterMode;
  });

  if (list.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 32px; color: var(--text-secondary);">No questions match this filter.</div>`;
    return;
  }

  const letters = ['A', 'B', 'C', 'D'];

  list.forEach(q => {
    const item = document.createElement('div');
    item.className = `review-item ${q.resultStatus.toLowerCase()}`;

    let statusPillText = '✗ Incorrect';
    let statusPillClass = 'incorrect';

    if (q.resultStatus === 'CORRECT') {
      statusPillText = '✓ Correct (+1)';
      statusPillClass = 'correct';
    } else if (q.resultStatus === 'SKIPPED') {
      statusPillText = '○ Skipped (0)';
      statusPillClass = 'skipped';
    } else {
      statusPillText = '✗ Incorrect (0)';
      statusPillClass = 'incorrect';
    }

    // Build 4 options view with red/green highlights
    let optionsHtml = '';
    q.options.forEach((optText, optIdx) => {
      const isSelected = q.selectedIndex === optIdx;
      const isCorrect = optText === q.answer;

      let cardClass = 'review-opt';
      let badgeHtml = '';

      if (isSelected && isCorrect) {
        cardClass += ' opt-correct-user';
        badgeHtml = '<span class="opt-badge correct-badge">✓ Your Answer (Correct)</span>';
      } else if (isSelected && !isCorrect) {
        cardClass += ' opt-wrong-user';
        badgeHtml = '<span class="opt-badge wrong-badge">✗ Your Answer (Wrong)</span>';
      } else if (isCorrect) {
        cardClass += ' opt-is-correct';
        badgeHtml = '<span class="opt-badge correct-badge">✓ Correct Answer</span>';
      } else {
        cardClass += ' opt-dimmed';
      }

      optionsHtml += `
        <div class="${cardClass}">
          <div class="review-opt-left">
            <span class="review-opt-letter">${letters[optIdx]}</span>
            <span class="review-opt-text">${escapeHtml(optText)}</span>
          </div>
          ${badgeHtml}
        </div>
      `;
    });

    item.innerHTML = `
      <div class="review-item-head">
        <div class="review-q-text">
          <span class="review-q-num">Q${q.index + 1}.</span>
          <span class="review-q-section">[${escapeHtml(q.section)}]</span>
          ${escapeHtml(q.question)}
        </div>
        <span class="review-status-pill ${statusPillClass}">${statusPillText}</span>
      </div>
      <div class="review-options-list">
        ${optionsHtml}
      </div>
    `;

    container.appendChild(item);
  });
}

function filterReview(mode, btn) {
  document.querySelectorAll('.filter-btn').forEach(el => el.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderReviewList(mode);
}

// ============================================================================
// 7. STATIC SHARE LINK & PAYLOAD DECODER
// ============================================================================

function getStudentResultUrl() {
  const base = window.location.origin + window.location.pathname;
  const name = evaluatedStats ? evaluatedStats.studentName : currentStudentName;
  const score = evaluatedStats ? evaluatedStats.score : 0;
  return `${base}?student=${encodeURIComponent(name)}&score=${score}`;
}

/**
 * Copies a clean, readable result link (e.g. https://.../?student=unar&score=85)
 */
function copyResultLink() {
  const url = getStudentResultUrl();
  navigator.clipboard.writeText(url).then(() => {
    showToast('🔗 Result link copied to clipboard!');
  }).catch(() => {
    prompt('Result Link:', url);
  });
}

function copyScoreSummary() {
  if (!evaluatedStats) return;
  const resultUrl = getStudentResultUrl();

  const text = `🎓 *Ashri Tech Course - Final Assessment Quiz*
━━━━━━━━━━━━━━━━━━━━━━━
👤 *Student:* ${evaluatedStats.studentName}
📊 *Score:* ${evaluatedStats.score} / ${evaluatedStats.total} (${evaluatedStats.pct}%)
🔗 *View Result:* ${resultUrl}
━━━━━━━━━━━━━━━━━━━━━━━`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 WhatsApp summary copied to clipboard!');
  }).catch(() => {
    prompt('Copy summary:', text);
  });
}

/**
 * Renders the clean verified scorecard when opening ?student=Name&score=X
 */
function renderCleanScorecardView(studentName, score) {
  currentStudentName = studentName;
  const total = 100;
  const pct = Math.round((score / total) * 100);

  let grade = 'F';
  if (pct >= 90) grade = 'A+';
  else if (pct >= 80) grade = 'A';
  else if (pct >= 70) grade = 'B';
  else if (pct >= 60) grade = 'C';
  else if (pct >= 50) grade = 'D';

  const todayStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  evaluatedStats = {
    studentName,
    score,
    total,
    pct,
    grade,
    correct: score,
    incorrect: total - score,
    skipped: 0,
    date: todayStr,
    sectionStats: {}
  };

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');

  // Show top verified banner
  const banner = document.getElementById('shared-result-banner');
  if (banner) {
    banner.classList.remove('hidden');
    document.getElementById('shared-student-name').textContent = studentName;
  }

  // Populate Scorecard
  document.getElementById('res-student-title').textContent = `${studentName}'s Scorecard`;
  document.getElementById('res-date').textContent = todayStr;

  document.getElementById('res-score-number').textContent = score;
  document.getElementById('res-pct-tag').textContent = `${pct}%`;
  document.getElementById('res-grade-tag').textContent = `Grade: ${grade} (${pct >= 50 ? 'PASSED' : 'NEEDS RETAKE'})`;

  document.getElementById('res-correct-num').textContent = score;
  document.getElementById('res-incorrect-num').textContent = total - score;
  document.getElementById('res-skipped-num').textContent = 0;

  // Review card note
  const reviewContainer = document.getElementById('review-questions-container');
  if (reviewContainer) {
    reviewContainer.innerHTML = `
      <div style="text-align:center; padding: 36px 20px; color: var(--text-secondary);">
        <p style="font-size: 1.05rem; color: #fff; margin-bottom: 8px;">Official Scorecard Verified</p>
        <p>This is the verified assessment scorecard for <strong>${escapeHtml(studentName)}</strong>.</p>
        <button type="button" class="btn btn-primary btn-sm" style="margin-top: 16px;" onclick="startBlankQuiz()">Take This Quiz Yourself</button>
      </div>
    `;
  }
}

function startBlankQuiz() {
  window.location.href = window.location.pathname;
}

function restartQuiz() {
  window.location.href = window.location.pathname;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
