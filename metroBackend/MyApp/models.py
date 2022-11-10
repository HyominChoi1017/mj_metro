from django.db import models

# Create your models here.

class Schedule(models.Model):
    id = models.BigAutoField(help_text="Schedule ID", primary_key=True)
    user_id = models.ForeignKey("User", related_name="user", on_delete=models.CASCADE, db_column="user_id")
    contents = models.DateTimeField(help_text="Schedule Datetime")

class User(models.Model):
    
    favStation = models.CharField(max_length=None) # 역정보를 배열로.. 그걸 str로 변환한 것을 저장
    favRoute = models.CharField(max_length=None) # 경로 정보를 딕셔너리나 2차원 배열로.. 그걸 str로 변환한 것을 저장

    user_name = models.TextField(max_length=30, db_column="user_id")
    user_pw = models.CharField(max_length=30)
    
    

    alarm_time = models.IntegerField(default=60) # 열차 도착 n분 전 알림 (기본값 60분)
 

class Report(models.Model):
    delayReport = models.IntegerField(default=0)


