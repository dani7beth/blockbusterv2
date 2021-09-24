# READ ME

## Steps to setup and run

1. `git clone git@github.com:dani7beth/blockbusterv2.git`
2. `cd blockbusterv2`
3. `bundle install`
4. `rails db:create db:migrate db:seed`
5. `rails s -p 3001`
6. `cd client && yarn` <-- Do 6 & 7 after creating the react client
7. `yarn start`

### handle git
Only do these steps if you are creating your own repo based off this code
1.  - remove origin `git remote rm origin`
    - git add remote origin to new repo
