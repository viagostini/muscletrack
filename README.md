# Muscle Track

## Add Execution
- [ ] Audio Button
- [ ] Capture audio
- [ ] Understand audio (what is what, i.e.: "peck deck 50kg" -> {"exercise": "peck deck", "weight": "50"})
- [ ] Show result
- [ ] Decide validity
- [ ] Connect to database
- [ ] Save audio information

## Track Exercises
- [ ] Exercises dropdown
- [ ] Select exercise
- [ ] Show evolution graph

## List Executions
- [ ] List executions sorted by most recent
  - [ ] Delete button
  - [ ] Edit button

## Add exercise (2.0)
- [ ] Textbox
- [ ] Add button

## Extra

### Database model:

#### Execution
  - **id**: Integer, PK
  - **timestamp**: Datetime, default=now()
  - **exercise**: Integer, FK (Exercise.id)
  - **weight**: Integer

#### Exercise:
  - **id**: Integer, PK
  - **name**: String, unique
