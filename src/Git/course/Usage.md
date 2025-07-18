# **Git & GitHub Usage**

## Standard Workflow
> 'Workflow' in our definition is the chronological order we change code in before they are a part of the overall project. Reading the terminology below will help you understand what the workflow means, if it is not immediately clear.

- *Clone* or *fork* the *repository* (once) 
- Create a *[branch](https://montclairrobotics.github.io/FRC-Programming-Guide/Git/course/Usage.html#terminology)* (if necessary)
- **Edit files locally**
- *Merge* (if necessary)
- ***Stage* changes**
- ***Commit* changes** (with a description of what you changed)
- ***Push* to GitHub**
- Create a *Pull Request* (if necessary)
  - Have your code reviewed 
  - Have your code merged into the the main branch
- Repeat


## Terminology
Keep in mind the following when working with Git:

- **Repo/Codebase**: Short for *repository*; A repository is where the code of a project is stored, and can exist locally or remotely. 

- **Remote Repository**: A repository hosted on the web. Git can sync the repository across different devices and users. Our code is available on **GitHub** (https://github.com/MontclairRobotics), which is a *website that hosts Git repositories on the web*. Other websites include [GitLab](https://gitlab.com), [Bitbucket](https://bitbucket.org), and [Amazon's own Git offering](https://aws.amazon.com/codecommit/), but [GitHub](https://github.com/) is the de facto standard.

- **Commit**: A commit is a snapshot of your local repository that gets compared and evaluated to the remote repository in its current state (before your changes). The record of your modifications from the original is permanently saved to the project's history and stays accessible. The permanence of a commit is unimaginably helpful, but this means that each *character* of code must be written with meaning and significance. 

- **Stage**: Adding what file changes you want to include in your commit and what changes/files you want to leave out.

- **Push/Pull**: After a commit, you *push* your commits and other changes to the remote repository, and *pull* changes made to the remote onto your computer. Simply put, this syncs your local repository to the remote one. Pull gets changes from the remote repository and *merges* the changes in to your local repository. Pushing sends local changes to the remote repository. Make sure to pull before you commit and push so you can resolve any **[conflicts] (link)** before they occur.

- **Clone**: Cloning is the process of putting a remote repository on a local device, and allows the Git on your computer to have a copy of the repository and all its history. This can now be edited directly on your computer, and this instance of the repository is referred to as a "**local**" repository.

- **Fork**: Similar to cloning a repository, but the history of committed changes is no longer associated to the original repository. Most likely not using this feature. Your changes are not synced to *their* cloud repository, and their changes will not be shown to your repository. A fork is duplicating or backing up a repository at a given moment, and the two repositories can differ and are not associated after the split. 

- **Merge**: If code has been written and pushed since you have started editing it, then you'll have to merge. The files you have on your computer just don't line up with the ones in the remote repository. If the changes each version made do not interfere with each other, then Git will be able to merge automatically. However, if you need to merge two versions with changes that *do* interfere with each other, that is a **merge conflict**. You'll manually select which lines from each file to be combined to the final version. This can be done with two commits (often from different *branches*) or uncommitted changes. 

- **Branch**: A github branch is a way to work on the repository without modifying an existing version. Branches are released on the same level as each other, and existing "parallel-ly" to each other. Branches are useful for experimentation, when working on a bug fix or a new feature, testing the new solution in a new environment whilst keeping the existing version active in the chance that the new solution fails to be more effective, or multiple projects inside the same repository. Branches do not need to necessarily have the same files, and do not necessarily cross-reference each other, but they can have the same files, especially if they are different versions of the final project. In the GitHub GUI, it is easy to switch branches, just change the "current branch" dropdown, and then fetch (this may overwrite your device's local copy of the repository so handle modified code properly.).
<br> To switch in the CLI to a branch that already exists: <br>
   ```git switch branch-name.```<br>
If the branch doesn’t exist locally but exists on GitHub (remote), use:
<br>
    ```
    git fetch
    git switch branch-name
    ```
<br>


- **Pull Request**: A request to modify the main branch of the repository with your modifications. In the GitHub GUI, every modified file is marked, and a reviewer can see where you deleted, added, or modified files, and then decide accordingly if the modified code is effective or ineffective. Unlike a direct pull/push, a pull **request** allows for collaboration in independently-written code, in that someone else **must** read the code before it becomes part of the team's code. You are requesting a branch to pull from your branch by merging its changes.

- **Code Review**: The process of a single team member's code being read by another. Similar to peer review in tests, this ensures that the code is being seen by more eyes. Two heads are better than one. 

- **Stash**: ```git stash``` tells Git to save your work in its current state, but only locally. By saving using stash, the programmer can proceed to work on another project or another branch, without having to sync to the cloud if the code is not complete or ready. ```git stash pop``` reads the last locally saved stash back. Currently, ```stash``` and ```pop``` are not accessible through the GitHub GUI, so you will need the CLI (and will probably use through VSCode terminal.)

- **Origin**: Refers to the remote repository in its existing state. 

- **Git States**: In Git, any file can be in any of four states. 
    
    Untracked - 
    >Git does not care if this file is modified, or deleted. This state is sometimes assigned to new files that are not created in tracked directories. 

    Modified - 
    > The file differs from the last origin fetch, but the file is not staged. 

    >A modified file is marked in VSCode (and the GitHub GUI) with 
    <br>
    >><span style="color:goldenrod"><strong>Yellow</strong></span> for an existing file that was changed,  
    >><span style="color:green"><strong>Green</strong></span> for no existing file, was an added file,  
    >><span style="color:red"><strong>Red</strong></span> for an existing file that was deleted.

    Staged - 
    >Planned to be uploaded to Git
        >>In GitHub GUI, this is the checkbox to the left of the file. 
    
    Committed -
    >Saved to Git/GitHub history ```git status``` executed in the CLI will show files to the terminal in their state.  (No local changes beyond the last commit.)

- **HEAD**: Head is where the user is at the current moment. Head moves as you move between branches. Head by default points to the latest commit of that branch. However, Head notation allows us to specify where we are. Where HEAD points to your current commit or branch, HEAD~1 is one commit before HEAD.

- **Checkout**: Can allow the programmer to change the working directory to be compared to match the latest commit of a branch, by passing ```git checkout (branch-name)```, allowing for an attached head, or the same can be applied to an existing commit hash, ```git checkout (commit_hash)```, working in a detached head state. ```git restore (filename)``` discards all modifications to file, going back to the latest version where you are. 

- **Detached HEAD**: A HEAD that points to a commit and not a branch. Git History is checking your code to that commit in the past, and not a current live branch. Using checkout, the specific commit gets its own branch to the repository, with an attached head and can be pushed/pulled from origin.

- **GitHub Issues**: Allows us to plan our progress, by planning, prioritizing, and designating different incomplete tasks to different programmers. We can use this to communicate to collaborators where we are in the project's timeline, and link code to a discussion space easily. 

- **GitHub Actions**: This won't be nessasary for working on the robot. Custom scripts that run automatically after an event such as pushes, pull requests, issue creation, or even on a schedule. These can be used for testing, building, deploying, or any automated task. A sample action, located in the ```.github/workflows``` as a YAML file
    ```YAML
    name: Run Tests

    on: [push]

    jobs:
    test:
        runs-on: ubuntu-latest

        steps:
        - uses: actions/checkout@v3
        - name: Run tests
            run: |
            npm install
            npm test
    ```
    This sample action runs after every push to the repository. It occurs on an ubuntu cloud computer, allocated to us for limited usage. It takes the steps of running npm install, and then it runs a sample test. In this way, if the automated action fails, then this push would be rejected. While this is a simple sample, GitHub actions can be so much more powerful. 

