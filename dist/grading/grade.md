# Lab Grade Summary
**Total:** 100/100
- Lab: **80/80**
- Submission: **20/20** — On time (20/20)
- Due (Riyadh): 2025-11-10 23:59:59 +03:00
- Last commit: 2025-11-09T10:03:32Z

## Per-TODO Feedback (what you implemented vs. what’s missing)
### TODO 1: Initialize Express App (server.js) — **16/16**
*Completeness:* 8/8, *Correctness:* 4/4, *Quality:* 4/4

- ✅ Imported express.
- ✅ Created app with express().
- ✅ Defined PORT (3000 or env).
- ✅ Started server with app.listen.

### TODO 2: Random Integer Helper (backend/utils/random.js) — **16/16**
*Completeness:* 8/8, *Correctness:* 4/4, *Quality:* 4/4

- ✅ Found random.js.
- ✅ Exported getRandomInt.
- ✅ Uses Math.random().
- ✅ Uses Math.floor().

### TODO 3: getRandomQuote (quotes.js) — **16/16**
*Completeness:* 8/8, *Correctness:* 4/4, *Quality:* 4/4

- ✅ Found quotes.js.
- ✅ Exported getRandomQuote.
- ✅ Uses a quotes array.
- ✅ Selects random index via Math.floor(Math.random()*quotes.length).

### TODO 4: Enable CORS (server.js) — **16/16**
*Completeness:* 8/8, *Correctness:* 4/4, *Quality:* 4/4

- ✅ Imported cors.
- ✅ Enabled CORS with app.use(cors()).

### TODO 5: Define Routes (server.js) — **16/16**
*Completeness:* 8/8, *Correctness:* 4/4, *Quality:* 4/4

- ✅ Route GET / is defined.
- ✅ GET / sends text via res.send().
- ✅ Route GET /api/quote is defined.
- ✅ GET /api/quote responds with res.json({ ... }).
- ✅ Server references getRandomQuote helper.
