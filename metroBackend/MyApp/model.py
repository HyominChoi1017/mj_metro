from prophet import Prophet

def predictDataFrame(data):
    df = data[['ds','y']]
    df['cap'] = 1
    model = Prophet(growth='logistic')
    model.fit(df)
    future = model.make_future_dataframe(periods=130)
    future['cap'] = 1
    forecast = model.predict(future)
    
    '''
    normal = ['1호선', '2호선', '3호선', '4호선', '5호선', '6호선', '7호선', '8호선', '9호선']
    for index, row in df.iterrows():

        count = 0
        for n in normal:
            if row['호선명'] == n:
                count += 1
                continue
        if count == 0:
            df.drop(index, inplace=True)

    my_data = df        
    '''
    print('sibal: ',(forecast.tail(1))['ds'][-2:][-2:])
    
    normal = ['04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15' ,'16', '17', '18', '19', '20', '21', '22', '23', '24']
    
    for index, row in forecast.iterrows():
        count = 0
        for n in normal: 
#             print(str(row['ds'])[8:10])
            if str(row['ds'])[8:10] == n:
                count += 1
                continue
        if count == 0:
            forecast.drop(index, inplace=True)
    
    
    
    return forecast.tail(80)