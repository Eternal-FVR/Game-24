# Game-24
Its the online and more accesible way to play the Game 24!

I Came up with this idea as help from my dad and from the Mathcon Finals 2026 Hame 24, and by looking at the MC, who had a tedious job of clicking next on slides

As part of my journey in creating this website and game, I have 6 stages, Requirements, Plan, Design, Develop, Iterate and Finally, 
Publish, each of which serving a crucial purpose in making the game the best. I wanted to push and work harder, and as I have made 
websites before, I decided that I would have a deadline, I would start this project today, Monday 6/1/2026 and end it on Wednesday 6/3/2026.

Game Link: https://amazing-game24.netlify.app/

# Requirements

When I first thought of this game I had a few requirments, to make it both functionally and asthetically pleasing;

1. It had to match the original colors, Navy Blue, Yellow and a blood red color
2. It had to have a timer, I set it to be changeable from 30 seconds to 1 minute to 2 minutes 
3. It has 3 levels: Easy, Medium, and Hard Each consisting of different mathematical operations
4. It has a how to play, for people who have never played and want to play now!

   
# Plan

Before any great achievment can be reached, we all need a plan, something to guide us through doing things. I made the project plan to have a set goal and to reach that goal and not add functions and add asthetics like a maniac. I dedicated the first day of this project to planning, that can be viewed here: 

https://docs.google.com/document/d/1uoGgbFKiqRSBlEtMt_49wGaTPx_U7UA0npt1Ow1kwmA/edit?tab=t.gftay9e7m15s#heading=h.3tqzal78si5l

# Design

* Designed the website around the original MathCON Game 24 color scheme, using a dark navy blue background, gold buttons, and red accent lighting to create a modern and visually appealing interface.
* Created a simple and user-friendly layout consisting of a home screen, game screen, settings panel, timer display, and a dedicated How To Play page to make navigation easy for all users.
* Developed the circular countdown timer design to provide players with a visual representation of the time remaining during each round.
* Focused on creating a professional appearance by carefully selecting fonts, spacing, colors, and visual effects that would enhance the overall user experience.

# Develop

* Built the website using HTML, CSS, and JavaScript, with HTML providing the structure, CSS handling the design and styling, and JavaScript controlling the game logic and interactions.
* Implemented the core gameplay features including puzzle generation, answer validation, score tracking, streak tracking, timers, difficulty levels, Speed Mode, and Competitive Mode.
* Developed a settings system that allows players to customize their username and personalize their experience while using the application.
* Created a solvable puzzle generator to ensure that every puzzle presented to the player has at least one valid solution, preventing impossible rounds.

# Iterate

* Conducted extensive testing throughout development to identify bugs, improve performance, and ensure that all game modes functioned correctly.
* Refined the user interface by adjusting button placement, improving readability, enhancing screen transitions, and fixing layout issues discovered during testing.
* Improved gameplay by correcting timer behavior, validating answers more accurately, and ensuring that generated puzzles met the intended difficulty requirements.
* Continuously gathered feedback from my own testing and made adjustments to create a smoother, more enjoyable experience for players.

# Publish

* Deployed the completed website using Netlify, allowing the game to be accessed online through a public URL from any device with internet access.
* Performed final testing after deployment to ensure that all pages, game modes, timers, settings, and interactive features functioned correctly in the live environment.
* Successfully transformed the original concept inspired by the MathCON Finals Game 24 into a fully functional web application that can be used by students and puzzle enthusiasts.
* Completed the project within the planned development timeline while gaining valuable experience in project planning, web development, debugging, deployment, and iterative improvement.
* Though you can host websites through a variety of the different platforms, I used the simplest and easiest one, Netlify, All I had to do was drop the files into the field and it published it,
you can also use Vercel, Github Pages, or google sites to help host your website, it all depends on preferance.

# -- Daily Log --

6/1/2026 - Plan & Design

Today I started by creating a project plan for my game, what it would do, how it would work, and all the add-ons and functions that I wanted in it. I thought through this since I didn't want this project to be abandoned like many of my others, such as a Happy Fathers day, and a simple pong game. Here is the link to the project plan

6/2/2026 - Development

After the boring stages of the planning I moved forward into creating the ACTUAL WEBSITE. Though it was cool, It had a lot of setbacks. I started and the first problem was that one my three files, styles.css , Index.html, and script.js, was actually a text file. And after going through countless terminal runs and youtube videos, I found out that The Index.hmtl was the impostor, I did this by using a simple right-click and clicking get more info, yea im so smart right! After debugging for nearly two hours, I created the first prototype, the screen with the Game 24 with modes easy medium and hard. But one problem, NONE OF THE BUTTONS WORKED, after looking into the Java, I realized that I had not defined the functionality of the button, I had merely just created them in the style.css . Now I had yet another problem the Styles.css was actually supposed to be style.css. Yeah a simple "s" can make a difference. After getting through a bunch of setbacks, I finally made the Base version of the code, tomorrow's goal is to Finish the game, add polishing touches to the UX and UI to make it look good, and to publish it.

6/3/2026

Now that all the boring things were out of the way it was time to actually make the game look good. Now for this I mostly needed style.css and maybe a bit of html, but thats it. I played with the fonts and text colors to make it look right. But the Main highlights of today was adding the "How to Play" button, Just like yesterday, there was a big problem with the index.html not connecting properly with the .js and the .css. And the UI looked terrible because I had to strip most of the work to pinpoint exactly what the problem was. And Finally, I found it, There was a problem when running the files on the local browser, something that VS Code didn't catch, I inspected the page and found that there was 2 problems that Console highlighted, one that it was an "unsafe attempt" to run the files, because chrome couldn't scan the files, but I got through that by just clicking "bypass", but the major problem here is reading.classlist was returning as null. More simply,  one of 2 functions were getting overriden by .css code, or so I thought. So i decided to put in tests, temporarily changing the document.getElementById() ,  to, Alert(document.getElementById()). By doing this, i got a popup in chrome saying [object HTMLDivElement] ,  and this appeared both times, indicating that it was, in fact NOT A CSS problem, but a communication problem between js and html. After figuring out how to get out of that pinch. I moved on to the Funnest 
(Yep I'm crazy good at english) part of the entire website making process, deployment. I tried Vercel, but I couldn't get it to work since i had to get a code from my number but my phone was dead, so I used netlify. Netlify had an accessible UI/UX (It was better than mine, Somehow 😒) so i could easily drag and drop my files. Except I had a folder inside a folder, so I had to create a new folder called game-24-final, and move all the files from the original folder to this one, and finally import it into Netlify. It took around 5 seconds to get it deployed, which was about the same time my dopamine hit, and I went absolutely wild. Here is the link to the actual website. It was fun to make this website, and Im gonna keep coming back 

-Siddarthsatvik palvai

--Im the Best--
