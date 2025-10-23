## Henry Ngan

Timebox: Referring to the Job Description, the length of the exercise should take roughly ~ 1 hour.
Finished Product deployed on Vercel -

- See Future Considerations for closing thoughts on polish and future improvements.

## Goal

Build a Casino Lobby page that lists games using React, TypeScript and MUI.

## Requirements

Technical
● Use React + TypeScript
● (preferably) Use Material UI for layout and components
● Organize components cleanly
● Include basic responsive design
● Handle mock API calls (you can use fetch('/games.json') or import JSON directly)
● Keep styles consistent and readable

Functional
● Display all games in a responsive grid
● Implement a search/filter input that filters games by title or category
● Handle error cases gracefully (e.g. failed fetch)
● Bonus (optional): Show a loading indicator for 1–2 seconds before displaying data
(simulate network delay)
● Bonus (optional): Add a “Favorite” toggle that updates the UI locally

Submission must have:

● Source code (React + TypeScript)
● Instructions to run locally (npm install && npm start)
● A short README.md explaining your approach, any challenges, and optional features

## Installation

1. Clone the repo
   - git clone https://github.com/henryngann/orbiz-app.git
2. Install NPM packages
   - npm install
3. Run the development server
   - npm run dev
4. Open [http://localhost:3000](http://localhost:3000) with your browser.

5. Profit!!!

## Project Structure

src/ - code root
src/app/ - app router

components/ - contains all shared UI
hooks/ - for reusable logic
providers/ - for top-level context (ThemeProvider)
types/ - for all shared models/interfaces/types etc
mocks/ - for anything mock-related
style/ - for anything style-related

## Approach

Alright! Initially, my top priorities were to review and understand the functional and technical requirements deeply. I started with jotting down the optional points as a low priority task and decided that if I had any extra time after my time box, that I would aim for those extra points. Once I had a deep understanding of the assignment, I began by organizing everything into a clean folder structure.

The Breakdown

Components/

SlotSection for the main layout - Contains the search that filters game by titles and category. (Alot of ppl care about provider so added that as well.)
GamesGrid/GamesCard for displaying all the games in a responsive grid. Uses Grid, Container and Stack Components for basic responsive design. Also handles error cases gracefully. On a failed fetch, users are prompted to retry with an alert. On an empty search, users are prompted to redo there query.
CategoryBar for the eventual implementation of toggling favourites. (Was able to knock down this bonus point. Simple onclick filter)
Image Carousel for funsies. (This wasn't required but the design of the website felt empty. I just ripped some images off of bet105.ag and slapped them here)

GameCardSkeleton - Uses MUI's skeleton component to accomplish a cool loading indicator. With the network delay, it is very apparent.

Hooks/

useMockGames - to simulate the API call with realistic delays. Added Math.random here to juggle 1-2 seconds.
useMediaQueries - I wanted a hook to handle mobile breakpoints cleanly. This helped me dynamically adjust for mobile slides in the image carousel.
useDebounce - A very very simple debounce hook that takes a generic and runs a setTimeOut before cleaning itself up. Used so that the TextField could feel more seamless.

Types/
games.ts - Just contains one type but defines the Game model.

Styling/ + Providers/
theme.ts - Went for a dark mode casino aesthetic. Visited Stake.com, pointsbet, powerpacks and csgoEmpire for design inspiration. Anything reusable style-wise for commonly used MUI components would go here otherwise, the sx prop would suffice.
font.ts - Used Roboto Condensed to make it look more "casino-ey"
ThemeProvider - Needed for the MUI theme.

## Future Considerations

useMockGames - useEffect for data fetching is actually outdated but is used here due to time constraints. In the future, we should switch to SWR for better caching and revalidation.

Images -

## Final Thoughts

## Contact

Henry Ngan - henrynganwork@gmail.com
