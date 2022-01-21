# BYOBee:

An app connecting the bee community! Bee populations are in decline due climate change, habitat loss, rampant pesticide usage, human management practices, and the spread of pests and disease. Entomologists and conservationists are working really hard to collect population data that informs pollinator conservation policies, and citizen science efforts can be super helpful to that cause. We wanted to create an app that would help non-bee experts identify the bees they see and report those encounters that could be passed along to scientists - and also because it’s fun. Our app has a public-facing education component that displays bee photos and information, and user-based profiles that allow you to build a virtual bee collection by uploading photos and details about bees you see.

## Team Members:

[Adria Ivanitsky](https://www.linkedin.com/in/adriaivanitsky/)
[Emma Egstad](https://www.linkedin.com/in/emmaegstad/)
[Michelle Nygren](https://www.linkedin.com/in/michellenygren/)
[Zach Caldwell](https://www.linkedin.com/in/zachary-caldwell/)

## Team Planning:

[Link to Miro Board](https://miro.com/app/board/uXjVOV_IqVg=/)

## Database

### BEES (table and columns)

- BEE_ID
- Common Name
- Species
- Family
- Region
- Description
- Preferred Forage
- Habitat
- Active Season
- Fun Fact
- Photo

### SUBMISSIONS (table & columns)

- Ref to USER_ID
- Ref to BEE_ID
- ID
- Photo
- Location
- Date encountered
- Observations

### USERS (table & columns)

- USER_ID
- User name
- User email

### Table Relations:

- Submissions stores the user_id and the bee_id.
- Foreign key relationship between between USERS & SUBMISSIONS.
- Foreign key relationship between BEES & SUBMISSIONS.
