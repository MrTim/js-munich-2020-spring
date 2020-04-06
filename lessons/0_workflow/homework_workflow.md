# Homework Workflow

## Steps to submit your homework
1. Check if you are in your master branch.
```
git branch
```

2. Keep your local repository updated.
```
git pull origin master && git fetch
```

3. Create a NEW branch for your homework from master.
```
git checkout -b homework_1
```

4. Commit your changes in your new branch.
```
git commit -m "Add your own message here"
```
5. Once you done with your assigment push your changes on your new branch.
```
git push --set-upstream origin homework_1
```
6. Create a pull request to merge your new branch into master.

![Create pull request](./pull_request.png)

7. Select ALL teachers as reviewers.

![Create pull request](./reviewers.png)


8. Reviewers going to add comments (if they find things to improve).


## Steps to update reviewers' comments
1. Check if you are in your homework branch.
```
git branch
```
2. Commit your new changes in your homework branch.
```
git commit -m "Add your own message here"
```
3. Once you done with your updates push your changes on your homework branch.
```
git push --set-upstream origin homework_1
```
4. Let reviewers know that you updated the code adding a comment.
5. They are going through and resolve their comments.
6. When you get an approval comment (at least one of the teachers), you can merge your pull request in master.

## **🎉GREAT!! You complete your homework.🎉**

