# Tic Tac Toe

* This app is built on rails 6.0.0 and ruby 2.6.3 and reactJs-17.0.1
* PosgresSql is used for database


* This has docker added so you can run this in your docker container

- docker-compose build
- docker-compose up
- docker-compose run web bundle exec rake db:create
- docker-compose run web bundle exec rake db:migrate
- docker-compose run web bundle exec rake db:seed

* you can quickly test this app using test users created through seed

email: 'player1@example.com', password: 'password'

* To test this you need to login to app then in home page you will see a dropdown to select opponent player to play. selct one player and click "Play"

* you will see the tic toc toe squares and you will be able to play.
* Every time you make move its get saved into DB.
* On completing game it will mark the winner to Game record.
* In dashboard page you can see won games, lost games and drwn games count of the loged in user.
