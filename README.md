# valentines-card 💌  
### An Interactive Micro-Experience in Emotional Web Design

---

## Summary

**valentines-card** is a small interactive web experience that reimagines a traditional Valentine’s letter as a digital object.

The project explores how motion, pacing, and minimal interaction can create emotional resonance using only core web technologies.

Built entirely with HTML, CSS, and vanilla JavaScript, it demonstrates how expressive design does not require heavy frameworks — only intention.

---

## The Idea

A physical Valentine’s letter has ritual:

- You receive it.
- You notice the seal.
- You open it slowly.
- You read.
- You react.

I wanted to translate that ritual into the browser.

The envelope becomes an interface.  
The seal becomes a trigger.  
The question becomes the emotional pivot.

The experience unfolds gradually rather than instantly.

---

## Design Goals

**1. Emotional pacing over speed**  
Animations are slowed intentionally to feel ceremonial.

**2. Minimal visual noise**  
Muted parchment tones and a single deep red accent create focus.

**3. Playfulness without chaos**  
The “No” button avoids the cursor — light humor without breaking tone.

**4. Lightweight execution**  
No frameworks. No build tools. Just the web platform.

---

## Interaction Flow

1. A soft overlay invites the user in.
2. The envelope appears.
3. The wax seal breaks.
4. The flap rotates open in 3D space.
5. The letter rises upward.
6. A question is revealed.
7. Acceptance triggers a subtle celebration (confetti + tone shift).
8. The background softens as the moment settles.

Each stage reinforces anticipation and release.

---

## Visual System

- **Typography:** Serif for warmth, sans-serif for clarity  
- **Color Palette:** Soft parchment neutrals + wax red accent  
- **Depth:** CSS 3D transforms for envelope realism  
- **Atmosphere:** Subtle radial vignette + glow animation  
- **Motion:** Custom easing curves for softness  

The aesthetic leans romantic but restrained — never overly decorative.

---

## Technical Implementation

**Stack**
- HTML5  
- CSS3 (3D transforms, transitions, keyframes)  
- Vanilla JavaScript  
- Canvas API (confetti system)  

**Key Techniques**
- `requestAnimationFrame` for smooth animation
- DOM state transitions via class toggling
- Single canvas render loop for performance
- Deferred script loading
- Lazy-loaded Spotify embed
- Timezone-aware countdown (Asia/Manila)

The entire experience is static and deployable anywhere.

---

## Constraints

- No frameworks  
- No external animation libraries  
- No bundlers  
- Minimal file structure  

This constraint was intentional — to explore how far the core platform alone can go.

---

## What This Project Demonstrates

- Emotional interaction design through timing
- Expressive motion using pure CSS
- Lightweight animation systems
- Clean separation of structure, style, and behavior
- Designing for feeling, not just function

---

## Reflection

Small digital gestures can feel personal when they are paced thoughtfully.

This project is less about technical complexity and more about translating human ritual into interaction design.

It serves as an exploration of how intimacy can exist in minimal interfaces.

---

## Live Experience

Open `index.html` locally or deploy to any static hosting provider.

---

Made with love.
