# Effective Contributing

 **To contribute in the most efficient and helpful way for the team, you must use Git in an organized manner that makes it easy for other members of the team.**

> **Please do not be afraid to contribute!** It's okay to make mistakes. Were here to help and part reason we use Git is because we can always undo mistakes. It's really important to us that you feel brave enough to contribute so that you can learn how to do things even better. This is a guide on how to contribute so read this over but it is okay if you do it wrong. It is our job to help you though every step of the way and I promise we will never be mad at you for trying!

## Commits

Commits should be code you want to share. It is okay to commit something that isn't done yet. However it is a good idea to clean up messy code before committing. This is because when you commit the code can be viewed by other people and it should be easy to understand so that other programers can work with it. If you have other very unfinished changes that are not relevant to your commit then make sure to not stage such files or code chunks(if your Git application allows that). This will help to keep your commit relevant, on task, and working for others to view.

Especially on main (although it is good practice elsewhere too) you should never commit something that does not compile/simulate. This is because others might be doing something that requires a 3d simulation of the robot. While you are on a branch specific to the development of the broken feature it is likely ok, especially if you want others to be able to view, reference, or contribute to said code. Please always be mindful of what others are working on.

<div class="warning">

Commit Descriptions

Remember to always write a descriptive title and description of each commit for organizational purposes. It is much easier for others and yourself to work with git when all the changes are listed as a part of the commit.

</div>

Before you Commit make sure you pull any new changes from Github and merge your changes (in case of a merge conflict). This is because if you push first and then pull it will practically create two different branches and they will have to be merged together. This can create a confusing mess so it is always better to make sure you are pulling first.

## Branches & Pull Requests

When ever you are working on a feature, it is always good practice to **open a new branch just for this feature**. This way work on this part of the robots code does not interfere with work others are doing. Since you are new to coding, it might be less scary to be able to know your code will not affect anything until someone looks over it and merges it in. That being said nobody will be mad at you for making mistakes and in previous years we hardly used branches at all and things were a mess but it worked. I hope branches will encourage more people to contribute instead of scare them away.

> Even though you opened a specific branch for a specific feature, others are welcome to contribute to it as long as they are in communication with each other.

You can add as many commits to this branch as you might want. You will also want to open a *pull request* as mentioned in the previous article about Git usage. You can do this through your local git and push it e.g. using GitHub Desktop, or through the GitHub website. If you are not ready for your code to be reviewed you can mark it as a draft until you have finished writing.

> You may even wish to make changes that relates to code that has not been merged yet. It may help you to make a branch off of the other branch and maybe even open a pull request from branch 2 to branch 1 and once that is merged, from branch 1 to main. It is important to note that that might help for organizational purposes but don't get carried away or confused and overcomplicate things for yourself. 

Branches and to some extent pull requests can even be helpful even when working by your self, but are especially helpful in a team. Not everything needs it though. Sometimes things are just quick fixes that can be singular commits to the main branch.

### Code Reviews

Once you are ready you can mark the pull request as such and add a reviewer. This might be someone who knows what they are doing and is experienced but I want even new members to review each other's code. You might still want to make sure a code lead sees it as well (or not!) but it is always good for more members to be familiar with the code before it goes into use and it is good practice for understanding and critiquing robot code.

> **Thank you** so much for trying to write code. Getting the experience of how to do it even if you make a mistake is the most important part! As said before we won't get angry at you for doing something wrong and will always appreciate your commits. (Yes, even if they are terrible and we tell you to rewrite the whole thing, because you are getting hands-on experience.)