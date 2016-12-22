# Load required packages and libraries.
import numpy as np
import pandas as pd
from pandas import Series,DataFrame

# Load dataset
titanic_df = pd.read_csv('data/titanic_data.csv')

# drop unnecessary columns
titanic_df = titanic_df.drop(['PassengerId','Name', 'SibSp', 'Parch', 'Ticket', 'Fare', 'Cabin', 'Embarked'], axis=1)

# drop rows with null value in Age
titanic_df = titanic_df[np.isfinite(titanic_df['Age'])]

# export wrangled data
titanic_df.to_csv('data/titanic.csv')