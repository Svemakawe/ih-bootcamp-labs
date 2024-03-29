![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

### 1. All the companies that it's name match 'Babelgum'. Retrieve only their `name` field.

db.companies.find({'name': 'Babelgum'}, {'name': 1, '_id':0}).pretty();
<!-- Your Code Goes Here -->

### 2. All the companies that have more than 5000 employees. Limit the search to 20 companies and sort them by **number of employees**.

db.companies.find({'number_of_employees': {$gt: 5000}},{'number_of_employees':1}).limit(20).sort({'number_of_employees': 1}).pretty();
<!-- Your Code Goes Here -->

### 3. All the companies founded between 2000 and 2005, both years included. Retrieve only the `name` and `founded_year` fileds.

db.companies.find({$and: [{'founded_year': {$gt: 1999}}, {'founded_year': {$lt: 2006}}]},{'founded_year':1, 'name': 1}).limit(50).pretty();
<!-- Your Code Goes Here -->

### 4. All the companies that had a Valuation Amount of more than 100.000.000 and have been founded before 2010. Retrieve only the `name` and `ipo` fields.
db.companies.find({$and: [{'ipo.valuation_amount': {$gt: 100000000}}, {'founded_year': {$lt: 2010}}]},{'name': 1, 'ipo': 1}).pretty();


<!-- Your Code Goes Here -->

### 5. All the companies that have less than 1000 employees and have been founded before 2005. Order them by the number of employees and limit the search to 10 companies.

db.companies.find({$and: [{'number_of_employees': {$gt: 1000}}, {'founded_year': {$lt: 2005}}]}).limit(10).pretty();
<!-- Your Code Goes Here -->

### 6. All the companies that don't include the `partners` field.

db.companies.find({'partners': {$nin: []}})
<!-- Your Code Goes Here -->

### 7. All the companies that have a null type of value on the `category_code` field.

db.companies.find({'category_code': {$in: [null]}})
<!-- Your Code Goes Here -->

### 8. All the companies that have at least 100 employees but less than 1000. Retrieve only the `name` and `number of employees` fields.

db.companies.find({$and: [{'number_of_employees': {$gt: 100}}, {'number_of_employees': {$lt: 1000}}]},{'number_of_employees':1, 'name': 1});
<!-- Your Code Goes Here -->

### 9. Order all the companies by their IPO price descendently.
db.companies.find().limit(10).sort({'ipo.valuation_amount': -1}).pretty();
<!-- Your Code Goes Here -->

### 10. Retrieve the 10 companies with more employees, order by the `number of employees`

db.companies.find().limit(10).sort({'number_of_employees': -1}).pretty();
<!-- Your Code Goes Here -->

### 11. All the companies founded on the second semester of the year. Limit your search to 1000 companies.

db.companies.find({'founded_month': {$gt: 6}}).limit(1000).pretty();
<!-- Your Code Goes Here -->

### 12. All the companies that have been 'deadpooled' after the third year.
db.companies.find({'deadpooled_year': {$gt: 3}}).pretty()
<!-- Your Code Goes Here -->

### 13. All the companies founded before 2000 that have and acquisition amount of more than 10.000.000
db.companies.find({$and: [{'founded_year': {$lt: 2000}}, {'acquisition.price_amount': {$gt: 10000000}}]},{'acquisition.price_amount':1, 'name': 1});
<!-- Your Code Goes Here -->

### 14. All the companies that have been acquired after 2015, order by the acquisition amount, and retrieve only their `name` and `acquisiton` field.
db.companies.find({'acquisition.acquired_year': {$gt: 2015}},{'acquisition.acquired_year':1, 'name': 1});

<!-- Your Code Goes Here -->

### 15. Order the companies by their `founded year`, retrieving only their `name` and `founded year`.
db.companies.find({},{'founded_year': 1, 'name': 1}).sort({'founded_year': 1}).pretty();
<!-- Your Code Goes Here -->

### 16. All the companies that have been founded on the first seven days of the month, including the seventh. Sort them by their `aquisition price` descendently. Limit the search to 10 documents.
db.companies.find({$and: [{'founded_day': {$gt: 0}}, {'founded_day': {$lt: 8}}]},{'acquisition.price_amount':1, 'name': 1}).sort({'acquisition.price_amount': -1}).limit(10);
<!-- Your Code Goes Here -->

### 17. All the companies on the 'web' `category` that have more than 4000 employees. Sort them by the amount of employees in ascendant order.
db.companies.find({$and: [{'category_code': 'web'}, {'number_of_employees': {$gt: 4000}}]},{'number_of_employees':1, 'name': 1}).sort({'number_of_employees': 1});

<!-- Your Code Goes Here -->

### 18. All the companies which their acquisition amount is more than 10.000.000, and currency are 'EUR'.
db.companies.find({$and: [{'acquisition.price_currency_code': 'EUR'}, {'acquisition.price_amount': {$gt: 10000000}}]},{'acquisition.price_amount':1, 'name': 1});

price_currency_code
<!-- Your Code Goes Here -->

### 19. All the companies that have been acquired on the first trimester of the year. Limit the search to 10 companies, and retrieve only their `name` and `acquisition` fields.
db.companies.find({'acquisition.acquired_month': {$lt: 4}}, {'name':1, 'acquisition': 1}).limit(10).pretty();


<!-- Your Code Goes Here -->

### 20. All the companies that have been founded between 2000 and 2010, but have not been acquired before 2011.
db.companies.find({$and: [{'founded_year': {$gt: 1999}},{'acquisition.acquired_year': {$gt: 2010}}, {'founded_year': {$lt: 2011}}]},{'founded_year':1, 'name': 1}).pretty();

<!-- Your Code Goes Here -->
