import pandas as pd
import os
cwd = os.getcwd()

DIR = str(cwd)+'/MyApp/MLf/dataset/norm_station_pop.csv' 
df = pd.read_csv(DIR) 
# get new_df which is for particular 

def getNewDf(station_name):
    global df 
#     print(df)
    new_df = pd.DataFrame()
    for index, row in df.iterrows():
        
        if station_name == row['지하철역']: 
            for r in row.keys():
#                 print(type(row.keys()), row.keys())
#                 print(r)
                if '인원' in r: 
                    dt = str(row['사용월'])[:4] +'-'+ str(row['사용월'])[4:]  + '-' + r[:2]
                    temp = pd.Series({dt:row[r]},name=row['호선명'])
                    new_df = pd.concat([new_df, temp]) 
    
    '''
    df = seoul_station.reset_index()
    df['ds'] = df['index']
    df['y'] = df[0]
    df = df.drop_duplicates(['ds'])
    '''        

    
        
    new_df = new_df.sort_index() 
    temp_df = new_df.reset_index() 
    temp_df['ds'] = temp_df['index'] 
    temp_df['y'] = temp_df[0]
    temp_df = temp_df.drop_duplicates(['ds']) 

    return pd.DataFrame(temp_df)
 