from flask import Flask , request
import numpy as np
import pandas as pd
import pickle
import joblib
import json
from sklearn.model_selection import RandomizedSearchCV
# from lightgbm import LGBMRegressor


app = Flask(__name__)


def process_resposne(input):
    dict = {}
    for key in input.keys() :
        if input[key] == 'None':
            dict[key] = np.NaN
        else :
            dict[key] = input[key]

    return dict



#request waited : a json with attributes country and city
@app.route('/' ,methods=['GET', 'POST'])
def predict():

    #receiving the json
    input = request.get_json()





    """
    
    
    the json should be iterated first and null values converted to np.NaN
    
    
    
    """
    
    print(type(input))
    print((input))


    #to assign to None values 
    dict = {}
    possible_values = ['None' , '', 'none' , 'null' , 'Null']
    for key in input :
        if input[key] in possible_values:
            dict[key] = np.NaN
        else :
            dict[key] = input[key]


    print(dict)



    #df will be passed through the pipeline
    df = pd.DataFrame(dict,index=[0])



    #loading the preprocess pipleine
    pickled_model = pickle.load(open('pretrained_models/preprocess_pipeline.pkl', 'rb'))



    to_predict = pickled_model.transform(df)


    #loading the lgbm model
    model = joblib.load('pretrained_models/model.pkl')

    y_pred = model.predict(to_predict)

    #the price
    price = round(y_pred[0])
    print(price)

    output = {"price":price} 

    return json.dumps(output)
    




if __name__ == '__main__':
    app.run(debug=True,host = '0.0.0.0')
