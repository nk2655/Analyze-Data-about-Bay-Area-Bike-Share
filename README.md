# P6 Make Effective Data Visualization Titanic
by NK Zhehua Zou


### Summary
This data includes 891 passengers and 12 variables.  
This investigation focus on three parts: survivals base on Pclass, Sex, Age.  

### Description of attributes:
PassengerID: ID number of passenger.  
Survived: status of survival, 0=false, 1=true.  
Pclass: class of passenger, 1=1st, 2=2nd, 3=3rd.  
Name: name.  
Sex: sex.  
Age: age.  
SibSp: the number of siblings/spouses aboard.  
Parch: the number of parents/children aboard.  
Ticket: ticket's number.  
Fare: passenger's fare.  
Cabin: carbin.  
Embarked: port of embarkation, C=Cherbourg, Q=Queenstown, S=Southampton.

### Design
1) I created new data 'pclass.csv', 'sex.csv' and 'age.csv' by countifs function in excel. Because:  
a) There has many missing values in dataset, use countif function is better to caculate survived rate without missing values.  
b) It's easy to understand the and visualizated data by dimple.js.  
2) Visualizated investigation of data with javascript ('main.js'), and barplot is good to present compared relationship.  

### Feedback and Improvement
##### Asked for suggestions from three people and improved my report according to their suggestions.
1) What does the 'Pclass' stand for?  
I add Descirption of attributes into analysis report to help people easy to understand variables.  
2) What does the color means?  
I modified code in 'main.js' and add legend to explain what difference of colors.  
3) What is means of these 3 charts?  
I added text description and conclution into report to help people to understand sotory.  

### Conclusion
Less half of passengers were survived from the Titanic.  
The survival rate of 1st class passengers was much greater than that of 3rd class passengers.  
The survival rate of female passengers was much greater than that of male passengers.  
A higher percentage of children made it through as compared to the adults.