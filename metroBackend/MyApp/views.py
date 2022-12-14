from django.core.exceptions import *
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from .realtimeWeather import *
from .subway import d
import datetime
import os
from .data import getNewDf
from .model import predictDataFrame
import ast

# Test View 
class UserDataAPI(APIView):
    # 전체 유저 데이터 획득
    @csrf_exempt
    def get(self, request):
        queryset = User.objects.all()
        print(queryset)
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    # 회원가입 
    @csrf_exempt
    def post(self, request):
        queryset = JSONParser().parse(request)
        serializer = UserSerializer(data=queryset)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201) #JsonResponse로 하는 방법도 존재
        return Response(serializer.errors, status=400) #JsonResponse로 하는 방법도 존재


class SingleUserDataAPI(APIView):
    #단일 유저데이터 조회
    @csrf_exempt
    def get(self, request, userid):
        queryset = User.objects.all().filter(id__exact=userid)
        print(queryset)
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    #단일 유저데이터 수정
    @csrf_exempt
    def put(self, request, userid):
        queryset = User.objects.all().filter(id__exact=userid)
        data = JSONParser().parse(request)
        print(queryset)
        serializer = UserSerializer(queryset, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.data, status=400)

    #단일 유저데이터 삭제
    def delete(self, request, userid):
        obj = User.objects.all().filter(id_exact=userid)
        obj.delete()
        return Response(status=204)


class ScheduleDataAPI(APIView):
    @csrf_exempt
    def get(self, request):
        queryset = Schedule.objects.all()
        print(queryset)
        serializer = ScheduleSerializer(queryset,many=True)
        return Response(serializer.data)
    
    @csrf_exempt
    def post(self, request):
        queryset = JSONParser().parse(request)
        serializer = ScheduleSerializer(data=queryset)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201) #JsonResponse로 하는 방법도 존재
        return Response(serializer.errors, status=400) #JsonResponse로 하는 방법도 존재

# User의 Schedule을 관리한다. 
class UserScheduleAPI(APIView):
    @csrf_exempt
    def get(self, request, userid):
        queryset = Schedule.objects.all().filter(user__exact=userid)[-1]
        print(queryset.values)
        serializer = UserScheduleSerializer(queryset, many=False)
        return Response(serializer.data)  
    @csrf_exempt
    def post(self, request, userid):
        queryset = JSONParser().parse(request)
        serializer = UserScheduleSerializer(data=queryset)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status=201)
        return Response(serializer.errors, status=400)

# Actual View 
class StationDataAPI(APIView):
    @csrf_exempt
    def get(self, request):
        queryset = Station.objects.all()
        print(queryset)
        serializer = StationSerializer(queryset, many=True)
        return Response(serializer.data)

class SingleStationDataAPI(APIView):
    @csrf_exempt
    def get(self, request, snum):
        queryset = Station.objects.all().filter(stationNum__exact=snum)
        print(queryset)
        serializer = SingleStationSerializer(queryset, many=True)
        return Response(serializer.data)


# User의 FavStation을 관리한다. 
class UserStationAPI(APIView):
    @csrf_exempt
    def get(self, request, userid):
        queryset = FavStation.objects.all().filter(favstationId__exact=userid)
        print(queryset.values)
        serializer = UserStationSerializer(queryset, many=True)
        return Response(serializer.data)
    
    @csrf_exempt
    def post(self, request, userid):
        queryset = JSONParser().parse(request)
        serializer = UserStationSerializer(data=queryset)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201) #JsonResponse로 하는 방법도 존재
        return Response(serializer.errors, status=400) #JsonResponse로 하는 방법도 존재

class UserRouteAPI(APIView):
    @csrf_exempt
    def get(self, request, userid):
        queryset = FavRoute.objects.all().filter(favRouteId__exact=userid)
        print(queryset.values)
        serializer = UserRouteSerializer(queryset, many=True)
        return Response(serializer.data)
    @csrf_exempt
    def post(self, request, userid):
        queryset = JSONParser().parse(request)
        serializer = UserRouteSerializer(data=queryset)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201) #JsonResponse로 하는 방법도 존재
        return Response(serializer.errors, status=400) #JsonResponse로 하는 방법도 존재


class WeatherAPI(APIView):
    def get(self, request, sname):
        stationData = Station.objects.all().filter(stationName__exact=sname)
        print(stationData[0].latitude, stationData[0].longitude)
        lat = stationData[0].latitude
        lon = stationData[0].longitude
        wdata = getWeatherData(lat, lon)
        print(wdata)
        
        # serializer = WeatherSerializer(wdata, many=False)
        # return Response(serializer.data)
        return Response(wdata)
 
class PopulationAPI(APIView):
    def get(self, request, sname):
        dat = getNewDf(sname)
        fcst = predictDataFrame(dat)

        tdy = datetime.date.today()
        year = str(tdy.year)
        month = str(tdy.month)
        hour = str(datetime.datetime.now().hour)

        yhats = []
        ycurr = 0
        for index, d in fcst.iterrows():
            if year in str(d['ds']) and month in str(d['ds']) and hour in str(d['ds']):
                ycurr = d['yhat']
                yhats.append(d['yhat'])
            elif year in str(d['ds']) and month in str(d['ds']):
                yhats.append(d['yhat'])

        y = (ycurr - min(yhats)) / (max(yhats)-min(yhats))
        pop = ""
        
         

        if y < 0.3: 
            pop = "여유"
        elif 0.3 <= y < 0.6:
            pop = "보통"
        elif 0.6 <= y < 0.8:
            pop = "혼잡"  
        else:
            pop = "매우 혼잡"
        resp = {
            'density': pop
        }
        return Response(resp)


@csrf_exempt
@api_view()
def UserLogin(request):
    if request.method == 'POST':
        loginData = JSONParser().parse(request)
        search_username = loginData['Username']
        search_password = loginData['Password']
        objusrname = User.objects.get(Username=search_username)
        objpw = User.objects.get(Password=search_password)

        if loginData['Username'] == objusrname.Username and loginData['Password'] == objpw.Password:
            return Response(status=200)
        else:
            return Response(status=400)



# @api_view()
# def Route(request, query):

#     query_data = json.loads(query)
#     print(query_data)
#     s = query_data['s']
#     e = query_data['e']
#     arg = query_data['args']

#     r_val = d(s, e, arg)
#     return Response(r_val)

class RouteAPI(APIView):
    @csrf_exempt
    def get(self, request, s, e, arg): 
        print('---------{} {} ------'.format(s, e))
        arg = ast.literal_eval(arg)
       

        result = d(str(s), str(e), arg)

        return Response(result)

@api_view()
def Population(request, stationName):
    name = stationName
