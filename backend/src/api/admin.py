from .models import Task
from django.contrib import admin


@admin.register(Task)
class TaskModel(admin.ModelAdmin):
    list_filter = ('created_by', 'title', 'description')
    list_display = ('created_by', 'title', 'description')
    readonly_fields = ('created_at',)
