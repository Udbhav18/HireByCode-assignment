from django.db import models
from django.contrib.auth.models import User
import datetime

class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True, default=None)
    created_at = models.DateTimeField(default=datetime.datetime.now())

    def __str__(self):
        return self.title