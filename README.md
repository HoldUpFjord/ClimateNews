# Climate Update
This project was an undertaking in understanding how the new next.js app router works in regards to receiving api data. I also used this opportunity to get a deeper understanding of a new component library: Shadcn, and how it leverages RadixUI under the hood for easy and accesible frontend components. 
**Link to project:** https://the-climate-update.vercel.app/
![alt tag]([https://the-climate-update.vercel.app/](https://the-climate-update.vercel.app/))

## How It's Made:

**Tech used:** Next13, ShadCn, RadixUI, TailwindCSS, ClimateNews API

The project is forked from a branch of Shadcn(https://ui.shadcn.com/). Using a pre-existing repo allowed me to comb-through and explore how an application in this stack should be structured. Particularly regarding frontend components.

## Optimizations

This project was halted before I could fully manifest what I had envisoned. My initial next steps would be to implement a way to filter article results by publication as well as the amount of artcicles. Implementing a page feature using pagaination would also be a nice to have. 

A current pain point in the app is that the current api returns image links that are not publically available. Building out a method of targetting, and then removing, these links would be a major improvement. 

## Lessons Learned:
### API
The App Router api is a completetly different paradigm compared to the Pages router which I've worked with before. Having to desiginate a route.ts for any api endpoints, as well as maintaining an organizational file system can clearly be a challenge when you're not working with a SPA ( single page application).

### Style System
Shadcn is unlike any other style system I've used before. While it leverages tailwind, it uses a set of primitive components under the hood in RadixUI. Getting a deeper understanding of how Radix works, as well as the benefits of a library like Shadcn in contrast to services like MUI or ChakraUI that offer access to components through their bundled packages. Shadcn UI instead allows you to download the source code for individual UI components into your codebase. Being able to define your own style system versus whole-sale implementing a pre-existing system allows for a lot more freedom and modularity in React based appliactions. Really cool stuff. 


