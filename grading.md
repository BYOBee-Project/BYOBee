# Grading Notes

- There's a bug when you click on "view" from the profile page -- you just have an extra quotation which is breaking things
- Your routes could be a little more RESTful particularly on the form page -- I would use query parameters to pass the id of the bee you want to add. This requires a hook we didn't learn (but you'll learn in advanced) called `useLocation`
- Another option for your routes would be nested routes (something you'll also cover in advanced) - you can nest bees inside of users for the bees that the user has encountered -- not necessarily better, just another approach to think about

```js
/users/:id/bees/new
/users/:id/bees/:id
/users/:id/bees/:id/edit
```

- I'd think a little about your naming conventions on your views -- it took me a minute to figure out BeeDetail vs. UserDetail vs. Profile -- I would either go with the name of your table `SubmissionDetail` or `UserBeeDetail`
- Your tests weren't passing because you weren't waiting for asynchronous calls to complete before taking the snapshots. They pass locally but throw some errors / warnings. On Github, any output on the tests will make them fail.
- Overall, great job -- such a lovely app and it seems like you all worked really well together.

## Grade

| Rubric                               | Deduction |
| ------------------------------------ | --------- |
| Routes utilize RESTful conventions   | -1        |
| Works as intended with no bugs       | -1        |
| Variables / functions are well named | -1        |
| Snapshot tests for all components    | -2        |

**Total Points: 145 / 150**
