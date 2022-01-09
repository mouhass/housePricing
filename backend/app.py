from flask import Flask , request
import numpy as np
import pandas as pd
import pickle
import joblib
# from sklearn.model_selection import RandomizedSearchCV
# from lightgbm import LGBMRegressor


app = Flask(__name__)






#request waited : a json with attributes country and city
@app.route('/' ,methods=['GET', 'POST'])
def predict():

    #receiving the json
    received = request.get_json()

    """
    
    
    the json should be iterated first and null values converted to np.NaN
    
    
    
    """
    
    print(type(received))
    print((received))

    #df will be passed through the pipeline
    df = pd.DataFrame(received,index=[0])



    #loading the preprocess pipleine
    pickled_model = pickle.load(open('pretrained_models/preprocess_pipeline.pkl', 'rb'))



    to_predict = pickled_model.transform(df)


    #loading the lgbm model
    model = joblib.load('pretrained_models/model.pkl')

    y_pred = model.predict(to_predict)

    #the price
    print(y_pred[0])


    return str((y_pred[0]))
    




if __name__ == '__main__':
    app.run(debug=True)
