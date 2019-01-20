This was a lot of fun, I kinda wish I could have worked on it more. The biggest challenges I faced were determining what to use as a back end (I strongly considered socket.io and mongoDB for persistance), getting back into the swing of things with React (I have been using Vue for the past 9 months or so), and just keeping myself from going totally Ape adding features.

Ultimately I went with Firebase for a back end since their realtime database could handle not only persistance but also syncing across instances. This allowed me to set up some basic config and then be off to the races on the front end.

I decided to build the front end portion of this in React since the Guild front end stack is React. Since I have been using Vue for the past few months there was a bit of adjustment with getting back into the syntax of React. Once I started though it came back pretty quickly.  I set up some basic tests that are really more stubs and would need to be fleshed out in a production app.

Obviously this would need some refactoring if it was going to be a production app. If I was coming up with a plan to refactor it I would start by refactoring some parts of the existing components into generic components, such as the form used to send a chat or buttons used in the app. Happy to talk further about this and other possible paths for refactors.

You can view and use the working app at http://cohnjesse.com/guild