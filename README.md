# README

 ### Requirement

  - Ruby version 3.0.0
  - Postgres

 ### Setup
  - Create database for tour_guide application.
  - Create a user in postgres
  - Give permission and password for the user


    ### Steps

      ##### Create Database for the tour gide application
      - `createdb -U tour_guide tour_guide_development`


      ##### Open the postgres console and follow below comand
      - `CREATE role tour_guide with createdb login password 'password_here';`
      - `GRANT ALL PRIVILEGES ON DATABASE "tour_guide_development" to tour_guide;`