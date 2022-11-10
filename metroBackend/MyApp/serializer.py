from rest_framework import serializers
from .models import Schedule, User, Report

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ("id", "user_id", "contents")

class UserSerializer(serializers.ModelSerializer):
    user = ScheduleSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ("favStation", "favRoute", "user_name", "user_pw", "alarm_time", "user")

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("delayReport")