from django.core.exceptions import *
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.views import APIView


# Test View
class UserDataAPI(APIView):
    def get(self, request):
        queryset = User.objects.all()
        print(queryset)
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

class ScheduleDataAPI(APIView):
    def get(self, request):
        queryset = Schedule.objects.all()
        print(queryset)
        serializer = ScheduleSerializer(queryset,many=True)
        return Response(serializer.data)
# Actual View
class StationDataAPI(APIView):
    def get(self, request):
        queryset = Station.objects.all()
        print(queryset)
        serializer = StationSerializer(queryset, many=True)
        return Response(serializer.data)

def create_schedule(request, user_id):
    pass

def delete_schedule(request, user_id, schedule_id):
    pass