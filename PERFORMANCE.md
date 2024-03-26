# Ruffinweb Frontend

This file is for overviewing my PageSpeed Insights score. Now that I have a solid base for the project the first few changes I make when I have my CI/CD pipeline set up will be related to performance and best practices.
Using Vite to generate my build files helped alot as I used the default settings for minifying JavaScript and other static files.
If you end up testing the site yourself the score you see may be different due to varying network and web technologies as well as CPU speed.

## Table of Contents

- [Performance](#performance)
- [Accessibility](#accessibility)
- [Best Practices](#best-practices)
- [SEO](#seo)

## Performance

Initial Score: Mobile 30 to 50 Desktop 60 to 70 
Updated Score: 
First Contentful Paint - 0.4 ms (Passed)
Total Blocking Time - 410 ms (Failed)
Speed Index - 1.2 s (Passed)
Largest Contentful Paint - 0.6 s (Passed)
Cumulative Layout Shift - 1 (Failed)

- The most impactful audit was Cumulative Layout Shift, which is related to unexpected layout shifts that disrupt the user experience.
The disruptions in my project could be the GSAP animations that occur on the initial page load and when the user scrolls down to different sections.
They are simple reveal animations so the failure likely comes from the way I implemented them rather than the fact that I have animations.
- Total Blocking Time was another failed audit which relates to the amount of time the page is blocked from responding to user input. Input can include mouse clicks, screen taps or keyboard presses.


## Accessibility

Initial Score: 98
Updated Score: 


## Best Practices

Initial Score: 
Updated Score: 

- 
## SEO

Initial Score: Mobile 85 Desktop 82
Updated Score: 

- A
