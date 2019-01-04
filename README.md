# FamilyLifeBackend

# Endpoints
--GET--
Display Family (will show each user in family)
Display All Family Chores (based off of family id )
Display individual chores (based off of user id)
Display Homework/Assignments (based off of user id)

--POST--
-done-Add new family member
Add new chore for user (based off of user id)
Add new homework/assignment for user (based off of id)


--PUT--
Update family member
Update chore for user (based off of user id)
Update homework/assignment for user (based off of id)
????using google calendar???? Update activity in calendar ()

--DELETE--
Delete family member
Delete chore for user (based off of user id)
Delete homework/assignment for user (based off of id)
????using google calendar???? Delete activity in calendar ()



##Heroku link 
https://vast-hollows-12854.herokuapp.com/

#Table structure
-Usernames & Passwords
-Users

##Documentation on User Authorization Endpoints

_POST REQUEST_  https://vast-hollows-12854.herokuapp.com/api/register
-Adds new user into database (either child or parent)
-required data is...
    "first name": "Joe",
	"last name": "Smith",
	"email":"smith@gmith.com",
	"username": "user",
	"password": "name",
	"parent": true,
	"child": false,
	"family id": 2
-the parent and child fields are booleans. They must be true or false.
-the username & email must be unique
-the family id will indicate which family you belong to, so mom, dad and all the children must have the same family id

_POST REQUEST_  https://vast-hollows-12854.herokuapp.com/api/login
-logs user into system
-must give correct username and password 
-will create a new JWT for every login